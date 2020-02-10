//
//  PureMVC JS Multicore
//
//  Copyright(c) 2019 Saad Shams <saad.shams@puremvc.org>
//  Your reuse is governed by the Creative Commons Attribution 3.0 License
//

(scope => {
    "use strict";


/**
 * The interface definition for a PureMVC Command.
 *
 * @interface puremvc.ICommand
 * @extends puremvc.INotifier
 */
function ICommand() {}

ICommand.prototype = new INotifier();
ICommand.prototype.constructor = IMediator;

/**
 *
 * @param {puremvc.INotification} notification
 */
ICommand.prototype.execute = notification => {
    throw new Error("Not Implemented");
};

/**
 * The interface definition for a PureMVC Controller.
 *
 * @interface puremvc.IController
 */
function IController() {}

/**
 *
 * @param {string} notificationName
 * @param {function():puremvc.ICommand} commandFunction
 */
IController.prototype.registerCommand = (notificationName, commandFunction) => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {puremvc.INotification} notification
 */
IController.prototype.executeCommand = notification => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} notificationName
 */
IController.prototype.removeCommand = notificationName => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} notificationName
 */
IController.prototype.hasCommand = notificationName => {
    throw new Error("Not Implemented");
};

/**
 * The interface definition for a PureMVC Facade.
 *
 * @interface puremvc.IFacade
 * @extends puremvc.INotifier
 */
function IFacade() {}

IFacade.prototype = new INotifier();
IFacade.prototype.constructor = IFacade;

/**
 *
 * @param {puremvc.IProxy} proxy
 */
IFacade.prototype.registerProxy = proxy => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} proxyName
 * @returns {puremvc.IProxy}
 */
IFacade.prototype.retrieveProxy = proxyName => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} proxyName
 * @returns {puremvc.IProxy}
 */
IFacade.prototype.removeProxy = proxyName => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} proxyName
 * @returns {boolean}
 */
IFacade.prototype.hasProxy = proxyName => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} notificationName
 * @param {function():puremvc.ICommand} commandFunction
 */
IFacade.prototype.registerCommand = (notificationName, commandFunction) => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} notificationName
 */
IFacade.prototype.removeCommand = notificationName => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} notificationName
 */
IFacade.prototype.hasCommand = notificationName => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {puremvc.IMediator} mediator
 */
IFacade.prototype.registerMediator = mediator => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} mediatorName
 * @returns {puremvc.IMediator}
 */
IFacade.prototype.retrieveMediator = mediatorName =>  {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} mediatorName
 * @returns {puremvc.IMediator}
 */
IFacade.prototype.removeMediator = mediatorName => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} mediatorName
 * @returns {boolean}
 */
IFacade.prototype.hasMediator = mediatorName => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {puremvc.INotification} notification
 */
IFacade.prototype.notifyObservers = notification => {
    throw new Error("Not Implemented");
};

/**
 * The interface definition for a PureMVC Mediator.
 *
 * @interface puremvc.IMediator
 * @extends puremvc.INotifier
 */
function IMediator() {}

IMediator.prototype = new INotifier();
IMediator.prototype.constructor = IMediator;

/**
 *
 * @returns {string}
 */
IMediator.prototype.getMediatorName = () => {
    throw new Error("Not Implemented");
};

/**
 *
 * @returns {*}
 */
IMediator.prototype.geViewComponent = () => {
    throw new Error("Not Implemented");
};

/**
 *
 * @returns {[string]}
 */
IMediator.prototype.listNotificationInterests = () => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {puremvc.INotification} notification
 */
IMediator.prototype.handleNotification = notification => {
    throw new Error("Not Implemented");
};

/**
 * @return {void}
 */
IMediator.prototype.onRegister = () => {
    throw new Error("Not Implemented");
};

/**
 * @return {void}
 */
IMediator.prototype.onRemove = () => {
    throw new Error("Not Implemented");
};

/**
 * The interface definition for a PureMVC Model.
 *
 * @interface puremvc.IModel
 */
function IModel() {}

/**
 *
 * @param {puremvc.IProxy} proxy
 */
IModel.prototype.registerProxy = proxy => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} proxyName
 * @returns {puremvc.IProxy}
 */
IModel.prototype.retrieveProxy = proxyName => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} proxyName
 * @returns {puremvc.IProxy}
 */
IModel.prototype.removeProxy = proxyName => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} proxyName
 * @returns {boolean}
 */
IModel.prototype.hasProxy = proxyName => {
    throw new Error("Not Implemented");
};

