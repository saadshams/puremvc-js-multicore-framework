/**
 * @class puremvc.Model
 * @implements puremvc.IModel
 */
class Model {

    /**
     * @constructor
     * @param {string} key
     */
    constructor(key) {
        if (Model.instanceMap.get(key) != null) throw new Error(Model.MULTITON_MSG);
        /** @member {string} */
        this.multitonKey = key;
        Model.instanceMap.set(this.multitonKey, this);
        /** @member {Map<string, IProxy>} */
        this.proxyMap = new Map();
        this.initializeModel();
    }

    initializeModel() {

    }

    /**
     *
     * @param {string} key
     * @param {function(string):puremvc.IModel} modelFunction
     * @returns {puremvc.IModel}
     */
    static getInstance(key, modelFunction) {
        if (this.instanceMap.get(key) == null) this.instanceMap.set(key, modelFunction(key));
        return this.instanceMap.get(key);
    }

    registerProxy(proxy) {
        proxy.initializeNotifier(this.multitonKey);
        this.proxyMap.set(proxy.getProxyName(), proxy);
        proxy.onRegister();
    }

    retrieveProxy(proxyName) {
        return this.proxyMap.get(proxyName);
    }

    hasProxy(proxyName) {
        return this.proxyMap.has(proxyName);
    }

    removeProxy(proxyName) {
        let proxy = this.proxyMap.get(proxyName);
        if (proxy != null) {
            this.proxyMap.delete(proxyName);
            proxy.onRemove();
        }
        return proxy;
    }

    static removeModel(key) {
        Model.instanceMap.delete(key);
    }

    /**
     *
     * @type {Map<string, puremvc.IModel>}
     */
    static instanceMap = new Map();

    /**
     *
     * @type {string}
     */
    static get MULTITON_MSG() { return "Model instance for this Multiton key already constructed!" };
}