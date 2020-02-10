/**
 * @class ControllerTestCommand
 */
class ControllerTestCommand extends puremvc.SimpleCommand {

    execute(notification) {
        /** @type ControllerTestVO */
        let vo = notification.getBody();

        // Fabricate a result
        vo.setResult(2 * vo.getInput());
    }
}