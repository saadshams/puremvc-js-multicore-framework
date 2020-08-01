/**
 * A SimpleCommand subclass used by ControllerTest.
 *
 * @see ControllerTest
 * @see ControllerTestVO
 *
 * @class ControllerTestCommand2
 */
class ControllerTestCommand2 extends puremvc.SimpleCommand {

    /**
     * Fabricate a result by multiplying the input by 2 and adding to the existing result
     *
     * @param {puremvc.INotification} notification
     */
    execute(notification) {
        /** @type ControllerTestVO */
        let vo = notification.getBody();

        // Fabricate a result
        vo.setResult(vo.getResult() + (2 * vo.getInput()));
    }

}
