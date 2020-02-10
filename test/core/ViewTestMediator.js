/**
 * A Mediator class used by ViewTest.
 *
 * @class ViewTestMediator
 * @extends puremvc.Mediator
 * @implements puremvc.IMediator
 */
class ViewTestMediator extends puremvc.Mediator {

    /**
     * @param {puremvc.View} view
     */
    constructor(view) {
        super(ViewTestMediator.NAME, view)
    }

    listNotificationInterests() {
        // be sure that the mediator has some Observers created
        // in order to test removeMediator
        return ["ABC", "DEF", "GHI"];
    }

    /**
     * The Mediator name
     */
    static get NAME() { return "ViewTestMediator" }
}