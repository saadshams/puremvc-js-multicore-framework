/**
 * A base <code>IMediator</code> implementation.
 *
 * @see puremvc.View View
 *
 * @typedef {puremvc.Mediator} Mediator
 * @typedef {puremvc.Notifier} Notifier
 *
 * @class puremvc.Mediator
 * @extends puremvc.Notifier
 * @implements puremvc.IMediator
 */
class Mediator extends Notifier {

    /**
     * Constructor.
     *
     * @constructor
     * @param {string} mediatorName
     * @param {Object} [viewComponent] viewComponent
     */
    constructor(mediatorName, viewComponent = null) {
        super();
        /** @private */
        this.mediatorName = mediatorName || Mediator.NAME;
        /** @private */
        this.viewComponent = viewComponent;
    }

    /**
     * Called by the View when the Mediator is registered
     */
    onRegister() {

    }

    /**
     * Called by the View when the Mediator is removed
     */
    onRemove() {

    }

    /**
     * List the <code>INotification</code> names this
     * <code>Mediator</code> is interested in being notified of.
     *
     * @returns {[string]}
     */
    listNotificationInterests() {
        return [];
    }

    /**
     * Handle <code>INotification</code>s.
     *
     * <P>
     * Typically this will be handled in a switch statement,
     * with one 'case' entry per <code>INotification</code>
     * the <code>Mediator</code> is interested in.
     *
     * @param {puremvc.INotification} notification
     */
    handleNotification(notification) {

    }

    /**
     * the mediator name
     *
     * @returns {string}
     */
    getMediatorName() {
        return this.mediatorName;
    }

    /**
     * Get the <code>Mediator</code>'s view component.
     *
     * <P>
     * Additionally, an implicit getter will usually
     * be defined in the subclass that casts the view
     * object to a type, like this:</P>
     *
     * @returns {Object}
     */
    getViewComponent() {
        return this.viewComponent;
    }

    /**
     * Set the <code>IMediator</code>'s view component.
     *
     * @param {Object} viewComponent
     */
    setViewComponent(viewComponent) {
        this.viewComponent = viewComponent;
    }

    /**
     * The name of the <code>Mediator</code>.
     *
     * <P>Typically, a <code>Mediator</code> will be written to serve
     * one specific control or group controls and so,
     * will not have a need to be dynamically named.</P>
     *
     * @static
     * @returns {string}
     */
    static get NAME() { return "Mediator" }
}
