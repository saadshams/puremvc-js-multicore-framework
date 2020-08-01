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
