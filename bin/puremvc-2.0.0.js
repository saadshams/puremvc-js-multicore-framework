//
//  PureMVC JS Multicore
//
//  Copyright(c) 2020 Saad Shams <saad.shams@puremvc.org>
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
 * Execute the <code>ICommand</code>'s logic to handle a given <code>INotification</code>.
 *
 * @param {puremvc.INotification} notification an <code>INotification</code> to handle.
 */
ICommand.prototype.execute = (notification) => {
    throw new Error("Not Implemented");
};


/**
 * The interface definition for a PureMVC Controller.
 *
 * <P>In PureMVC, an <code>IController</code> implementor
 * follows the 'Command and Controller' strategy, and
 * assumes these responsibilities:</P>
 *
 * <UL>
 * <LI> Remembering which <code>ICommand</code>s
 * are intended to handle which <code>INotifications</code>.</LI>
 * <LI> Registering itself as an <code>IObserver</code> with
 * the <code>View</code> for each <code>INotification</code>
 * that it has an <code>ICommand</code> mapping for.</LI>
 * <LI> Creating a new instance of the proper <code>ICommand</code>
 * to handle a given <code>INotification</code> when notified by the <code>View</code>.</LI>
 * <LI> Calling the <code>ICommand</code>'s <code>execute</code>
 * method, passing in the <code>INotification</code>.</LI>
 * </UL>
 *
 * @see puremvc.INotification
 * @see puremvc.ICommand
 *
 * @interface puremvc.IController
 */
function IController() {}

/**
 * Register a particular <code>ICommand</code> class as the handler
 * for a particular <code>INotification</code>.
 *
 * @param {string} notificationName
 * @param {factory} factory
 * @param {function():puremvc.ICommand} factory
 */
IController.prototype.registerCommand = (notificationName, factory) => {
    throw new Error("Not Implemented");
};

/**
 * Execute the <code>ICommand</code> previously registered as the
 * handler for <code>INotification</code>s with the given notification name.
 *
 * @param {puremvc.INotification} notification the <code>INotification</code> to execute the associated <code>ICommand</code> for
 */
IController.prototype.executeCommand = (notification) => {
    throw new Error("Not Implemented");
};

/**
 * Remove a previously registered <code>ICommand</code> to <code>INotification</code> mapping.
 *
 * @param {string} notificationName the name of the <code>INotification</code> to remove the <code>ICommand</code> mapping for
 */
IController.prototype.removeCommand = (notificationName) => {
    throw new Error("Not Implemented");
};

/**
 * Check if a Command is registered for a given Notification
 *
 * @param {string} notificationName
 * @returns {boolean} whether a Command is currently registered for the given <code>notificationName</code>.
 */
IController.prototype.hasCommand = (notificationName) => {
    throw new Error("Not Implemented");
};


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


/**
 * The interface definition for a PureMVC Mediator.
 *
 * <P>In PureMVC, <code>IMediator</code> implementors assume these responsibilities:</P>
 *
 * <UL>
 * <LI>Implement a common method which returns a list of all <code>INotification</code>s
 * the <code>IMediator</code> has interest in.</LI>
 * <LI>Implement a notification callback method.</LI>
 * <LI>Implement methods that are called when the IMediator is registered or removed from the View.</LI>
 * </UL>
 *
 * <P>Additionally, <code>IMediator</code>s typically:</P>
 *
 * <UL>
 * <LI>Act as an intermediary between one or more view components such as text boxes or
 * list controls, maintaining references and coordinating their behavior.</LI>
 * <LI>In Flash-based apps, this is often the place where event listeners are
 * added to view components, and their handlers implemented.</LI>
 * <LI>Respond to and generate <code>INotifications</code>, interacting with of
 * the rest of the PureMVC app.
 * </UL>
 *
 * <P>When an <code>IMediator</code> is registered with the <code>IView</code>,
 * the <code>IView</code> will call the <code>IMediator</code>'s
 * <code>listNotificationInterests</code> method. The <code>IMediator</code> will
 * return an <code>Array</code> of <code>INotification</code> names which
 * it wishes to be notified about.</P>
 *
 * <P>The <code>IView</code> will then create an <code>Observer</code> object
 * encapsulating that <code>IMediator</code>'s (<code>handleNotification</code>) method
 * and register it as an Observer for each <code>INotification</code> name returned by
 * <code>listNotificationInterests</code>.</P>
 *
 * @typedef {puremvc.INotifier} INotifier
 *
 * @interface puremvc.IMediator
 * @extends puremvc.INotifier
 */
function IMediator() {}

IMediator.prototype = new INotifier();
IMediator.prototype.constructor = IMediator;

/**
 * Get the <code>IMediator</code> instance name
 *
 * @returns {string} the <code>IMediator</code> instance name
 */
IMediator.prototype.getMediatorName = () => {
    throw new Error("Not Implemented");
};

/**
 * Get the <code>IMediator</code>'s view component.
 *
 * @return {Object} the view component
 */
IMediator.prototype.geViewComponent = () => {
    throw new Error("Not Implemented");
};

/**
 * Set the <code>IMediator</code>'s view component.
 *
 * @param {Object} the view component
 */
IMediator.prototype.setViewComponent = () => {
    throw new Error("Not Implemented");
}

/**
 * List <code>INotification</code> interests.
 *
 * @returns {[string]} an <code>Array</code> of the <code>INotification</code> names this <code>IMediator</code> has an interest in.
 */
IMediator.prototype.listNotificationInterests = () => {
    throw new Error("Not Implemented");
};

/**
 * Handle an <code>INotification</code>.
 *
 * @param {puremvc.INotification} notification the <code>INotification</code> to be handled
 */
IMediator.prototype.handleNotification = (notification) => {
    throw new Error("Not Implemented");
};

/**
 * Called by the View when the Mediator is registered
 */
IMediator.prototype.onRegister = () => {
    throw new Error("Not Implemented");
};

/**
 * Called by the View when the Mediator is removed
 */
IMediator.prototype.onRemove = () => {
    throw new Error("Not Implemented");
};


/**
 * The interface definition for a PureMVC Model.
 *
 * <P>In PureMVC, <code>IModel</code> implementors provide
 * access to <code>IProxy</code> objects by named lookup.</P>
 *
 * <P>An <code>IModel</code> assumes these responsibilities:</P>
 *
 * <UL>
 * <LI>Maintain a cache of <code>IProxy</code> instances</LI>
 * <LI>Provide methods for registering, retrieving, and removing <code>IProxy</code> instances</LI>
 * </UL>
 *
 * @interface puremvc.IModel
 */
function IModel() {}

/**
 * Register an <code>IProxy</code> instance with the <code>Model</code>.
 *
 * @param {string} proxyName the name to associate with this <code>IProxy</code> instance.
 * @param {puremvc.IProxy} proxy an object reference to be held by the <code>Model</code>.
 */
IModel.prototype.registerProxy = (proxy) => {
    throw new Error("Not Implemented");
};

/**
 * Retrieve an <code>IProxy</code> instance from the Model.
 *
 * @param {string} proxyName
 * @returns {puremvc.IProxy} the <code>IProxy</code> instance previously registered with the given <code>proxyName</code>.
 */
IModel.prototype.retrieveProxy = (proxyName) => {
    throw new Error("Not Implemented");
};

/**
 * Remove an <code>IProxy</code> instance from the Model.
 *
 * @param {string} proxyName name of the <code>IProxy</code> instance to be removed.
 * @returns {puremvc.IProxy} the <code>IProxy</code> that was removed from the <code>Model</code>
 */
IModel.prototype.removeProxy = (proxyName) => {
    throw new Error("Not Implemented");
};

/**
 * Check if a Proxy is registered
 *
 * @param {string} proxyName
 * @returns {boolean} whether a Proxy is currently registered with the given <code>proxyName</code>.
 */
IModel.prototype.hasProxy = (proxyName) => {
    throw new Error("Not Implemented");
};


