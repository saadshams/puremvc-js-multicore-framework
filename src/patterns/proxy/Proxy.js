/**
 *
 * @class puremvc.Proxy
 * @extends puremvc.Notifier
 * @implements puremvc.IProxy
 */
class Proxy extends Notifier {

    /**
     *
     * @constructor
     * @param {string} proxyName
     * @param {Object} [data]
     */
    constructor(proxyName, data) {
        super();
        /** @private */
        this.proxyName = proxyName || Proxy.NAME;
        /** @private */
        this.data = data;
        if (data != null) {
            this.setData(data);
        }
    }

    /**
     * Called by the Model when the Proxy is registered
     */
    onRegister() {}

    /**
     * Called by the Model when the Proxy is removed
     */
    onRemove() {}

    /**
     *
     * @returns {string}
     */
    getProxyName() {
        return this.proxyName;
    }

    /**
     *
     * @param {Object} data
     */
    setData(data) {
        this.data = data;
    }

    /**
     *
     * @returns {Object}
     */
    getData () {
        return this.data;
    }

    /**
     *
     * @static
     * @returns {string}
     */
    static get NAME() { return "Proxy" }
}