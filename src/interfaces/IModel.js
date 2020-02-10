/**
 * The interface definition for a PureMVC Model.
 *
 * @interface puremvc.IModel
 */
function IModel() {}

/**
 *
 * @param {puremvc.IProxy} proxy
 */
IModel.prototype.registerProxy = proxy => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} proxyName
 * @returns {puremvc.IProxy}
 */
IModel.prototype.retrieveProxy = proxyName => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} proxyName
 * @returns {puremvc.IProxy}
 */
IModel.prototype.removeProxy = proxyName => {
    throw new Error("Not Implemented");
};

/**
 *
 * @param {string} proxyName
 * @returns {boolean}
 */
IModel.prototype.hasProxy = proxyName => {
    throw new Error("Not Implemented");
};