/**
 * The interface definition for a PureMVC Notification.
 *
 * <P>PureMVC does not rely upon underlying event models such
 * as the one provided with Flash, and ActionScript 3 does
 * not have an inherent event model.</P>
 *
 * <P>The Observer Pattern as implemented within PureMVC exists
 * to support event-driven communication between the
 * application and the actors of the MVC triad.</P>
 *
 * <P>Notifications are not meant to be a replacement for Events
 * in Flex/Flash/AIR. Generally, <code>IMediator</code> implementors
 * place event listeners on their view components, which they
 * then handle in the usual way. This may lead to the broadcast of <code>Notification</code>s to
 * trigger <code>ICommand</code>s or to communicate with other <code>IMediators</code>. <code>IProxy</code> and <code>ICommand</code>
 * instances communicate with each other and <code>IMediator</code>s
 * by broadcasting <code>INotification</code>s.</P>
 *
 * <P>A key difference between Flash <code>Event</code>s and PureMVC
 * <code>Notification</code>s is that <code>Event</code>s follow the
 * 'Chain of Responsibility' pattern, 'bubbling' up the display hierarchy
 * until some parent component handles the <code>Event</code>, while
 * PureMVC <code>Notification</code>s follow a 'Publish/Subscribe'
 * pattern. PureMVC classes need not be related to each other in a
 * parent/child relationship in order to communicate with one another
 * using <code>Notification</code>s.</P>
 *
 * @see puremvc.IView
 * @see puremvc.IObserver
 *
 * @interface puremvc.INotification
 */
function INotification() {}

/**
 * Get the name of the <code>INotification</code> instance.
 * No setter, should be set by constructor only
 *
 * @returns {string}
 */
INotification.prototype.getName = () => {
    throw new Error("Not Implemented");
};

/**
 * Get the body of the <code>INotification</code> instance
 *
 * @returns {Object}
 */
INotification.prototype.getBody = () => {
    throw new Error("Not Implemented");
};

/**
 * Set the body of the <code>INotification</code> instance
 *
 * @param {Object} body
 */
INotification.prototype.setBody = (body) => {
    throw new Error("Not Implemented");
};

/**
 * Get the type of the <code>INotification</code> instance
 *
 * @returns {string}
 */
INotification.prototype.getType = () => {
    throw new Error("Not Implemented");
};

/**
 * Set the type of the <code>INotification</code> instance
 *
 * @param {string} type
 */
INotification.prototype.setType = (type) => {
    throw new Error("Not Implemented");
};

/**
 * Get the string representation of the <code>INotification</code> instance
 *
 * @returns {string}
 */
INotification.prototype.toString = () => {
    throw new Error("Not Implemented");
};


/**
 * The interface definition for a PureMVC Notifier.
 *
 * <P><code>MacroCommand, Command, Mediator</code> and <code>Proxy</code>
 * all have a need to send <code>Notifications</code>.</P>
 *
 * <P>The <code>INotifier</code> interface provides a common method called
 * <code>sendNotification</code> that relieves implementation code of
 * the necessity to actually construct <code>Notifications</code>.</P>
 *
 * <P>The <code>Notifier</code> class, which all of the above mentioned classes
 * extend, also provides an initialized reference to the <code>Facade</code>
 * Multiton, which is required for the convenience method
 * for sending <code>Notifications</code>, but also eases implementation as these
 * classes have frequent <code>Facade</code> interactions and usually require
 * access to the facade anyway.</P>
 *
 * @see puremvc.IFacade
 * @see puremvc.INotification
 *
 * @interface puremvc.INotifier
 */
function INotifier() {}

/**
 * Send a <code>INotification</code>.
 *
 * <P>Convenience method to prevent having to construct new
 * notification instances in our implementation code.</P>
 *
 * @param {string} notificationName the name of the notification to send
 * @param {Object} [body] body the body of the notification (optional)
 * @param {string} [type] type type the type of the notification (optional)
 */
INotifier.prototype.sendNotification = (notificationName, body = null, type = "") => {
    throw new Error("Not Implemented");
};

/**
 *
 * Initialize this INotifier instance.
 *
 * <P>This is how a Notifier gets its multitonKey.
 * Calls to sendNotification or to access the
 * facade will fail until after this method
 * has been called.</P>
 *
 * @param {string} key the multitonKey for this INotifier to use
 */
INotifier.prototype.initializeNotifier = (key) => {
    throw new Error("Not Implemented");
};


/**
 * The interface definition for a PureMVC Observer.
 *
 * <P>In PureMVC, <code>IObserver</code> implementors assume these responsibilities:</P>
 *
 * <UL>
 * <LI>Encapsulate the notification (callback) method of the interested object.</LI>
 * <LI>Encapsulate the notification context (this) of the interested object.</LI>
 * <LI>Provide methods for setting the interested object' notification method and context.</LI>
 * <LI>Provide a method for notifying the interested object.</LI>
 * </UL>
 *
 * <P>PureMVC does not rely upon underlying event
 * models such as the one provided with Flash,
 * and ActionScript 3 does not have an inherent
 * event model.</P>
 *
 * <P>The Observer Pattern as implemented within
 * PureMVC exists to support event driven communication
 * between the application and the actors of the
 * MVC triad.</P>
 *
 * <P>An Observer is an object that encapsulates information
 * about an interested object with a notification method that
 * should be called when an </code>INotification</code> is broadcast. The Observer then
 * acts as a proxy for notifying the interested object.
 *
 * <P>Observers can receive <code>Notification</code>s by having their
 * <code>notifyObserver</code> method invoked, passing
 * in an object implementing the <code>INotification</code> interface, such
 * as a subclass of <code>Notification</code>.</P>
 *
 * @see puremvc.IView
 * @see puremvc.INotification
 *
 * @see puremvc.IFacade
 * @see puremvc.INotification
 *
 * @interface puremvc.IObserver
 */
function IObserver() {}

/**
 * Notify the interested object.
 *
 * @param {puremvc.INotification} notification the <code>INotification</code> to pass to the interested object's notification method
 */
IObserver.prototype.notifyObserver = (notification) => {
    throw new Error("Not Implemented");
};

/**
 * Compare the given object to the notification context object.
 *
 * @param {Object} context the object to compare.
 * @returns {boolean} indicating if the notification context and the object are the same.
 */
IObserver.prototype.compareNotifyContext = (context) => {
    throw new Error("Not Implemented");
};

/**
 * Set the notification method.
 *
 * <P>The notification method should take one parameter of type <code>INotification</code></P>
 *
 * @param {consumer} notifyMethod the notification (callback) method of the interested object
 * @param {function(puremvc.INotification):void} notifyMethod
 */
IObserver.prototype.setNotifyMethod = (notifyMethod) => {
    throw new Error("Not Implemented");
};

/**
 * Set the notification context.
 *
 * @param {Object} notifyContext the notification context (this) of the interested object
 */
IObserver.prototype.setNotifyContext = (notifyContext) => {
    throw new Error("Not Implemented");
};


/**
 * The interface definition for a PureMVC Proxy.
 *
 * <P>In PureMVC, <code>IProxy</code> implementors assume these responsibilities:</P>
 *
 * <UL>
 * <LI>Implement a common method which returns the name of the Proxy.</LI>
 * <LI>Provide methods for setting and getting the data object.</LI>
 * </UL>
 *
 * <P>Additionally, <code>IProxy</code>s typically:</P>
 *
 * <UL>
 * <LI>Maintain references to one or more pieces of model data.</LI>
 * <LI>Provide methods for manipulating that data.</LI>
 * <LI>Generate <code>INotifications</code> when their model data changes.</LI>
 * <LI>Expose their name as a <code>public static const</code> called <code>NAME</code>, if they are not instantiated multiple times.</LI>
 * <LI>Encapsulate interaction with local or remote services used to fetch and persist model data.</LI>
 * </UL>
 *
 * @interface puremvc.IProxy
 * @extends puremvc.INotifier
 */
function IProxy() {}

IProxy.prototype = new INotifier();
IProxy.prototype.constructor = IProxy;

/**
 * Get the Proxy name
 *
 * @returns {string} the Proxy instance name
 */
IProxy.prototype.getProxyName = () => {
    throw new Error("Not Implemented");
};

