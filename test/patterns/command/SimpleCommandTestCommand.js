/**
 * @class SimpleCommandTestCommand
 * @extends puremvc.SimpleCommand
 */
class SimpleCommandTestCommand extends puremvc.SimpleCommand {

    execute(notification) {
        /** @type {SimpleCommandTestVO} */
        let vo = notification.body;

        // Fabricate a result
        vo.setResult(2 * vo.input);
    }

}