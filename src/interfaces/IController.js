/**
 * The interface definition for a PureMVC Controller.
 *
 * @interface puremvc.IController
 */
function IController() {}

/**
 *
 * @param {string} notificationName
 * @param {function():puremvc.ICommand} commandFunction
 */
IController.prototype.registerCommand = (notificationName, commandFunction) => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {puremvc.INotification} notification
 */
IController.prototype.executeCommand = notification => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} notificationName
 */
IController.prototype.removeCommand = notificationName => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} notificationName
 */
IController.prototype.hasCommand = notificationName => {
    throw new Error("Not Implemented");
};