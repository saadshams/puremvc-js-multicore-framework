// import { INotification } from "org/puremvc/multicore/interfaces/INotification"
/**
 *
 * A base <code>INotification</code> implementation.
 *
 * <P>PureMVC does not rely upon underlying event models such
 * as the one provided with Flash, and ActionScript 3 does
 * not have an inherent event model.</P>
 *
 * <P>The Observer Pattern as implemented within PureMVC exists
 * to support event-driven communication between the
 * application and the actors of the MVC triad.</P>
 *
 * <P>Notifications are not meant to be a replacement for Events
 * in Flex/Flash/Apollo. Generally, <code>IMediator</code> implementors
 * place event listeners on their view components, which they
 * then handle in the usual way. This may lead to the broadcast of <code>Notification</code>s to
 * trigger <code>ICommand</code>s or to communicate with other <code>IMediators</code>. <code>IProxy</code> and <code>ICommand</code>
 * instances communicate with each other and <code>IMediator</code>s
 * by broadcasting <code>INotification</code>s.</P>
 *
 * <P>A key difference between Flash <code>Event</code>s and PureMVC
 * <code>Notification</code>s is that <code>Event</code>s follow the
 * 'Chain of Responsibility' pattern, 'bubbling' up the display hierarchy
 * until some parent component handles the <code>Event</code>, while
 * PureMVC <code>Notification</code>s follow a 'Publish/Subscribe'
 * pattern. PureMVC classes need not be related to each other in a
 * parent/child relationship in order to communicate with one another
 * using <code>Notification</code>s.</P>
 *
 * @typedef {puremvc.INotification} INotification
 * @typedef {puremvc.Notification} Notification
 *
 * @class puremvc.Notification
 * @implements puremvc.INotification
 */
class Notification /*extends INotification*/ {

    /**
     * Constructor.
     *
     * @constructor
     * @param {string} name
     * @param {Object} [body] body
     * @param {string} [type] type
     */
    constructor(name, body = null, type = "") {
        // super();
        /** @private */
        this.name = name;
        /** @private */
        this.body = body;
        /** @private */
        this.type = type;
    }

    /**
     * Get the name of the <code>Notification</code> instance.
     *
     * @returns {string}
     */
    getName() {
        return this.name;
    }

    /**
     * Set the body of the <code>Notification</code> instance.
     *
     * @param {Object} body
     */
    setBody(body) {
        this.body = body;
    }

    /**
     * Get the body of the <code>Notification</code> instance.
     *
     * @returns {Object}
     */
    getBody() {
        return this.body;
    }

    /**
     * Set the type of the <code>Notification</code> instance.
     *
     * @param {string} type
     */
    setType(type) {
        this.type = type;
    }

    /**
     * Get the type of the <code>Notification</code> instance.
     *
     * @returns {string}
     */
    getType() {
        return this.type;
    }

    /**
     * Get the string representation of the <code>Notification</code> instance.
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

export { Notification }
