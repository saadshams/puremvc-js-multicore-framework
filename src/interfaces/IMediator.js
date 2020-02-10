/**
 * The interface definition for a PureMVC Mediator.
 *
 * @interface puremvc.IMediator
 * @extends puremvc.INotifier
 */
function IMediator() {}

IMediator.prototype = new INotifier();
IMediator.prototype.constructor = IMediator;

/**
 *
 * @returns {string}
 */
IMediator.prototype.getMediatorName = () => {
    throw new Error("Not Implemented");
};

/**
 *
 * @returns {*}
 */
IMediator.prototype.geViewComponent = () => {
    throw new Error("Not Implemented");
};

/**
 *
 * @returns {[string]}
 */
IMediator.prototype.listNotificationInterests = () => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {puremvc.INotification} notification
 */
IMediator.prototype.handleNotification = notification => {
    throw new Error("Not Implemented");
};

/**
 * @return {void}
 */
IMediator.prototype.onRegister = () => {
    throw new Error("Not Implemented");
};

/**
 * @return {void}
 */
IMediator.prototype.onRemove = () => {
    throw new Error("Not Implemented");
};