// import { IProxy } from "org/puremvc/multicore/interfaces/IProxy"
import { Notifier } from "org/puremvc/multicore/patterns/observer/Notifier"

/**
 * A base <code>IProxy</code> implementation.
 *
 * <P>In PureMVC, <code>Proxy</code> classes are used to manage parts of the
 * application's data model. </P>
 *
 * <P>A <code>Proxy</code> might simply manage a reference to a local data object,
 * in which case interacting with it might involve setting and
 * getting of its data in synchronous fashion.</P>
 *
 * <P><code>Proxy</code> classes are also used to encapsulate the application's
 * interaction with remote services to save or retrieve data, in which case,
 * we adopt an asynchronous idiom; setting data (or calling a method) on the
 * <code>Proxy</code> and listening for a <code>Notification</code> to be sent
 * when the <code>Proxy</code> has retrieved the data from the service. </P>
 *
 * @see puremvc.Model Model
 *
 * @typedef {puremvc.Proxy} Proxy
 * @typedef {puremvc.Notifier} Notifier
 *
 * @class puremvc.Proxy
 * @extends puremvc.Notifier
 * @implements puremvc.IProxy
 */
class Proxy extends Notifier {

    /**
     * Constructor
     *
     * @constructor
     * @param {string} proxyName
     * @param {Object} [data]
     */
    constructor(proxyName, data = null) {
        super();
        /** @private */
        this.proxyName = proxyName || Proxy.NAME;
        /** @private */
        this.data = data;
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
     * Get the proxy name
     *
     * @returns {string}
     */
    getProxyName() {
        return this.proxyName;
    }

    /**
     * Set the data object
     *
     * @param {Object} data
     */
    setData(data) {
        this.data = data;
    }

    /**
     * Get the data object
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

export { Proxy }