/**
 * The interface definition for a PureMVC Notification.
 *
 * @interface puremvc.INotification
 */
function INotification() {}

/**
 *
 * @returns {string}
 */
INotification.prototype.getName = () => {
    throw new Error("Not Implemented");
};

/**
 *
 * @returns {*}
 */
INotification.prototype.getBody = () => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {*} body
 */
INotification.prototype.setBody = body => {
    throw new Error("Not Implemented");
};

/**
 *
 * @returns {string}
 */
INotification.prototype.getType = () => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} type
 */
INotification.prototype.setType = type => {
    throw new Error("Not Implemented");
};

/**
 *
 * @returns {string}
 */
INotification.prototype.toString = () => {
    throw new Error("Not Implemented");
};

/**
 * The interface definition for a PureMVC Notifier.
 *
 * @interface puremvc.INotifier
 */
function INotifier() {}

/**
 *
 * @param {string} notificationName
 * @param {*} [body]
 * @param {string} [type]
 */
INotifier.prototype.sendNotification = (notificationName, body, type) => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} key the multitonKey for this INotifier to use
 */
INotifier.prototype.initializeNotifier = key => {
    throw new Error("Not Implemented");
};

/**
 * The interface definition for a PureMVC Observer.
 *
 * @interface puremvc.IObserver
 */
function IObserver() {}

/**
 *
 * @param {puremvc.INotification} notification
 */
IObserver.prototype.notifyObserver = notification => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {Object} context
 */
IObserver.prototype.compareNotifyContext = context => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {function(puremvc.INotification):void} notifyMethod
 */
IObserver.prototype.setNotifyMethod = notifyMethod => {
    throw new Error("Not Implemented");
};

/**
 *
 * @returns {function(puremvc.INotification):void}
 */
IObserver.prototype.getNotifyMethod = () => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {Object} notifyContext
 */
IObserver.prototype.setNotifyContext = (notifyContext) => {
    throw new Error("Not Implemented");
};

/**
 *
 * @returns {Object}
 */
IObserver.prototype.getNotifyContext = () => {
    throw new Error("Not Implemented");
};

/**
 * The interface definition for a PureMVC Proxy.
 *
 * @interface puremvc.IProxy
 * @extends INotifier
 */
function IProxy() {}

IProxy.prototype = new INotifier();
IProxy.prototype.constructor = IProxy;

/**
 * Get the Proxy name
 *
 * @returns {string}
 */
IProxy.prototype.getProxyName = () => {
    throw new Error("Not Implemented");
};

/**
 * Set the data object
 * @param {*} data
 */
IProxy.prototype.setData = data => {
    throw new Error("Not Implemented");
};

/**
 * Get the data object
 *
 * @returns {*}
 */
IProxy.prototype.getData = () => {
    throw new Error("Not Implemented");
};

/**
 * Called by the Model when the Proxy is registered
 */
IProxy.prototype.onRegister = () => {
    throw new Error("Not Implemented");
};

/**
 * Called by the Model when the Proxy is removed
 */
IProxy.prototype.onRemove = () => {
    throw new Error("Not Implemented");
};

/**
 * The interface definition for a PureMVC View.
 *
 * @interface puremvc.IView
 */
function IView() {}

/**
 *
 * @param {string} notificationName
 * @param {puremvc.IObserver} observer
 */
IView.prototype.registerObserver = (notificationName, observer) => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} notificationName
 * @param {Object} notifyContext
 */
IView.prototype.removeObserver = (notificationName, notifyContext) => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {puremvc.INotification} notification
 */
IView.prototype.notifyObservers = notification => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {puremvc.IMediator} mediator
 */
IView.prototype.registerMediator = mediator => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} mediatorName
 * @returns {puremvc.IMediator}
 */
IView.prototype.retrieveMediator = mediatorName => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} mediatorName
 * @returns {puremvc.IMediator}
 */
IView.prototype.removeMediator = mediatorName => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} mediatorName
 * @returns {boolean}
 */
IView.prototype.hasMediator = mediatorName => {
    throw new Error("Not Implemented");
};

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
        /**
         * @protected
         * @typedef {puremvc.IView} View
         **/
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
     * @type {Map<string, IController>}
     */
    static instanceMap = new Map();

    /**
     *
     * @type {string}
     */
    static get MULTITON_MSG() { return "Controller instance for this Multiton key already constructed!"};

}

/**
 *
 * @class puremvc.Model
 * @implements puremvc.IModel
 */
