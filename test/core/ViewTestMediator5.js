/**
 * @class ViewTestMediator5
 * @extends Mediator
 */
class ViewTestMediator5 extends puremvc.Mediator {

    /**
     *
     * @param {Object} view
     */
    constructor(view) {
        super(ViewTestMediator5.NAME, view);
    }

    /**
     * @override
     * @returns {[string]}
     */
    listNotificationInterests() {
        return [ViewTest.NOTE5];
    }

    /**
     * @override
     * @param {puremvc.INotification} notification
     */
    handleNotification(notification) {
        this.viewTest.counter++;
    }

    /**
     *
     * @returns {ViewTest}
     */
    get viewTest() {
        return this.getViewComponent();
    }

    /**
     *
     * @static
     * @returns {string}
     */
    static get NAME() { return "ViewTestMediator5" }

}
