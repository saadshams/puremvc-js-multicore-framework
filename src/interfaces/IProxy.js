/**
 * The interface definition for a PureMVC Proxy.
 *
 * @interface puremvc.IProxy
 * @extends INotifier
 */
function IProxy() {}

IProxy.prototype = new INotifier();
IProxy.prototype.constructor = IProxy;

/**
 * Get the Proxy name
 *
 * @returns {string}
 */
IProxy.prototype.getProxyName = () => {
    throw new Error("Not Implemented");
};

/**
 * Set the data object
 * @param {*} data
 */
IProxy.prototype.setData = data => {
    throw new Error("Not Implemented");
};

/**
 * Get the data object
 *
 * @returns {*}
 */
IProxy.prototype.getData = () => {
    throw new Error("Not Implemented");
};

/**
 * Called by the Model when the Proxy is registered
 */
IProxy.prototype.onRegister = () => {
    throw new Error("Not Implemented");
};

/**
 * Called by the Model when the Proxy is removed
 */
IProxy.prototype.onRemove = () => {
    throw new Error("Not Implemented");
};