/**
 * Set the data object
 *
 * @param {Object} data the data object
 */
IProxy.prototype.setData = (data) => {
    throw new Error("Not Implemented");
};

/**
 * Get the data object
 *
 * @returns {Object} the data as type Object
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
 * <P>In PureMVC, <code>IView</code> implementors assume these responsibilities:</P>
 *
 * <P>In PureMVC, the <code>View</code> class assumes these responsibilities:</P>
 *
 * <UL>
 * <LI>Maintain a cache of <code>IMediator</code> instances.</LI>
 * <LI>Provide methods for registering, retrieving, and removing <code>IMediators</code>.</LI>
 * <LI>Managing the observer lists for each <code>INotification</code> in the application.</LI>
 * <LI>Providing a method for attaching <code>IObservers</code> to an <code>INotification</code>'s observer list.</LI>
 * <LI>Providing a method for broadcasting an <code>INotification</code>.</LI>
 * <LI>Notifying the <code>IObservers</code> of a given <code>INotification</code> when it broadcast.</LI>
 * </UL>
 *
 * @see puremvc.IMediator
 * @see puremvc.IObserver
 * @see puremvc.INotification
 *
 * @interface puremvc.IView
 */
function IView() {}

/**
 * Register an <code>IObserver</code> to be notified
 * of <code>INotifications</code> with a given name.
 *
 * @param {string} notificationName the name of the <code>INotifications</code> to notify this <code>IObserver</code> of
 * @param {puremvc.IObserver} observer the <code>IObserver</code> to register
 */
IView.prototype.registerObserver = (notificationName, observer) => {
    throw new Error("Not Implemented");
};

/**
 * <P>Remove a group of observers from the observer list for a given Notification name.</P>
 *
 * @param {string} notificationName which observer list to remove from
 * @param {Object} notifyContext removed the observers with this object as their notifyContext
 */
IView.prototype.removeObserver = (notificationName, notifyContext) => {
    throw new Error("Not Implemented");
};

/**
 * Notify the <code>IObservers</code> for a particular <code>INotification</code>.
 *
 * <P>All previously attached <code>IObservers</code> for this <code>INotification</code>'s
 * list are notified and are passed a reference to the <code>INotification</code> in
 * the order in which they were registered.</P>
 *
 * @param {puremvc.INotification} notification the <code>INotification</code> to notify <code>IObservers</code> of.
 */
IView.prototype.notifyObservers = (notification) => {
    throw new Error("Not Implemented");
};

/**
 * Register an <code>IMediator</code> instance with the <code>View</code>.
 *
 * <P>Registers the <code>IMediator</code> so that it can be retrieved by name,
 * and further interrogates the <code>IMediator</code> for its
 * <code>INotification</code> interests.</P>
 *
 * <P>If the <code>IMediator</code> returns any <code>INotification</code>
 * names to be notified about, an <code>Observer</code> is created encapsulating
 * the <code>IMediator</code> instance's <code>handleNotification</code> method
 * and registering it as an <code>Observer</code> for all <code>INotifications</code> the
 * <code>IMediator</code> is interested in.</P>
 *
 * @param {puremvc.IMediator} mediator a reference to the <code>IMediator</code> instance
 */
IView.prototype.registerMediator = (mediator) => {
    throw new Error("Not Implemented");
};

/**
 * Retrieve an <code>IMediator</code> from the <code>View</code>.
 *
 * @param {string} mediatorName the name of the <code>IMediator</code> instance to retrieve.
 * @returns {puremvc.IMediator} the <code>IMediator</code> instance previously registered with the given <code>mediatorName</code>.
 */
IView.prototype.retrieveMediator = (mediatorName) => {
    throw new Error("Not Implemented");
};

/**
 * Remove an <code>IMediator</code> from the <code>View</code>.
 *
 * @param {string} mediatorName name of the <code>IMediator</code> instance to be removed.
 * @returns {puremvc.IMediator} the <code>IMediator</code> that was removed from the <code>View</code>
 */
IView.prototype.removeMediator = (mediatorName) => {
    throw new Error("Not Implemented");
};

/**
 * Check if a Mediator is registered or not
 *
 * @param {string} mediatorName
 * @returns {boolean} whether a Mediator is registered with the given <code>mediatorName</code>.
 */
IView.prototype.hasMediator = (mediatorName) => {
    throw new Error("Not Implemented");
};


/**
 * A Multiton <code>IController</code> implementation.
 *
 * <P>In PureMVC, the <code>Controller</code> class follows the
 * 'Command and Controller' strategy, and assumes these
 * responsibilities:</P>
 *
 * <UL>
 * <LI> Remembering which <code>ICommand</code>s
 * are intended to handle which <code>INotifications</code>.</LI>
 * <LI> Registering itself as an <code>IObserver</code> with
 * the <code>View</code> for each <code>INotification</code>
 * that it has an <code>ICommand</code> mapping for.</LI>
 * <LI> Creating a new instance of the proper <code>ICommand</code>
 * to handle a given <code>INotification</code> when notified by the <code>View</code>.</LI>
 * <LI> Calling the <code>ICommand</code>'s <code>execute</code>
 * method, passing in the <code>INotification</code>.</LI>
 * </UL>
 *
 * <P>Your application must register <code>ICommands</code> with the
 * Controller.</P>
 *
 * <P>The simplest way is to subclass </code>Facade</code>,
 * and use its <code>initializeController</code> method to add your
 * registrations.</P>
 *
 * @see puremvc.View View
 * @see puremvc.Observer Observer
 * @see puremvc.Notification Notification
 * @see puremvc.SimpleCommand SimpleCommand
 * @see puremvc.MacroCommand MacroCommand
 *
 * @class puremvc.Controller
 * @implements puremvc.IController
 */
class Controller {

    /**
     * Constructor.
     *
     * <P>This <code>IController</code> implementation is a Multiton,
     * so you should not call the constructor
     * directly, but instead call the static Factory method,
     * passing the unique key for this instance
     * <code>Controller.getInstance( multitonKey )</code></P>
     *
     * @throws {Error} Error if instance for this Multiton key has already been constructed
     *
     * @constructor
     * @param {string} key
     */
    constructor(key) {
        if (Controller.instanceMap[key] != null) throw new Error(Controller.MULTITON_MSG);
        /** @protected {string} */
        this.multitonKey = key;
        Controller.instanceMap.set(this.multitonKey, this);
        /** @protected {Map<string, function():puremvc.ICommand>} */
        this.commandMap = new Map();
        this.initializeController();
    }

    /**
     * Initialize the Multiton <code>Controller</code> instance.
     *
     * <P>Called automatically by the constructor.</P>
     *
     * <P>Note that if you are using a subclass of <code>View</code>
     * in your application, you should <i>also</i> subclass <code>Controller</code>
     * and override the <code>initializeController</code> method in the
     * following way:</P>
     *
     * <pre><code>
     *		// ensure that the Controller is talking to my IView implementation
     *		initializeController( )
     *		{
     *			this.view = MyView.getInstance(this.multitonKey, (key) => new MyView(key));
     *		}
     * </code></pre>
     *
     */
    initializeController() {
        /** @protected **/
        this.view = View.getInstance(this.multitonKey, (key) => new View(key));
    }

    /**
     * <code>Controller</code> Multiton Factory method.
     *
     * @static
     * @param {string} key
     * @param {factory} factory
     * @param {function(string):puremvc.IController} factory
     * @returns {puremvc.IController} the Multiton instance of <code>Controller</code>
     */
    static getInstance(key, factory) {
        if (this.instanceMap.get(key) == null) this.instanceMap.set(key, factory(key));
        return this.instanceMap.get(key);
    }

    /**
     * <P>If an <code>ICommand</code> has previously been registered
     * to handle a the given <code>INotification</code>, then it is executed.</P>
     *
     * @param {puremvc.INotification} notification an <code>INotification</code>
     */
    executeCommand(notification) {
        let factory = this.commandMap.get(notification.name);
        if (factory == null) return;

        let commandInstance = factory();
        commandInstance.initializeNotifier(this.multitonKey);
        commandInstance.execute(notification);
    }

