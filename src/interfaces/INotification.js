/**
 * The interface definition for a PureMVC Notification.
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
 * in Flex/Flash/AIR. Generally, <code>IMediator</code> implementors
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
 * @see puremvc.IView
 * @see puremvc.IObserver
 *
 * @interface puremvc.INotification
 */
function INotification() {}

/**
 * Get the name of the <code>INotification</code> instance.
 * No setter, should be set by constructor only
 *
 * @returns {string}
 */
INotification.prototype.getName = () => {
    throw new Error("Not Implemented");
};

/**
 * Get the body of the <code>INotification</code> instance
 *
 * @returns {Object}
 */
INotification.prototype.getBody = () => {
    throw new Error("Not Implemented");
};

/**
 * Set the body of the <code>INotification</code> instance
 *
 * @param {Object} body
 */
INotification.prototype.setBody = (body) => {
    throw new Error("Not Implemented");
};

/**
 * Get the type of the <code>INotification</code> instance
 *
 * @returns {string}
 */
INotification.prototype.getType = () => {
    throw new Error("Not Implemented");
};

/**
 * Set the type of the <code>INotification</code> instance
 *
 * @param {string} type
 */
INotification.prototype.setType = (type) => {
    throw new Error("Not Implemented");
};

/**
 * Get the string representation of the <code>INotification</code> instance
 *
 * @returns {string}
 */
INotification.prototype.toString = () => {
    throw new Error("Not Implemented");
};
