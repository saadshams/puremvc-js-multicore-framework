class ViewTestMediator3 extends puremvc.Mediator {

    /**
     * @constructor
     * @param {object} view
     */
    constructor(view) {
        super(ViewTestMediator3.NAME, view);
    }

    listNotificationInterests() {
        // be sure that the mediator has some Observers created
        // in order to test removeMediator
        return [ViewTest.NOTE3];
    }

    /**
     * @override
     * @param notification
     */
    handleNotification(notification) {
        this.getViewComponent().lastNotification = notification.getName();
    }

    /**
     * The Mediator name
     * @returns {string}
     */
    static get NAME() { return "ViewTestMediator3" }

}