    /**
     * <P>Register a particular <code>ICommand</code> class as the handler
     * for a particular <code>INotification</code>.</P>
     *
     * <P>If an <code>ICommand</code> has already been registered to
     * handle <code>INotification</code>s with this name, it is no longer
     * used, the new <code>ICommand</code> is used instead.</P>
     *
     * <P>The Observer for the new ICommand is only created if this the
     * first time an ICommand has been regisered for this Notification name.</P>
     *
     * @param notificationName the name of the <code>INotification</code>
     * @param {factory} factory the <code>Class</code> of the <code>ICommand</code>
     * @param {function():puremvc.ICommand} factory
     */
    registerCommand(notificationName, factory) {
        if (this.commandMap.get(notificationName) == null) {
            this.view.registerObserver(notificationName, new Observer(this.executeCommand, this));
        }
        this.commandMap.set(notificationName, factory);
    }

    /**
     * Check if a Command is registered for a given Notification
     *
     * @param {string} notificationName
     * @return {boolean} whether a Command is currently registered for the given <code>notificationName</code>.
     */
    hasCommand(notificationName) {
        return this.commandMap.has(notificationName);
    }

    /**
     * Remove a previously registered <code>ICommand</code> to <code>INotification</code> mapping.
     *
     * @param {string} notificationName the name of the <code>INotification</code> to remove the <code>ICommand</code> mapping for
     */
    removeCommand(notificationName) {
        // if the Command is registered...
        if(this.hasCommand(notificationName)) {
            // remove the observer
            this.view.removeObserver(notificationName, this);

            // remove the command
            this.commandMap.delete(notificationName)
        }
    }

    /**
     * Remove an IController instance
     *
     * @static
     * @param {string} key of IController instance to remove
     */
    static removeController(key) {
        Controller.instanceMap.delete(key);
    }

    /**
     * Multiton instance
     *
     * @static
     * @type {Map<string, puremvc.IController>}
     */
    static instanceMap = new Map();

    /**
     * Message Constants
     *
     * @static
     * @type {string}
     */
    static get MULTITON_MSG() { return "Controller instance for this Multiton key already constructed!" };

}


/**
 * A Multiton <code>IModel</code> implementation.
 *
 * <P>In PureMVC, the <code>Model</code> class provides
 * access to model objects (Proxies) by named lookup.
 *
 * <P>The <code>Model</code> assumes these responsibilities:</P>
 *
 * <UL>
 * <LI>Maintain a cache of <code>IProxy</code> instances.</LI>
 * <LI>Provide methods for registering, retrieving, and removing
 * <code>IProxy</code> instances.</LI>
 * </UL>
 *
 * <P>Your application must register <code>IProxy</code> instances
 * with the <code>Model</code>. Typically, you use an
 * <code>ICommand</code> to create and register <code>IProxy</code>
 * instances once the <code>Facade</code> has initialized the Core
 * actors.</p>
 *
 * @see puremvc.Proxy Proxy
 * @see puremvc.IProxy IProxy
 *
 * @class puremvc.Model
 * @implements puremvc.IModel
 */
class Model {

    /**
     * Constructor.
     *
     * <P>This <code>IModel</code> implementation is a Multiton,
     * so you should not call the constructor
     * directly, but instead call the static Multiton
     * Factory method <code>Model.getInstance( multitonKey )</code>
     *
     * @constructor
     * @param {string} key
     *
     * @throws {Error} Error if instance for this Multiton key instance has already been constructed
     */
    constructor(key) {
        if (Model.instanceMap.get(key) != null) throw new Error(Model.MULTITON_MSG);
        /** @protected {string} */
        this.multitonKey = key;
        Model.instanceMap.set(this.multitonKey, this);
        /** @protected {Map<string, puremvc.IProxy>} */
        this.proxyMap = new Map();
        this.initializeModel();
    }

    /**
     * Initialize the <code>Model</code> instance.
     *
     * <P>Called automatically by the constructor, this
     * is your opportunity to initialize the Multiton
     * instance in your subclass without overriding the
     * constructor.</P>
     *
     */
    initializeModel() {

    }

    /**
     * <code>Model</code> Multiton Factory method.
     *
     * @static
     * @param {string} key
     * @param {factory} factory
     * @param {function(string):puremvc.IModel} factory
     * @returns {puremvc.IModel} the instance for this Multiton key
     */
    static getInstance(key, factory) {
        if (this.instanceMap.get(key) == null) this.instanceMap.set(key, factory(key));
        return this.instanceMap.get(key);
    }

    /**
     * Register an <code>IProxy</code> with the <code>Model</code>.
     *
     * @param {puremvc.IProxy} proxy an <code>IProxy</code> to be held by the <code>Model</code>.
     */
    registerProxy(proxy) {
        proxy.initializeNotifier(this.multitonKey);
        this.proxyMap.set(proxy.getProxyName(), proxy);
        proxy.onRegister();
    }

    /**
     * Retrieve an <code>IProxy</code> from the <code>Model</code>.
     *
     * @param {string} proxyName
     * @returns {puremvc.IProxy} the <code>IProxy</code> instance previously registered with the given <code>proxyName</code>.
     */
    retrieveProxy(proxyName) {
        return this.proxyMap.get(proxyName);
    }

    /**
     * Check if a Proxy is registered
     *
     * @param {string} proxyName
     * @returns {boolean} whether a Proxy is currently registered with the given <code>proxyName</code>.
     */
    hasProxy(proxyName) {
        return this.proxyMap.has(proxyName);
    }

    /**
     * Remove an <code>IProxy</code> from the <code>Model</code>.
     *
     * @param {string} proxyName name of the <code>IProxy</code> instance to be removed.
     * @returns {puremvc.IProxy} the <code>IProxy</code> that was removed from the <code>Model</code>
     */
    removeProxy(proxyName) {
        let proxy = this.proxyMap.get(proxyName);
        if (proxy != null) {
            this.proxyMap.delete(proxyName);
            proxy.onRemove();
        }
        return proxy;
    }

    /**
     * Remove an IModel instance
     *
     * @static
     * @param key
     */
    static removeModel(key) {
        Model.instanceMap.delete(key);
    }

    /**
     * Multiton instance
     *
     * @static
     * @type {Map<string, puremvc.IModel>}
     */
    static instanceMap = new Map();

    /**
     * @static
     * @type {string}
     */
    static get MULTITON_MSG() { return "Model instance for this Multiton key already constructed!" };
}


/**
 * A Multiton <code>IView</code> implementation.
 *
 * <P>In PureMVC, the <code>View</code> class assumes these responsibilities:</P>
 *
 * <UL>
 * <LI>Maintain a cache of <code>IMediator</code> instances.</LI>
 * <LI>Provide methods for registering, retrieving, and removing <code>IMediators</code>.</LI>
 * <LI>Notifiying <code>IMediators</code> when they are registered or removed.</LI>
 * <LI>Managing the observer lists for each <code>INotification</code> in the application.</LI>
 * <LI>Providing a method for attaching <code>IObservers</code> to an <code>INotification</code>'s observer list.</LI>
 * <LI>Providing a method for broadcasting an <code>INotification</code>.</LI>
 * <LI>Notifying the <code>IObservers</code> of a given <code>INotification</code> when it broadcast.</LI>
 * </UL>
 *
 * @see puremvc.Mediator Mediator
 * @see puremvc.Observer Observer
 * @see puremvc.Notification Notification
 *
 * @class puremvc.View
 * @implements puremvc.IView
 */
class View {

    /**
     * Constructor.
     *
     * <P>This <code>IView</code> implementation is a Multiton,
     * so you should not call the constructor
     * directly, but instead call the static Multiton
     * Factory method <code>View.getInstance( multitonKey )</code>
     *
     * @constructor
     * @param {string} key
     *
     * @throws {Error} Error if instance for this Multiton key has already been constructed
     */
    constructor(key) {
        if (View.instanceMap.get(key) != null) throw new Error(View.MULTITON_MSG);
        /** @protected {string} */
        this.multitonKey = key;
        View.instanceMap.set(this.multitonKey, this);
        /** @protected {Map<string, puremvc.IMediator>} */
        this.mediatorMap = new Map();
        /** @protected {Map<string, [puremvc.IObserver]>} */
        this.observerMap = new Map();
        this.initializeView();
    }

