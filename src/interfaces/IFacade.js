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