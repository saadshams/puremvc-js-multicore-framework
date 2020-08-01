/**
 * The interface definition for a PureMVC Model.
 *
 * <P>In PureMVC, <code>IModel</code> implementors provide
 * access to <code>IProxy</code> objects by named lookup.</P>
 *
 * <P>An <code>IModel</code> assumes these responsibilities:</P>
 *
 * <UL>
 * <LI>Maintain a cache of <code>IProxy</code> instances</LI>
 * <LI>Provide methods for registering, retrieving, and removing <code>IProxy</code> instances</LI>
 * </UL>
 *
 * @interface puremvc.IModel
 */
function IModel() {}

/**
 * Register an <code>IProxy</code> instance with the <code>Model</code>.
 *
 * @param {string} proxyName the name to associate with this <code>IProxy</code> instance.
 * @param {puremvc.IProxy} proxy an object reference to be held by the <code>Model</code>.
 */
IModel.prototype.registerProxy = (proxy) => {
    throw new Error("Not Implemented");
};

/**
 * Retrieve an <code>IProxy</code> instance from the Model.
 *
 * @param {string} proxyName
 * @returns {puremvc.IProxy} the <code>IProxy</code> instance previously registered with the given <code>proxyName</code>.
 */
IModel.prototype.retrieveProxy = (proxyName) => {
    throw new Error("Not Implemented");
};

/**
 * Remove an <code>IProxy</code> instance from the Model.
 *
 * @param {string} proxyName name of the <code>IProxy</code> instance to be removed.
 * @returns {puremvc.IProxy} the <code>IProxy</code> that was removed from the <code>Model</code>
 */
IModel.prototype.removeProxy = (proxyName) => {
    throw new Error("Not Implemented");
};

/**
 * Check if a Proxy is registered
 *
 * @param {string} proxyName
 * @returns {boolean} whether a Proxy is currently registered with the given <code>proxyName</code>.
 */
IModel.prototype.hasProxy = (proxyName) => {
    throw new Error("Not Implemented");
};
