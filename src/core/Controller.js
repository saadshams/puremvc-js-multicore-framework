/**
 * @author Copyright(c) 2019 Saad Shams <saad.shams@puremvc.org>
 *
 * @class puremvc.Controller
 * @implements puremvc.IController
 */
class Controller {

    /**
     * @constructor
     * @param {string} key
     */
    constructor(key) {
        if (Controller.instanceMap[key] != null) throw new Error(Controller.MULTITON_MSG);
        /** @member {string} */
        this.multitonKey = key;
        Controller.instanceMap.set(this.multitonKey, this);
        /** @member {Map<string, function():ICommand>} */
        this.commandMap = new Map();
        this.initializeController();
    }

    initializeController() {
        /** @protected **/
        this.view = View.getInstance(this.multitonKey, (key) => new View(key));
    }

    /**
     *
     * @param {string} key
     * @param {function(string):puremvc.IController} controllerFunction
     * @returns {puremvc.IController}
     */
    static getInstance(key, controllerFunction) {
        if (this.instanceMap.get(key) == null) this.instanceMap.set(key, controllerFunction(key));
        return this.instanceMap.get(key);
    }

    executeCommand(notification) {
        let commandFunction = this.commandMap.get(notification.name);
        if (commandFunction == null) return;

        let commandInstance = commandFunction();
        commandInstance.initializeNotifier(this.multitonKey);
        commandInstance.execute(notification);
    }

    registerCommand(notificationName, commandFunction) {
        if (this.commandMap.get(notificationName) == null) {
            this.view.registerObserver(notificationName, new Observer(this.executeCommand, this));
        }
        this.commandMap.set(notificationName, commandFunction);
    }

    hasCommand(notificationName) {
        return this.commandMap.has(notificationName);
    }

    removeCommand(notificationName) {
        if(this.hasCommand(notificationName)) {
            this.view.removeObserver(notificationName, this);
            this.commandMap.delete(notificationName)
        }
    }

    static removeController(key) {
        Controller.instanceMap.delete(key);
    }

    /**
     *
     * @type {Map<string, puremvc.IController>}
     */
    static instanceMap = new Map();

    /**
     *
     * @type {string}
     */
    static get MULTITON_MSG() { return "Controller instance for this Multiton key already constructed!"};

}