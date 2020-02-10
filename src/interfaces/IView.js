/**
 * The interface definition for a PureMVC View.
 *
 * @interface puremvc.IView
 */
function IView() {}

/**
 *
 * @param {string} notificationName
 * @param {puremvc.IObserver} observer
 */
IView.prototype.registerObserver = (notificationName, observer) => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} notificationName
 * @param {Object} notifyContext
 */
IView.prototype.removeObserver = (notificationName, notifyContext) => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {puremvc.INotification} notification
 */
IView.prototype.notifyObservers = notification => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {puremvc.IMediator} mediator
 */
IView.prototype.registerMediator = mediator => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} mediatorName
 * @returns {puremvc.IMediator}
 */
IView.prototype.retrieveMediator = mediatorName => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} mediatorName
 * @returns {puremvc.IMediator}
 */
IView.prototype.removeMediator = mediatorName => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} mediatorName
 * @returns {boolean}
 */
IView.prototype.hasMediator = mediatorName => {
    throw new Error("Not Implemented");
};