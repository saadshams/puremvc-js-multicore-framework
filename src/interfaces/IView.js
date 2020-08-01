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