class Model {

    /**
     * @constructor
     * @param {string} key
     */
    constructor(key) {
        if (Model.instanceMap.get(key) != null) throw new Error(Model.MULTITON_MSG);
        /** @member {string} */
        this.multitonKey = key;
        Model.instanceMap.set(this.multitonKey, this);
        /** @member {Map<string, IProxy>} */
        this.proxyMap = new Map();
        this.initializeModel();
    }

    initializeModel() {

    }

    /**
     *
     * @param {string} key
     * @param {function(string):puremvc.IModel} modelFunction
     * @returns {puremvc.IModel}
     */
    static getInstance(key, modelFunction) {
        if (this.instanceMap.get(key) == null) this.instanceMap.set(key, modelFunction(key));
        return this.instanceMap.get(key);
    }

    registerProxy(proxy) {
        proxy.initializeNotifier(this.multitonKey);
        this.proxyMap.set(proxy.getProxyName(), proxy);
        proxy.onRegister();
    }

    retrieveProxy(proxyName) {
        return this.proxyMap.get(proxyName);
    }

    hasProxy(proxyName) {
        return this.proxyMap.has(proxyName);
    }

    removeProxy(proxyName) {
        let proxy = this.proxyMap.get(proxyName);
        if (proxy != null) {
            this.proxyMap.delete(proxyName);
            proxy.onRemove();
        }
        return proxy;
    }

    static removeModel(key) {
        Model.instanceMap.delete(key);
    }

    /**
     *
     * @type {Map<string, IModel>}
     */
    static instanceMap = new Map();

    /**
     *
     * @type {string}
     */
    static get MULTITON_MSG() { return "Model instance for this Multiton key already constructed!" };
}

/**
 * @class puremvc.View
 * @implements puremvc.IView
 */
class View {

    /**
     * @constructor
     * @param {string} key
     */
    constructor(key) {
        if (View.instanceMap.get(key) != null) throw new Error(View.MULTITON_MSG);
        /** @member {string} */
        this.multitonKey = key;
        View.instanceMap.set(this.multitonKey, this);

        /** @member {Map<string, IMediator>} */
        this.mediatorMap = new Map();

        /** @member {Map<string, [IObserver]>} */
        this.observerMap = new Map();
        this.initializeView();
    }

    initializeView() {

    }

    /**
     *
     * @static
     * @param {string} key
     * @param {function(string):puremvc.IView} viewFunction
     * @returns {puremvc.IView}
     */
    static getInstance(key, viewFunction) {
        if (this.instanceMap.get(key) == null) this.instanceMap.set(key, viewFunction(key));
        return this.instanceMap.get(key);
    }

    registerObserver(notificationName, observer) {
        if (this.observerMap.get(notificationName) != null) {
            let observers = this.observerMap.get(notificationName);
            observers.push(observer);
        } else {
            this.observerMap.set(notificationName, new Array(observer));
        }
    }

    notifyObservers(notification) {
        if (this.observerMap.get(notification.name) != null) {
            // Copy observers from reference array to working array,
            // since the reference array may change during the notification loop
            let observers = this.observerMap.get(notification.name);

            // Notify Observers from the working array
            for(let i = 0; i < observers.length; i++) {
                observers[i].notifyObserver(notification);
            }
        }
    }

    removeObserver(notificationName, notifyContext) {
        let observers = this.observerMap.get(notificationName);

        for (let i = 0; i < observers.length; i++) {
            if (observers[i].compareNotifyContext(notifyContext) == true) {
                // there can only be one Observer for a given notifyContext
                // in any given Observer list, so remove it and break
                observers.splice(i, 1);
                break;
            }
        }

        // Also, when a Notification's Observer list length falls to
        // zero, delete the notification key from the observer map
        if (observers.length == 0) {
            this.observerMap.delete(notificationName);
        }
    }

    /**
     *
     * @param {puremvc.IMediator} mediator
     */
    registerMediator(mediator) {
        if (this.mediatorMap.get(mediator.name) != null) return;

        mediator.initializeNotifier(this.multitonKey);

        this.mediatorMap.set(mediator.getMediatorName(), mediator);

        let interests = mediator.listNotificationInterests();

        if (interests.length > 0) {
            let observer = new Observer(mediator.handleNotification.bind(mediator), mediator); // check bind

            for (let i = 0; i < interests.length; i++) {
                this.registerObserver(interests[i], observer);
            }
        }

        mediator.onRegister();
    }

