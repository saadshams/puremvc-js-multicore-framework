/**
 *
 * @class puremvc.Facade
 * @implements puremvc.IFacade
 */
class Facade {

    /**
     * @constructor
     */
    constructor(key) {
        if (Facade.instanceMap[key] != null) throw new Error(Facade.MULTITON_MSG);
        /** @private */
        this.initializeNotifier(key);
        Facade.instanceMap.set(this.multitonKey, this);
        this.initializeFacade();
    }

    initializeFacade() {
        this.initializeModel();
        this.initializeController();
        this.initializeView();
    }

    /**
     *
     * @param {string} key
     * @param {function(string):puremvc.IFacade} facadeFunction
     * @returns {puremvc.IFacade}
     */
    static getInstance(key, facadeFunction) {
        if (this.instanceMap.get(key) == null) this.instanceMap.set(key, facadeFunction(key));
        return this.instanceMap.get(key);
    }

    initializeModel() {
        if (this.model != null) return;
        this.model = Model.getInstance(this.multitonKey, key => new Model(key));
    }

    initializeController() {
        if (this.controller != null) return;
        this.controller = Controller.getInstance(this.multitonKey, key => new Controller(key));
    }

    initializeView() {
        if (this.view != null) return;
        this.view = View.getInstance(this.multitonKey, key => new View(key));
    }

    registerCommand(notificationName, commandFunction) {
        this.controller.registerCommand(notificationName, commandFunction);
    }

    hasCommand(notificationName) {
        return this.controller.hasCommand(notificationName);
    }

    removeCommand(notificationName) {
        this.controller.removeCommand(notificationName);
    }

    registerProxy(proxy) {
        this.model.registerProxy(proxy);
    }

    removeProxy(proxyName) {
        return this.model.removeProxy(proxyName);
    }

    hasProxy(proxyName) {
        return this.model.hasProxy(proxyName);
    }

    retrieveProxy(proxyName) {
        return this.model.retrieveProxy(proxyName);
    }

    registerMediator(mediator) {
        this.view.registerMediator(mediator);
    }

    removeMediator(mediatorName) {
        return this.view.removeMediator(mediatorName);
    }

    hasMediator(mediatorName) {
        return this.view.hasMediator(mediatorName);
    }

    retrieveMediator(mediatorName) {
        return this.view.retrieveMediator(mediatorName);
    }

    sendNotification(notificationName, body, type) {
        this.notifyObservers(new Notification(notificationName, body, type));
    }

    notifyObservers(notification) {
        this.view.notifyObservers(notification);
    }

    initializeNotifier(key) {
        this.multitonKey = key;
    }

    static hasCore(key) {
        return this.instanceMap.has(key);
    }

    static removeCore(key) {
        if (Facade.instanceMap.get(key) == null) return;
        /** @typedef {puremvc.IModel} Model */
        Model.removeModel(key);
        /** @typedef {puremvc.IView} View */
        View.removeView(key);
        /** @typedef {puremvc.IController} Controller */
        Controller.removeController(key);
        this.instanceMap.delete(key);
    }

    /**
     *
     * @type {Map<string, puremvc.IFacade>}
     */
    static instanceMap = new Map();

    /**
     *
     * @type {string}
     */
    static get MULTITON_MSG() {return "Facade instance for this Multiton key already constructed!"};
}