/**
 * The interface definition for a PureMVC Notification.
 *
 * @interface puremvc.INotification
 */
function INotification() {}

/**
 *
 * @returns {string}
 */
INotification.prototype.getName = () => {
    throw new Error("Not Implemented");
};

/**
 *
 * @returns {*}
 */
INotification.prototype.getBody = () => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {*} body
 */
INotification.prototype.setBody = body => {
    throw new Error("Not Implemented");
};

/**
 *
 * @returns {string}
 */
INotification.prototype.getType = () => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} type
 */
INotification.prototype.setType = type => {
    throw new Error("Not Implemented");
};

/**
 *
 * @returns {string}
 */
INotification.prototype.toString = () => {
    throw new Error("Not Implemented");
};