    /**
     * <P>Initialize the Multiton View instance.</P>
     *
     * <P>Called automatically by the constructor, this
     * is your opportunity to initialize the Multiton
     * instance in your subclass without overriding the
     * constructor.</P>
     */
    initializeView() {

    }

    /**
     * View Multiton factory method.
     *
     * @static
     * @param {string} key
     * @param {factory} factory
     * @param {function(string):puremvc.IView} factory
     * @returns {puremvc.IView} the Multiton instance of <code>View</code>
     */
    static getInstance(key, factory) {
        if (this.instanceMap.get(key) == null) this.instanceMap.set(key, factory(key));
        return this.instanceMap.get(key);
    }

    /**
     * <P>Register an <code>IObserver</code> to be notified
     * of <code>INotifications</code> with a given name.</P>
     *
     * @param {string} notificationName the name of the <code>INotifications</code> to notify this <code>IObserver</code> of
     * @param {puremvc.IObserver} observer the <code>IObserver</code> to register
     */
    registerObserver(notificationName, observer) {
        if (this.observerMap.get(notificationName) != null) {
            let observers = this.observerMap.get(notificationName);
            observers.push(observer);
        } else {
            this.observerMap.set(notificationName, new Array(observer));
        }
    }

    /**
     * <P>Notify the <code>IObservers</code> for a particular <code>INotification</code>.</P>
     *
     * <P>All previously attached <code>IObservers</code> for this <code>INotification</code>'s
     * list are notified and are passed a reference to the <code>INotification</code> in
     * the order in which they were registered.</P>
     *
     * @param {puremvc.INotification} notification the <code>INotification</code> to notify <code>IObservers</code> of.
     */
    notifyObservers(notification) {
        if (this.observerMap.has(notification.name)) {
            // Copy observers from reference array to working array,
            // since the reference array may change during the notification loop
            let observers = this.observerMap.get(notification.name).slice();

            // Notify Observers from the working array
            for(let i = 0; i < observers.length; i++) {
                observers[i].notifyObserver(notification);
            }
        }
    }

    /**
     * <P>Remove the observer for a given notifyContext from an observer list for a given Notification name.</P>
     *
     * @param {string} notificationName which observer list to remove from
     * @param {Object} notifyContext remove the observer with this object as its notifyContext
     */
    removeObserver(notificationName, notifyContext) {
        // the observer list for the notification under inspection
        let observers = this.observerMap.get(notificationName);

        // find the observer for the notifyContext
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
     * Register an <code>IMediator</code> instance with the <code>View</code>.
     *
     * <P>Registers the <code>IMediator</code> so that it can be retrieved by name,
     * and further interrogates the <code>IMediator</code> for its
     * <code>INotification</code> interests.</P>
     *
     * <P>If the <code>IMediator</code> returns any <code>INotification</code>
     * names to be notified about, an <code>Observer</code> is created encapsulating
     * the <code>IMediator</code> instance's <code>handleNotification</code> method
     * and registering it as an <code>Observer</code> for all <code>INotifications</code> the
     * <code>IMediator</code> is interested in.</p>
     *
     * @param {puremvc.IMediator} mediator a reference to the <code>IMediator</code> instance
     */
    registerMediator(mediator) {
        // do not allow re-registration (you must to removeMediator fist)
        if (this.mediatorMap.has(mediator.getMediatorName()) !== false) return;

        mediator.initializeNotifier(this.multitonKey);

        // Register the Mediator for retrieval by name
        this.mediatorMap.set(mediator.getMediatorName(), mediator);

        // Get Notification interests, if any.
        let interests = mediator.listNotificationInterests();

        // Register Mediator as an observer for each notification of interests
        if (interests.length > 0) {
            // Create Observer referencing this mediator's handlNotification method
            let observer = new Observer(mediator.handleNotification.bind(mediator), mediator); // check bind

            // Register Mediator as Observer for its list of Notification interests
            for (let i = 0; i < interests.length; i++) {
                this.registerObserver(interests[i], observer);
            }
        }

        // alert the mediator that it has been registered
        mediator.onRegister();
    }

    /**
     * Retrieve an <code>IMediator</code> from the <code>View</code>.
     *
     * @param {string} mediatorName the name of the <code>IMediator</code> instance to retrieve.
     * @returns {puremvc.IMediator} the <code>IMediator</code> instance previously registered with the given <code>mediatorName</code>.
     */
    retrieveMediator(mediatorName) {
        return this.mediatorMap.get(mediatorName);
    }

    /**
     * Remove an <code>IMediator</code> from the <code>View</code>.
     *
     * @param {string} mediatorName name of the <code>IMediator</code> instance to be removed.
     * @returns {puremvc.IMediator} the <code>IMediator</code> that was removed from the <code>View</code>
     */
    removeMediator(mediatorName) {
        // Retrieve the named mediator
        let mediator = this.mediatorMap.get(mediatorName);

        if (mediator) {
            // for every notification this mediator is interested in...
            let interests = mediator.listNotificationInterests();
            for (let i = 0; i < interests.length; i++) {
                // remove the observer linking the mediator
                // to the notification interest
                this.removeObserver(interests[i], mediator);
            }

            // remove the mediator from the map
            this.mediatorMap.delete(mediatorName);

            // alert the mediator that it has been removed
            mediator.onRemove();
        }

        return mediator;
    }

    /**
     * Check if a Mediator is registered or not
     *
     * @param {string} mediatorName
     * @returns {boolean} whether a Mediator is registered with the given <code>mediatorName</code>.
     */
    hasMediator(mediatorName) {
        return this.mediatorMap.has(mediatorName);
    }

    /**
     * Remove an IView instance
     *
     * @static
     * @param key multitonKey of IView instance to remove
     */
    static removeView(key) {
        this.instanceMap.delete(key);
    }

    /**
     * Multiton instance
     *
     * @static
     * @type {Map<string, puremvc.IView>}
     */
    static instanceMap = new Map();

    /**
     * Message Constants
     *
     * @static
     * @type {string}
     */
    static get MULTITON_MSG() { return "View instance for this Multiton key already constructed!" };

}


/**
 *
 * A base <code>INotification</code> implementation.
 *
 * <P>PureMVC does not rely upon underlying event models such
 * as the one provided with Flash, and ActionScript 3 does
 * not have an inherent event model.</P>
 *
 * <P>The Observer Pattern as implemented within PureMVC exists
 * to support event-driven communication between the
 * application and the actors of the MVC triad.</P>
 *
 * <P>Notifications are not meant to be a replacement for Events
 * in Flex/Flash/Apollo. Generally, <code>IMediator</code> implementors
 * place event listeners on their view components, which they
 * then handle in the usual way. This may lead to the broadcast of <code>Notification</code>s to
 * trigger <code>ICommand</code>s or to communicate with other <code>IMediators</code>. <code>IProxy</code> and <code>ICommand</code>
 * instances communicate with each other and <code>IMediator</code>s
 * by broadcasting <code>INotification</code>s.</P>
 *
 * <P>A key difference between Flash <code>Event</code>s and PureMVC
 * <code>Notification</code>s is that <code>Event</code>s follow the
 * 'Chain of Responsibility' pattern, 'bubbling' up the display hierarchy
 * until some parent component handles the <code>Event</code>, while
 * PureMVC <code>Notification</code>s follow a 'Publish/Subscribe'
 * pattern. PureMVC classes need not be related to each other in a
 * parent/child relationship in order to communicate with one another
 * using <code>Notification</code>s.</P>
 *
 * @typedef {puremvc.INotification} INotification
 * @typedef {puremvc.Notification} Notification
 *
 * @class puremvc.Notification
 * @implements puremvc.INotification
 */
class Notification extends INotification {

