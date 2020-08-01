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
