class ViewTestMediator6 extends puremvc.Mediator {

    constructor(name, view) {
        super(name, view);
    }

    listNotificationInterests() {
        return [ViewTest.NOTE6];
    }

    handleNotification(notification) {
        this.facade.removeMediator(this.getMediatorName());
    }

    onRemove() {
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
     * The Mediator base name
     *
     * @static
     * @returns {string}
     */
    static get NAME() { return "ViewTestMediator6" }

}
