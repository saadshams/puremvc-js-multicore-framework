/**
 * <P>The interface definition for a PureMVC Facade.</P>
 *
 * <P>The Facade Pattern suggests providing a single
 * class to act as a central point of communication
 * for a subsystem. </P>
 *
 * <P>In PureMVC, the Facade acts as an interface between
 * the core MVC actors (Model, View, Controller) and
 * the rest of your application.</P>
 *
 * @see puremvc.IModel
 * @see puremvc.IView
 * @see puremvc.IController
 * @see puremvc.ICommand
 * @see puremvc.INotification
 *
 * @interface puremvc.IFacade
 * @extends puremvc.INotifier
 */
function IFacade() {}

IFacade.prototype = new INotifier();
IFacade.prototype.constructor = IFacade;

/**
 * Register an <code>IProxy</code> with the <code>Model</code> by name.
 *
 * @param {puremvc.IProxy} proxy
 */
IFacade.prototype.registerProxy = (proxy) => {
    throw new Error("Not Implemented");
};

/**
 * Retrieve a <code>IProxy</code> from the <code>Model</code> by name.
 *
 * @param {string} proxyName the name of the <code>IProxy</code> instance to be retrieved.
 * @returns {puremvc.IProxy} the <code>IProxy</code> previously regisetered by <code>proxyName</code> with the <code>Model</code>.
 */
IFacade.prototype.retrieveProxy = (proxyName) => {
    throw new Error("Not Implemented");
};

/**
 * Remove an <code>IProxy</code> instance from the <code>Model</code> by name.
 *
 * @param {string} proxyName the <code>IProxy</code> to remove from the <code>Model</code>.
 * @return {puremvc.IProxy} the <code>IProxy</code> that was removed from the <code>Model</code>
 */
IFacade.prototype.removeProxy = (proxyName) => {
    throw new Error("Not Implemented");
};

/**
 * Check if a Proxy is registered
 *
 * @param {string} proxyName
 * @returns {boolean} whether a Proxy is currently registered with the given <code>proxyName</code>.
 */
IFacade.prototype.hasProxy = (proxyName) => {
    throw new Error("Not Implemented");
};

/**
 * Register an <code>ICommand</code> with the <code>Controller</code>.
 *
 * @param {string} notificationName the name of the <code>INotification</code> to associate the <code>ICommand</code> with.
 * @param {factory} factory a reference to the <code>Class</code> of the <code>ICommand</code>.
 * @param {function():puremvc.ICommand} factory
 */
IFacade.prototype.registerCommand = (notificationName, factory) => {
    throw new Error("Not Implemented");
};

/**
 * Remove a previously registered <code>ICommand</code> to <code>INotification</code> mapping from the Controller.
 *
 * @param {string} notificationName the name of the <code>INotification</code> to remove the <code>ICommand</code> mapping for
 */
IFacade.prototype.removeCommand = (notificationName) => {
    throw new Error("Not Implemented");
};

/**
 * Check if a Command is registered for a given Notification
 *
 * @param {string} notificationName
 * @returns {boolean} whether a Command is currently registered for the given <code>notificationName</code>.
 */
IFacade.prototype.hasCommand = (notificationName) => {
    throw new Error("Not Implemented");
};

/**
 * Register an <code>IMediator</code> instance with the <code>View</code>.
 *
 * @param {puremvc.IMediator} mediator a reference to the <code>IMediator</code> instance
 */
IFacade.prototype.registerMediator = (mediator) => {
    throw new Error("Not Implemented");
};

/**
 * Register an <code>IMediator</code> instance with the <code>View</code>.
 *
 * @param {string} mediatorName the name of the <code>IMediator</code> instance to retrieve
 * @returns {puremvc.IMediator} the <code>IMediator</code> previously registered with the given <code>mediatorName</code>.
 */
IFacade.prototype.retrieveMediator = (mediatorName) =>  {
    throw new Error("Not Implemented");
};

/**
 * Remove a <code>IMediator</code> instance from the <code>View</code>.
 *
 * @param {string} mediatorName name of the <code>IMediator</code> instance to be removed.
 * @returns {puremvc.IMediator} the <code>IMediator</code> instance previously registered with the given <code>mediatorName</code>.
 */
IFacade.prototype.removeMediator = (mediatorName) => {
    throw new Error("Not Implemented");
};

/**
 * Check if a Mediator is registered or not
 *
 * @param {string} mediatorName
 * @returns {boolean} whether a Mediator is registered with the given <code>mediatorName</code>.
 */
IFacade.prototype.hasMediator = (mediatorName) => {
    throw new Error("Not Implemented");
};

/**
 * Notify <code>Observer</code>s.
 *
 * <P>This method is left public mostly for backward
 * compatibility, and to allow you to send custom
 * notification classes using the facade.</P>
 *
 * <P>Usually you should just call sendNotification
 * and pass the parameters, never having to
 * construct the notification yourself.</P>
 *
 * @param {puremvc.INotification} notification the <code>INotification</code> to have the <code>View</code> notify <code>Observers</code> of.
 */
IFacade.prototype.notifyObservers = (notification) => {
    throw new Error("Not Implemented");
};
