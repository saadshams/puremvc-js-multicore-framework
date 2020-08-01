/**
 * The interface definition for a PureMVC Proxy.
 *
 * <P>In PureMVC, <code>IProxy</code> implementors assume these responsibilities:</P>
 *
 * <UL>
 * <LI>Implement a common method which returns the name of the Proxy.</LI>
 * <LI>Provide methods for setting and getting the data object.</LI>
 * </UL>
 *
 * <P>Additionally, <code>IProxy</code>s typically:</P>
 *
 * <UL>
 * <LI>Maintain references to one or more pieces of model data.</LI>
 * <LI>Provide methods for manipulating that data.</LI>
 * <LI>Generate <code>INotifications</code> when their model data changes.</LI>
 * <LI>Expose their name as a <code>public static const</code> called <code>NAME</code>, if they are not instantiated multiple times.</LI>
 * <LI>Encapsulate interaction with local or remote services used to fetch and persist model data.</LI>
 * </UL>
 *
 * @interface puremvc.IProxy
 * @extends puremvc.INotifier
 */
function IProxy() {}

IProxy.prototype = new INotifier();
IProxy.prototype.constructor = IProxy;

/**
 * Get the Proxy name
 *
 * @returns {string} the Proxy instance name
 */
IProxy.prototype.getProxyName = () => {
    throw new Error("Not Implemented");
};

/**
 * Set the data object
 *
 * @param {Object} data the data object
 */
IProxy.prototype.setData = (data) => {
    throw new Error("Not Implemented");
};

/**
 * Get the data object
 *
 * @returns {Object} the data as type Object
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