    /**
     * Constructor.
     *
     * @constructor
     * @param {string} name
     * @param {Object} [body] body
     * @param {string} [type] type
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
     * Get the name of the <code>Notification</code> instance.
     *
     * @returns {string}
     */
    getName() {
        return this.name;
    }

    /**
     * Set the body of the <code>Notification</code> instance.
     *
     * @param {Object} body
     */
    setBody(body) {
        this.body = body;
    }

    /**
     * Get the body of the <code>Notification</code> instance.
     *
     * @returns {Object}
     */
    getBody() {
        return this.body;
    }

    /**
     * Set the type of the <code>Notification</code> instance.
     *
     * @param {string} type
     */
    setType(type) {
        this.type = type;
    }

    /**
     * Get the type of the <code>Notification</code> instance.
     *
     * @returns {string}
     */
    getType() {
        return this.type;
    }

    /**
     * Get the string representation of the <code>Notification</code> instance.
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
 * A Base <code>INotifier</code> implementation.
 *
 * <P><code>MacroCommand, Command, Mediator</code> and <code>Proxy</code>
 * all have a need to send <code>Notifications</code>.<P>
 *
 * <P>The <code>INotifier</code> interface provides a common method called
 * <code>sendNotification</code> that relieves implementation code of
 * the necessity to actually construct <code>Notifications</code>.</P>
 *
 * <P>The <code>Notifier</code> class, which all of the above mentioned classes
 * extend, provides an initialized reference to the <code>Facade</code>
 * Multiton, which is required for the convenience method
 * for sending <code>Notifications</code>, but also eases implementation as these
 * classes have frequent <code>Facade</code> interactions and usually require
 * access to the facade anyway.</P>
 *
 * <P>NOTE: In the MultiCore version of the framework, there is one caveat to
 * notifiers, they cannot send notifications or reach the facade until they
 * have a valid multitonKey.</P>
 *
 * The multitonKey is set:
 *   * on a Command when it is executed by the Controller
 *   * on a Mediator is registered with the View
 *   * on a Proxy is registered with the Model.
 *
 * @see puremvc.Proxy Proxy
 * @see puremvc.Facade Facade
 * @see puremvc.Mediator Mediator
 * @see puremvc.MacroCommand MacroCommand
 * @see puremvc.SimpleCommand SimpleCommand
 *
 * @typedef {puremvc.Notifier} Notifier
 *
 * @class puremvc.Notifier
 * @implements puremvc.INotifier
 */
class Notifier {

    /**
     * Create and send an <code>INotification</code>.
     *
     * <P>Keeps us from having to construct new INotification
     * instances in our implementation code.</P>
     *
     * @param {string} notificationName
     * @param {Object} [body] body
     * @param {string} [type] type
     */
    sendNotification (notificationName, body = null, type = "") {
        if (this.facade != null) {
            this.facade.sendNotification(notificationName, body, type);
        }
    }

    /**
     * Initialize this INotifier instance.
     *
     * <P>This is how a Notifier gets its multitonKey.
     * Calls to sendNotification or to access the
     * facade will fail until after this method
     * has been called.</P>
     *
     * <P>Mediators, Commands or Proxies may override
     * this method in order to send notifications
     * or access the Multiton Facade instance as
     * soon as possible. They CANNOT access the facade
     * in their constructors, since this method will not
     * yet have been called.</P>
     *
     * @param {string} key the multitonKey for this INotifier to use
     */
    initializeNotifier(key) {
        /** @private */
        this.multitonKey = key;
    }

    /**
     * Return the Multiton Facade instance
     *
     * @typedef {puremvc.Facade} Facade
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
 * A base <code>IObserver</code> implementation.
 *
 * <P>An <code>Observer</code> is an object that encapsulates information
 * about an interested object with a method that should
 * be called when a particular <code>INotification</code> is broadcast.</P>
 *
 * <P>In PureMVC, the <code>Observer</code> class assumes these responsibilities:</P>
 *
 * <UL>
 * <LI>Encapsulate the notification (callback) method of the interested object.</LI>
 * <LI>Encapsulate the notification context (this) of the interested object.</LI>
 * <LI>Provide methods for setting the notification method and context.</LI>
 * <LI>Provide a method for notifying the interested object.</LI>
 * </UL>
 *
 * @typedef {puremvc.Observer} Observer
 *
 * @class puremvc.Observer
 * @implements puremvc.IObserver
 */
class Observer {

    /**
     * Constructor.
     *
     * <P>The notification method on the interested object should take
     * one parameter of type <code>INotification</code></P>
     *
     * @param {consumer} notifyMethod
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
     * Notify the interested object.
     *
     * @param {puremvc.INotification} notification
     */
    notifyObserver(notification) {
        this.notifyMethod.call(this.notifyContext, notification);
    }

    /**
     * Compare an object to the notification context.
     *
     * @param {Object} notifyContext
     * @returns {boolean}
     */
    compareNotifyContext(notifyContext) {
        return this.notifyContext === notifyContext;
    }

    /**
     * Set the notification method.
     *
     * <P>The notification method should take one parameter of type <code>INotification</code>.</P>
     *
     * @param {consumer} notifyMethod
     * @param {function(puremvc.INotification):void} notifyMethod
     */
    setNotifyMethod(notifyMethod) {
        this.notifyMethod = notifyMethod;
    }

    /**
     * Set the notification context.
     *
     * @param {Object} notifyContext
     */
    setNotifyContext(notifyContext) {
        this.notifyContext = notifyContext;
    }

}


/**
 * A base Multiton <code>IFacade</code> implementation.
 *
 * @see puremvc.Model Model
 * @see puremvc.View View
 * @see puremvc.Controller Controller
 *
 * @typedef {puremvc.Facade} Facade
 *
 * @class puremvc.Facade
 * @implements puremvc.IFacade
 */
class Facade {

    /**
     * Constructor.
     *
     * <P>This <code>IFacade</code> implementation is a Multiton,
     * so you should not call the constructor
     * directly, but instead call the static Factory method,
     * passing the unique key for this instance
     * <code>Facade.getInstance( multitonKey )</code></P>
     *
     * @constructor
     * @param {string} key
     * @throws {Error} Error if instance for this Multiton key has already been constructed
     */
    constructor(key) {
        if (Facade.instanceMap[key] != null) throw new Error(Facade.MULTITON_MSG);
        this.initializeNotifier(key);
        Facade.instanceMap.set(this.multitonKey, this);
        this.initializeFacade();
    }

    /**
     * Initialize the Multiton <code>Facade</code> instance.
     *
     * <P>Called automatically by the constructor. Override in your
     * subclass to do any subclass specific initializations. Be
     * sure to call <code>super.initializeFacade()</code>, though.</P>
     */
    initializeFacade() {
        this.initializeModel();
        this.initializeController();
        this.initializeView();
    }

    /**
     * Facade Multiton Factory method
     *
     * @static
     * @param {string} key
     * @param {factory} factory
     * @param {function(string):puremvc.IFacade} factory
     * @returns {puremvc.IFacade} the Multiton instance of the Facade
     */
    static getInstance(key, factory) {
        if (this.instanceMap.get(key) == null) this.instanceMap.set(key, factory(key));
        return this.instanceMap.get(key);
    }

    /**
     * Initialize the <code>Model</code>.
     *
     * <P>Called by the <code>initializeFacade</code> method.
     * Override this method in your subclass of <code>Facade</code>
     * if one or both of the following are true:</P>
     *
     * <UL>
     * <LI> You wish to initialize a different <code>IModel</code>.</LI>
     * <LI> You have <code>Proxy</code>s to register with the Model that do not
     * retrieve a reference to the Facade at construction time.</code></LI>
     * </UL>
     *
     * If you don't want to initialize a different <code>IModel</code>,
     * call <code>super.initializeModel()</code> at the beginning of your
     * method, then register <code>Proxy</code>s.
     *
     * <P>Note: This method is <i>rarely</i> overridden; in practice you are more
     * likely to use a <code>Command</code> to create and register <code>Proxy</code>s
     * with the <code>Model</code>, since <code>Proxy</code>s with mutable data will likely
     * need to send <code>INotification</code>s and thus will likely want to fetch a reference to
     * the <code>Facade</code> during their construction.</P>
     */
    initializeModel() {
        if (this.model != null) return;
        this.model = Model.getInstance(this.multitonKey, key => new Model(key));
    }

