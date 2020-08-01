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