    retrieveMediator(mediatorName) {
        return this.mediatorMap.get(mediatorName);
    }

    removeMediator(mediatorName) {
        let mediator = this.mediatorMap.get(mediatorName);

        if (mediator) {
            let interests = mediator.listNotificationInterests();
            for (let i = 0; i < interests.length; i++) {
                this.removeObserver(interests[i], mediator);
            }

            this.mediatorMap.delete(mediatorName);

            mediator.onRemove();
        }

        return mediator;
    }

    hasMediator(mediatorName) {
        return this.mediatorMap.has(mediatorName);
    }

    static removeView(key) {
        this.instanceMap.delete(key);
    }

    /**
     *
     * @type {Map<string, IView>}
     */
    static instanceMap = new Map();

    /**
     *
     * @type {string}
     */
    static get MULTITON_MSG() { return "View instance for this Multiton key already constructed!" };

}

/**
 * @typedef {puremvc.INotification} INotification
 *
 * @class puremvc.Notification
 * @implements puremvc.INotification
 */
class Notification extends INotification {

    /**
     *
     * @constructor
     * @param {string} name
     * @param {Object} [body]
     * @param {string} [type]
     */
    constructor(name, body = null, type = "") {
        super();
        /** @private */
        this.name = name;
        /** @private */
        this.body = body;
        /** @private */
        this.type = type;
    }

    /**
     *
     * @returns {string}
     */
    getName() {
        return this.name;
    }

    /**
     *
     * @param {Object} body
     */
    setBody(body) {
        this.body = body;
    }

    /**
     *
     * @returns {*}
     */
    getBody() {
        return this.body;
    }

    /**
     *
     * @param {string} type
     */
    setType(type) {
        this.type = type;
    }

    /**
     *
     * @returns {string}
     */
    getType() {
        return this.type;
    }

    /**
     *
     * @returns {string}
     */
    toString() {
        let str= "Notification Name: " + this.name;
        str+= "\nBody:" + ((this.body == null ) ? "null" : this.body.toString());
        str+= "\nType:" + ((this.type == null ) ? "null" : this.type);
        return str;
    }

}

/**
 * @class puremvc.Notifier
 * @implements puremvc.INotifier
 */
class Notifier {

    /**
     *
     * @param {string} notificationName
     * @param {*} [body]
     * @param {string} [type]
     */
    sendNotification (notificationName, body, type) {
        if (this.facade != null) {
            this.facade.sendNotification(notificationName, body, type);
        }
    }

    /**
     *
     * @param {string} key the multitonKey for this INotifier to use
     */
    initializeNotifier(key) {
        /**
         * The Multiton Key for this app
         *
         * @protected
         * */
        this.multitonKey = key;
    }

    /**
     *
     * @throws {Error}
     */
    get facade() {
        if (this.multitonKey == null) throw new Error(Notifier.MULTITON_MSG);
        return Facade.getInstance(this.multitonKey, key => new Facade(key));
    }

    /**
     * Message Constants
     *
     * @static
     * @returns {string}
     */
    static get MULTITON_MSG() { return "multitonKey for this Notifier not yet initialized!" }
}

/**
 * @class puremvc.Observer
 * @implements puremvc.IObserver
 */
class Observer {

    /**
     *
     * @param {function(puremvc.INotification):void} notifyMethod
     * @param {Object} notifyContext
     */
    constructor(notifyMethod, notifyContext) {
        /** @private */
        this.notifyMethod = notifyMethod;
        /** @private */
        this.notifyContext = notifyContext;
    }

    /**
     *
     * @param {puremvc.INotification} notification
     */
    notifyObserver(notification) {
        this.notifyMethod.call(this.notifyContext, notification);
    }

    /**
     *
     * @param {Object} context
     * @returns {boolean}
     */
    compareNotifyContext(notifyContext) {
        return this.notifyContext === notifyContext;
    }

    /**
     *
     * @param {function(puremvc.INotification):void} notifyMethod
     */
    setNotifyMethod(notifyMethod) {
        this.notifyMethod = notifyMethod;
    }

    /**
     *
     * @returns {function(puremvc.INotification):void}
     */
    getNotifyMethod() {
        return this.notifyMethod;
    }

    /**
     *
     * @param {Object} notifyContext
     */
    setNotifyContext(notifyContext) {
        this.notifyContext = notifyContext;
    }

