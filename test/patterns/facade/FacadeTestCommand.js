/**
 * A SimpleCommand subclass used by FacadeTest.
 *
 * @see FacadeTest
 * @see FacadeTestVO
 *
 * @class FacadeTestCommand
 * @extends puremvc.SimpleCommand
 */
class FacadeTestCommand extends puremvc.SimpleCommand {

    /**
     * Fabricate a result by multiplying the input by 2
     *
     * @param {puremvc.INotification} notification the Notification carrying the FacadeTestVO
     */
    execute(notification) {
        /** @type FacadeTestVO */
        let vo = notification.getBody();

        // Fabricate a result
        vo.result = 2 * vo.input;
    }

}
