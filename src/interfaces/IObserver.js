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