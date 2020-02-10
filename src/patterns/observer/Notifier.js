/**
 * @class puremvc.Notifier
 * @implements puremvc.INotifier
 */
class Notifier {

    /**
     *
     * @param {string} notificationName
     * @param {*} [body]
     * @param {string} [type]
     */
    sendNotification (notificationName, body, type) {
        if (this.facade != null) {
            this.facade.sendNotification(notificationName, body, type);
        }
    }

    /**
     *
     * @param {string} key the multitonKey for this INotifier to use
     */
    initializeNotifier(key) {
        /**
         * The Multiton Key for this app
         *
         * @protected
         * */
        this.multitonKey = key;
    }

    /**
     *
     * @throws {Error}
     */
    get facade() {
        if (this.multitonKey == null) throw new Error(Notifier.MULTITON_MSG);
        return Facade.getInstance(this.multitonKey, key => new Facade(key));
    }

    /**
     * Message Constants
     *
     * @static
     * @returns {string}
     */
    static get MULTITON_MSG() { return "multitonKey for this Notifier not yet initialized!" }
}