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