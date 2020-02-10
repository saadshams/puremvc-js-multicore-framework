/**
 * The interface definition for a PureMVC Notifier.
 *
 * @interface puremvc.INotifier
 */
function INotifier() {}

/**
 *
 * @param {string} notificationName
 * @param {*} [body]
 * @param {string} [type]
 */
INotifier.prototype.sendNotification = (notificationName, body, type) => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} key the multitonKey for this INotifier to use
 */
INotifier.prototype.initializeNotifier = key => {
    throw new Error("Not Implemented");
};