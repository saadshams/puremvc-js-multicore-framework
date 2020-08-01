/**
 * A Multiton <code>IModel</code> implementation.
 *
 * <P>In PureMVC, the <code>Model</code> class provides
 * access to model objects (Proxies) by named lookup.
 *
 * <P>The <code>Model</code> assumes these responsibilities:</P>
 *
 * <UL>
 * <LI>Maintain a cache of <code>IProxy</code> instances.</LI>
 * <LI>Provide methods for registering, retrieving, and removing
 * <code>IProxy</code> instances.</LI>
 * </UL>
 *
 * <P>Your application must register <code>IProxy</code> instances
 * with the <code>Model</code>. Typically, you use an
 * <code>ICommand</code> to create and register <code>IProxy</code>
 * instances once the <code>Facade</code> has initialized the Core
 * actors.</p>
 *
 * @see puremvc.Proxy Proxy
 * @see puremvc.IProxy IProxy
 *
 * @class puremvc.Model
 * @implements puremvc.IModel
 */
class Model {

    /**
     * Constructor.
     *
     * <P>This <code>IModel</code> implementation is a Multiton,
     * so you should not call the constructor
     * directly, but instead call the static Multiton
     * Factory method <code>Model.getInstance( multitonKey )</code>
     *
     * @constructor
     * @param {string} key
     *
     * @throws {Error} Error if instance for this Multiton key instance has already been constructed
     */
    constructor(key) {
        if (Model.instanceMap.get(key) != null) throw new Error(Model.MULTITON_MSG);
        /** @protected {string} */
        this.multitonKey = key;
        Model.instanceMap.set(this.multitonKey, this);
        /** @protected {Map<string, puremvc.IProxy>} */
        this.proxyMap = new Map();
        this.initializeModel();
    }

    /**
     * Initialize the <code>Model</code> instance.
     *
     * <P>Called automatically by the constructor, this
     * is your opportunity to initialize the Multiton
     * instance in your subclass without overriding the
     * constructor.</P>
     *
     */
    initializeModel() {

    }

    /**
     * <code>Model</code> Multiton Factory method.
     *
     * @static
     * @param {string} key
     * @param {factory} factory
     * @param {function(string):puremvc.IModel} factory
     * @returns {puremvc.IModel} the instance for this Multiton key
     */
    static getInstance(key, factory) {
        if (this.instanceMap.get(key) == null) this.instanceMap.set(key, factory(key));
        return this.instanceMap.get(key);
    }

    /**
     * Register an <code>IProxy</code> with the <code>Model</code>.
     *
     * @param {puremvc.IProxy} proxy an <code>IProxy</code> to be held by the <code>Model</code>.
     */
    registerProxy(proxy) {
        proxy.initializeNotifier(this.multitonKey);
        this.proxyMap.set(proxy.getProxyName(), proxy);
        proxy.onRegister();
    }

    /**
     * Retrieve an <code>IProxy</code> from the <code>Model</code>.
     *
     * @param {string} proxyName
     * @returns {puremvc.IProxy} the <code>IProxy</code> instance previously registered with the given <code>proxyName</code>.
     */
    retrieveProxy(proxyName) {
        return this.proxyMap.get(proxyName);
    }

    /**
     * Check if a Proxy is registered
     *
     * @param {string} proxyName
     * @returns {boolean} whether a Proxy is currently registered with the given <code>proxyName</code>.
     */
    hasProxy(proxyName) {
        return this.proxyMap.has(proxyName);
    }

    /**
     * Remove an <code>IProxy</code> from the <code>Model</code>.
     *
     * @param {string} proxyName name of the <code>IProxy</code> instance to be removed.
     * @returns {puremvc.IProxy} the <code>IProxy</code> that was removed from the <code>Model</code>
     */
    removeProxy(proxyName) {
        let proxy = this.proxyMap.get(proxyName);
        if (proxy != null) {
            this.proxyMap.delete(proxyName);
            proxy.onRemove();
        }
        return proxy;
    }

    /**
     * Remove an IModel instance
     *
     * @static
     * @param key
     */
    static removeModel(key) {
        Model.instanceMap.delete(key);
    }

    /**
     * Multiton instance
     *
     * @static
     * @type {Map<string, puremvc.IModel>}
     */
    static instanceMap = new Map();

    /**
     * @static
     * @type {string}
     */
    static get MULTITON_MSG() { return "Model instance for this Multiton key already constructed!" };
}