    /**
     * Initialize the <code>Controller</code>.
     *
     * <P>Called by the <code>initializeFacade</code> method.
     * Override this method in your subclass of <code>Facade</code>
     * if one or both of the following are true:</P>
     *
     * <UL>
     * <LI> You wish to initialize a different <code>IController</code>.</LI>
     * <LI> You have <code>Commands</code> to register with the <code>Controller</code> at startup.</code>. </LI>
     * </UL>
     *
     * <P>If you don't want to initialize a different <code>IController</code>,
     * call <code>super.initializeController()</code> at the beginning of your
     * method, then register <code>Command</code>s.</P>
     */
    initializeController() {
        if (this.controller != null) return;
        this.controller = Controller.getInstance(this.multitonKey, key => new Controller(key));
    }

    /**
     * Initialize the <code>View</code>.
     *
     * <P>Called by the <code>initializeFacade</code> method.
     * Override this method in your subclass of <code>Facade</code>
     * if one or both of the following are true:</P>
     *
     * <UL>
     * <LI> You wish to initialize a different <code>IView</code>.</LI>
     * <LI> You have <code>Observers</code> to register with the <code>View</code></LI>
     * </UL>
     *
     * <P>If you don't want to initialize a different <code>IView</code>,
     * call <code>super.initializeView()</code> at the beginning of your
     * method, then register <code>IMediator</code> instances.</P>
     *
     * <P>Note: This method is <i>rarely</i> overridden; in practice you are more
     * likely to use a <code>Command</code> to create and register <code>Mediator</code>s
     * with the <code>View</code>, since <code>IMediator</code> instances will need to send
     * <code>INotification</code>s and thus will likely want to fetch a reference
     * to the <code>Facade</code> during their construction.</P>
     */
    initializeView() {
        if (this.view != null) return;
        this.view = View.getInstance(this.multitonKey, key => new View(key));
    }

    /**
     * Register an <code>ICommand</code> with the <code>Controller</code> by Notification name.
     *
     * @param {string} notificationName the name of the <code>INotification</code> to associate the <code>ICommand</code> with
     * @param {factory} factory
     * @param {function():puremvc.ICommand} factory a reference to the factory of the <code>ICommand</code>
     */
    registerCommand(notificationName, factory) {
        this.controller.registerCommand(notificationName, factory);
    }

    /**
     * Check if a Command is registered for a given Notification
     *
     * @param {string} notificationName
     * @returns {boolean} whether a Command is currently registered for the given <code>notificationName</code>.
     */
    hasCommand(notificationName) {
        return this.controller.hasCommand(notificationName);
    }

    /**
     * Remove a previously registered <code>ICommand</code> to <code>INotification</code> mapping from the Controller.
     *
     * @param {string} notificationName the name of the <code>INotification</code> to remove the <code>ICommand</code> mapping for
     */
    removeCommand(notificationName) {
        this.controller.removeCommand(notificationName);
    }

    /**
     * Register an <code>IProxy</code> with the <code>Model</code> by name.
     *
     * @param {string} proxyName the name of the <code>IProxy</code>.
     * @param {puremvc.IProxy} proxy the <code>IProxy</code> instance to be registered with the <code>Model</code>.
     */
    registerProxy(proxy) {
        this.model.registerProxy(proxy);
    }

    /**
     * Remove an <code>IProxy</code> from the <code>Model</code> by name.
     *
     * @param {string} proxyName the <code>IProxy</code> to remove from the <code>Model</code>.
     * @returns {puremvc.IProxy} the <code>IProxy</code> that was removed from the <code>Model</code>
     */
    removeProxy(proxyName) {
        return this.model.removeProxy(proxyName);
    }

    /**
     * Check if a Proxy is registered
     *
     * @param {string} proxyName
     * @returns {boolean} whether a Proxy is currently registered with the given <code>proxyName</code>.
     */
    hasProxy(proxyName) {
        return this.model.hasProxy(proxyName);
    }

    /**
     * Retrieve an <code>IProxy</code> from the <code>Model</code> by name.
     *
     * @param {string} proxyName the name of the proxy to be retrieved.
     * @returns {puremvc.IProxy} the <code>IProxy</code> instance previously registered with the given <code>proxyName</code>.
     */
    retrieveProxy(proxyName) {
        return this.model.retrieveProxy(proxyName);
    }

    /**
     * Register a <code>IMediator</code> with the <code>View</code>.
     *
     * @param {puremvc.IMediator} mediator a reference to the <code>IMediator</code>
     */
    registerMediator(mediator) {
        this.view.registerMediator(mediator);
    }

    /**
     * Remove an <code>IMediator</code> from the <code>View</code>.
     *
     * @param {string} mediatorName name of the <code>IMediator</code> to be removed.
     * @returns {puremvc.IMediator} the <code>IMediator</code> that was removed from the <code>View</code>
     */
    removeMediator(mediatorName) {
        return this.view.removeMediator(mediatorName);
    }

    /**
     * Check if a Mediator is registered or not
     *
     * @param {string} mediatorName
     * @returns {puremvc.IMediator} whether a Mediator is registered with the given <code>mediatorName</code>.
     */
    hasMediator(mediatorName) {
        return this.view.hasMediator(mediatorName);
    }

    /**
     * Retrieve an <code>IMediator</code> from the <code>View</code>.
     *
     * @param {string} mediatorName
     * @returns {puremvc.IMediator} the <code>IMediator</code> previously registered with the given <code>mediatorName</code>.
     */
    retrieveMediator(mediatorName) {
        return this.view.retrieveMediator(mediatorName);
    }

    /**
     * Create and send an <code>INotification</code>.
     *
     * <P>Keeps us from having to construct new notification
     * instances in our implementation code.</P>
     *
     * @param {string} notificationName the name of the notiification to send
     * @param {Object} [body] body the body of the notification (optional)
     * @param {string} [type] type the type of the notification (optional)
     */
    sendNotification(notificationName, body = null, type = "") {
        this.notifyObservers(new Notification(notificationName, body, type));
    }

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
    notifyObservers(notification) {
        this.view.notifyObservers(notification);
    }

    /**
     * Set the Multiton key for this facade instance.
     *
     * <P>Not called directly, but instead from the
     * constructor when getInstance is invoked.
     * It is necessary to be public in order to
     * implement INotifier.</P>
     */
    initializeNotifier(key) {
        this.multitonKey = key;
    }

    /**
     * Check if a Core is registered or not
     *
     * @static
     * @param {string} key the multiton key for the Core in question
     * @returns {boolean} whether a Core is registered with the given <code>key</code>.
     */
    static hasCore(key) {
        return this.instanceMap.has(key);
    }

    /**
     * Remove a Core.
     *
     * <P>Remove the Model, View, Controller and Facade
     * instances for the given key.</P>
     *
     * @typedef {puremvc.IModel} Model
     * @typedef {puremvc.IView} View
     * @typedef {puremvc.IController} Controller
     *
     * @static
     * @param {string} key multitonKey of the Core to remove
     */
    static removeCore(key) {
        if (Facade.instanceMap.get(key) == null) return;
        Model.removeModel(key);
        View.removeView(key);
        Controller.removeController(key);
        this.instanceMap.delete(key);
    }

    /**
     * The Multiton Facade instanceMap.
     *
     * @static
     * @type {Map<string, puremvc.IFacade>}
     */
    static instanceMap = new Map();

    /**
     * Message Constants
     *
     * @static
     * @returns {string}
     */
    static get MULTITON_MSG() {return "Facade instance for this Multiton key already constructed!"};
}


/**
 * A base <code>ICommand</code> implementation.
 *
 * <P>Your subclass should override the <code>execute</code>
 * method where your business logic will handle the <code>INotification</code>.</P>
 *
 * @see puremvc.Controller Controller
 * @see puremvc.Notification Notification
 * @see puremvc.MacroCommand MacroCommand
 *
 * @typedef {puremvc.SimpleCommand} SimpleCommand
 *
 * @class puremvc.SimpleCommand
 * @extends puremvc.Notifier
 * @implements puremvc.ICommand
 */
class SimpleCommand extends Notifier {

