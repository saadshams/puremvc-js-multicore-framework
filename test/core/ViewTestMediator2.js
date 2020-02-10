/**
 * @class ViewTestMediator2
 * @extends Mediator
 */
class ViewTestMediator2 extends puremvc.Mediator {

    /**
     * Constructor
     *
     * @constructor
     * @param view
     */
    constructor(view) {
        super(ViewTestMediator2.NAME, view);
    }

    /**
     * @override
     * @returns {[string]}
     */
    listNotificationInterests() {
        return [ViewTest.NOTE1, ViewTest.NOTE2];
    }

    /**
     * @override
     * @param notification
     */
    handleNotification(notification) {
        this.getViewComponent().lastNotification = notification.getName();
    }

    /**
     *
     * @returns {string}
     * @static
     */
    static get NAME() { return "ViewTestMediator2" }
}