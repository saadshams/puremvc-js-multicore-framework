/**
 /**
 * A SimpleCommand subclass used by ControllerTest.
 *
 * @see ControllerTest
 * @see ControllerTestVO
 *
 * @class ControllerTestCommand
 */
class ControllerTestCommand extends puremvc.SimpleCommand {

    /**
     * Fabricate a result by multiplying the input by 2
     *
     * @param notification the note carrying the ControllerTestVO
     */
    execute(notification) {
        /** @type ControllerTestVO */
        let vo = notification.getBody();

        // Fabricate a result
        vo.setResult(2 * vo.getInput());
    }
}