    /**
     * Fulfill the use-case initiated by the given <code>INotification</code>.
     *
     * <P>In the Command Pattern, an application use-case typically
     * begins with some user action, which results in an <code>INotification</code> being broadcast, which
     * is handled by business logic in the <code>execute</code> method of an
     * <code>ICommand</code>.</P>
     *
     * @param {puremvc.INotification} notification
     */
    execute(notification) {

    }
}


/**
 * A base <code>ICommand</code> implementation that executes other <code>ICommand</code>s.
 *
 * <P>A <code>MacroCommand</code> maintains an list of
 * <code>ICommand</code> Class references called <i>SubCommands</i>.</P>
 *
 * <P>When <code>execute</code> is called, the <code>MacroCommand</code>
 * instantiates and calls <code>execute</code> on each of its <i>SubCommands</i> turn.
 * Each <i>SubCommand</i> will be passed a reference to the original
 * <code>INotification</code> that was passed to the <code>MacroCommand</code>'s
 * <code>execute</code> method.</P>
 *
 * <P>Unlike <code>SimpleCommand</code>, your subclass
 * should not override <code>execute</code>, but instead, should
 * override the <code>initializeMacroCommand</code> method,
 * calling <code>addSubCommand</code> once for each <i>SubCommand</i>
 * to be executed.</P>
 *
 * @see puremvc.Controller Controller
 * @see puremvc.Notification Notification
 * @see puremvc.SimpleCommand SimpleCommand
 *
 * @typedef {puremvc.MacroCommand} MacroCommand
 *
 * @class puremvc.MacroCommand
 * @extends puremvc.Notifier
 * @implements puremvc.ICommand
 */
class MacroCommand extends Notifier {

    /**
     * Constructor.
     *
     * <P>You should not need to define a constructor,
     * instead, override the <code>initializeMacroCommand</code>
     * method.</P>
     *
     * <P>If your subclass does define a constructor, be
     * sure to call <code>super()</code>.</P>
     *
     * @constructor
     */
    constructor() {
        super();
        /** @protected {[function():puremvc.ICommand]} */
        this.subCommands = [];
        this.initializeMacroCommand();
    }

    /**
     * Initialize the <code>MacroCommand</code>.
     *
     * <P>In your subclass, override this method to
     * initialize the <code>MacroCommand</code>'s <i>SubCommand</i>
     * list with <code>ICommand</code> class references like
     * this:</P>
     *
     * <pre><code>
     *		// Initialize MyMacroCommand
     *		initializeMacroCommand() {
     *			this.addSubCommand(() => new app.FirstCommand());
     *			this.addSubCommand(() => new app.SecondCommand());
     *			this.addSubCommand(() => new app.ThirdCommand());
     *		}
     * </code></pre>
     *
     * <P>Note that <i>SubCommand</i>s may be any <code>ICommand</code> implementor,
     * <code>MacroCommand</code>s or <code>SimpleCommands</code> are both acceptable.
     */
    initializeMacroCommand() {

    }

    /**
     * Add a <i>SubCommand</i>.
     *
     * <P>The <i>SubCommands</i> will be called in First In/First Out (FIFO)
     * order.</P>
     *
     * @param {factory} factory
     * @param {function():puremvc.ICommand} factory
     */
    addSubCommand(factory) {
        this.subCommands.push(factory);
    }

    /**
     * Execute this <code>MacroCommand</code>'s <i>SubCommands</i>.
     *
     * <P>The <i>SubCommands</i> will be called in First In/First Out (FIFO)
     * order.</P>
     *
     * @param {puremvc.INotification} notification
     */
    execute(notification) {
        while(this.subCommands.length > 0) {
            let factory = this.subCommands.shift();
            let commandInstance = factory();
            commandInstance.initializeNotifier(this.multitonKey);
            commandInstance.execute(notification);
        }
    }

}


/**
 * A base <code>IMediator</code> implementation.
 *
 * @see puremvc.View View
 *
 * @typedef {puremvc.Mediator} Mediator
 * @typedef {puremvc.Notifier} Notifier
 *
 * @class puremvc.Mediator
 * @extends puremvc.Notifier
 * @implements puremvc.IMediator
 */
class Mediator extends Notifier {

    /**
     * Constructor.
     *
     * @constructor
     * @param {string} mediatorName
     * @param {Object} [viewComponent] viewComponent
     */
    constructor(mediatorName, viewComponent = null) {
        super();
        /** @private */
        this.mediatorName = mediatorName || Mediator.NAME;
        /** @private */
        this.viewComponent = viewComponent;
    }

    /**
     * Called by the View when the Mediator is registered
     */
    onRegister() {

    }

    /**
     * Called by the View when the Mediator is removed
     */
    onRemove() {

    }

    /**
     * List the <code>INotification</code> names this
     * <code>Mediator</code> is interested in being notified of.
     *
     * @returns {[string]}
     */
    listNotificationInterests() {
        return [];
    }

    /**
     * Handle <code>INotification</code>s.
     *
     * <P>
     * Typically this will be handled in a switch statement,
     * with one 'case' entry per <code>INotification</code>
     * the <code>Mediator</code> is interested in.
     *
     * @param {puremvc.INotification} notification
     */
    handleNotification(notification) {

    }

    /**
     * the mediator name
     *
     * @returns {string}
     */
    getMediatorName() {
        return this.mediatorName;
    }

    /**
     * Get the <code>Mediator</code>'s view component.
     *
     * <P>
     * Additionally, an implicit getter will usually
     * be defined in the subclass that casts the view
     * object to a type, like this:</P>
     *
     * @returns {Object}
     */
    getViewComponent() {
        return this.viewComponent;
    }

    /**
     * Set the <code>IMediator</code>'s view component.
     *
     * @param {Object} viewComponent
     */
    setViewComponent(viewComponent) {
        this.viewComponent = viewComponent;
    }

    /**
     * The name of the <code>Mediator</code>.
     *
     * <P>Typically, a <code>Mediator</code> will be written to serve
     * one specific control or group controls and so,
     * will not have a need to be dynamically named.</P>
     *
     * @static
     * @returns {string}
     */
    static get NAME() { return "Mediator" }
}


/**
 * A base <code>IProxy</code> implementation.
 *
 * <P>In PureMVC, <code>Proxy</code> classes are used to manage parts of the
 * application's data model. </P>
 *
 * <P>A <code>Proxy</code> might simply manage a reference to a local data object,
 * in which case interacting with it might involve setting and
 * getting of its data in synchronous fashion.</P>
 *
 * <P><code>Proxy</code> classes are also used to encapsulate the application's
 * interaction with remote services to save or retrieve data, in which case,
 * we adopt an asynchronous idiom; setting data (or calling a method) on the
 * <code>Proxy</code> and listening for a <code>Notification</code> to be sent
 * when the <code>Proxy</code> has retrieved the data from the service. </P>
 *
 * @see puremvc.Model Model
 *
 * @typedef {puremvc.Proxy} Proxy
 * @typedef {puremvc.Notifier} Notifier
 *
 * @class puremvc.Proxy
 * @extends puremvc.Notifier
 * @implements puremvc.IProxy
 */
class Proxy extends Notifier {

    /**
     * Constructor
     *
     * @constructor
     * @param {string} proxyName
     * @param {Object} [data]
     */
    constructor(proxyName, data = null) {
        super();
        /** @private */
        this.proxyName = proxyName || Proxy.NAME;
        /** @private */
        this.data = data;
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
     * Get the proxy name
     *
     * @returns {string}
     */
    getProxyName() {
        return this.proxyName;
    }

    /**
     * Set the data object
     *
     * @param {Object} data
     */
    setData(data) {
        this.data = data;
    }

    /**
     * Get the data object
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


