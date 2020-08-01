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