    /**
     *
     * @returns {Object}
     */
    getNotifyContext() {
        return this.notifyContext;
    }

}

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
        Model.removeModel(key);
        View.removeView(key);
        Controller.removeController(key);
        this.instanceMap.delete(key);
    }

    /**
     *
     * @type {Map<string, IFacade>}
     */
    static instanceMap = new Map();

    /**
     *
     * @type {string}
     */
    static get MULTITON_MSG() {return "Facade instance for this Multiton key already constructed!"};
}

/**
 * @class puremvc.SimpleCommand
 * @extends puremvc.Notifier
 * @implements puremvc.ICommand
 */
class SimpleCommand extends Notifier {

    /**
     *
     * @param {puremvc.INotification} notification
     */
    execute(notification) {

    }
}

/**
 * @class puremvc.MacroCommand
 * @extends puremvc.Notifier
 * @implements puremvc.ICommand
 */
class MacroCommand extends Notifier {

    /**
     * @constructor
     */
    constructor() {
        super();
        /** @protected {[function():ICommand]} */
        this.subCommands = [];
        this.initializeMacroCommand();
    }

    initializeMacroCommand() {

    }

    /**
     *
     * @param {function():puremvc.ICommand} commandFunction
     */
    addSubCommand(commandFunction) {
        this.subCommands.push(commandFunction);
    }

    /**
     *
     * @param {puremvc.INotification} notification
     */
    execute(notification) {
        while(this.subCommands.length > 0) {
            let commandFunc = this.subCommands.shift();
            let command = commandFunc();
            command.initializeNotifier(this.multitonKey);
            command.execute(notification);
        }
    }

}

/**
 * @class puremvc.Mediator
 * @extends puremvc.Notifier
 * @implements puremvc.IMediator
 */
class Mediator extends Notifier {

    /**
     *
     * @constructor
     * @param {string} mediatorName
     * @param {*} [viewComponent]
     */
    constructor(mediatorName, viewComponent) {
        super();
        /** @private */
        this.mediatorName = mediatorName || Mediator.NAME;
        /** @private */
        this.viewComponent = viewComponent;
    }

    /**
     *
     * @return {void}
     */
    onRegister() {

    }

    /**
     *
     * @return {void}
     */
    onRemove() {

    }

    /**
     *
     * @returns {[string]}
     */
    listNotificationInterests() {
        return [];
    }

    /**
     *
     * @param {puremvc.INotification} notification
     * @return {void}
     */
    handleNotification(notification) {

    }

    /**
     *
     * @returns {string}
     */
    getMediatorName() {
        return this.mediatorName;
    }

    /**
     *
     * @returns {*}
     */
    getViewComponent() {
        return this.viewComponent;
    }

    /**
     *
     * @param {*} viewComponent
     * @return {void}
     */
    setViewComponent(viewComponent) {
        this.viewComponent = viewComponent;
    }

    /**
     *
     * @static
     * @returns {string}
     */
    static get NAME() { return "Mediator" }
}

/**
 *
 * @class puremvc.Proxy
 * @extends puremvc.Notifier
 * @implements puremvc.IProxy
 */
class Proxy extends Notifier {

    /**
     *
     * @constructor
     * @param {string} proxyName
     * @param {Object} [data]
     */
    constructor(proxyName, data) {
        super();
        /** @private */
        this.proxyName = proxyName || Proxy.NAME;
        /** @private */
        this.data = data;
        if (data != null) {
            this.setData(data);
        }
    }

    /**
     * Called by the Model when the Proxy is registered
     */
    onRegister() {}

    /**
     * Called by the Model when the Proxy is removed
     */
    onRemove() {}

    /**
     *
     * @returns {string}
     */
    getProxyName() {
        return this.proxyName;
    }

    /**
     *
     * @param {Object} data
     */
    setData(data) {
        this.data = data;
    }

    /**
     *
     * @returns {Object}
     */
    getData () {
        return this.data;
    }

    /**
     *
     * @static
     * @returns {string}
     */
    static get NAME() { return "Proxy" }
}

scope.puremvc = {
    ICommand: ICommand,
    IController: IController,
    IFacade: IFacade,
    IMediator: IMediator,
    IModel: IModel,
    INotification: INotification,
    INotifier: INotifier,
    IObserver: IObserver,
    IProxy: IProxy,
    IView: IView,
    Controller: Controller,
    Model: Model,
    View: View,
    SimpleCommand: SimpleCommand,
    MacroCommand: MacroCommand,
    Facade: Facade,
    Mediator: Mediator,
    Notification: Notification,
    Notifier: Notifier,
    Observer: Observer,
    Proxy: Proxy
};

})(typeof exports === "undefined" ? this : exports);

