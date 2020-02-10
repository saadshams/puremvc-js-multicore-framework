/**
 * @class puremvc.Mediator
 * @extends puremvc.Notifier
 * @implements puremvc.IMediator
 */
class Mediator extends Notifier {

    /**
     *
     * @constructor
     * @param {string} mediatorName
     * @param {*} [viewComponent]
     */
    constructor(mediatorName, viewComponent) {
        super();
        /** @private */
        this.mediatorName = mediatorName || Mediator.NAME;
        /** @private */
        this.viewComponent = viewComponent;
    }

    /**
     *
     * @return {void}
     */
    onRegister() {

    }

    /**
     *
     * @return {void}
     */
    onRemove() {

    }

    /**
     *
     * @returns {[string]}
     */
    listNotificationInterests() {
        return [];
    }

    /**
     *
     * @param {puremvc.INotification} notification
     * @return {void}
     */
    handleNotification(notification) {

    }

    /**
     *
     * @returns {string}
     */
    getMediatorName() {
        return this.mediatorName;
    }

    /**
     *
     * @returns {*}
     */
    getViewComponent() {
        return this.viewComponent;
    }

    /**
     *
     * @param {*} viewComponent
     * @return {void}
     */
    setViewComponent(viewComponent) {
        this.viewComponent = viewComponent;
    }

    /**
     *
     * @static
     * @returns {string}
     */
    static get NAME() { return "Mediator" }
}