/**
 * @typedef {puremvc.INotification} INotification
 *
 * @class puremvc.Notification
 * @implements puremvc.INotification
 */
class Notification extends INotification {

    /**
     *
     * @constructor
     * @param {string} name
     * @param {Object} [body]
     * @param {string} [type]
     */
    constructor(name, body = null, type = "") {
        super();
        /** @private */
        this.name = name;
        /** @private */
        this.body = body;
        /** @private */
        this.type = type;
    }

    /**
     *
     * @returns {string}
     */
    getName() {
        return this.name;
    }

    /**
     *
     * @param {Object} body
     */
    setBody(body) {
        this.body = body;
    }

    /**
     *
     * @returns {*}
     */
    getBody() {
        return this.body;
    }

    /**
     *
     * @param {string} type
     */
    setType(type) {
        this.type = type;
    }

    /**
     *
     * @returns {string}
     */
    getType() {
        return this.type;
    }

    /**
     *
     * @returns {string}
     */
    toString() {
        let str= "Notification Name: " + this.name;
        str+= "\nBody:" + ((this.body == null ) ? "null" : this.body.toString());
        str+= "\nType:" + ((this.type == null ) ? "null" : this.type);
        return str;
    }

}