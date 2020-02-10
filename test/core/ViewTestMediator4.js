class ViewTestMediator4 extends puremvc.Mediator {

    /**
     * Constructor
     * @param {Object} view
     */
    constructor(view) {
        super(ViewTestMediator4.NAME, view);
    }

    /**
     * @override
     */
    onRegister() {
        this.viewTest.onRegisterCalled = true;
    }

    /**
     * @override
     */
    onRemove() {
        this.viewTest.onRemoveCalled = true;
    }

    /**
     *
     * @returns {ViewTest}
     */
    get viewTest() {
        return this.getViewComponent();
    }

    static get NAME() { return "ViewTestMediator4" }

}