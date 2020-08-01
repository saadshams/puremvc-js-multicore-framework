/**
 * A SimpleCommand subclass used by SimpleCommandTest.
 *
 * @class SimpleCommandTestCommand
 * @extends puremvc.SimpleCommand
 */
class SimpleCommandTestCommand extends puremvc.SimpleCommand {

    /**
     * Fabricate a result by multiplying the input by 2
     *
     * @param {puremvc.INotification} notification event the <code>INotification</code> carrying the <code>SimpleCommandTestVO</code>
     */
    execute(notification) {
        /** @type {SimpleCommandTestVO} */
        let vo = notification.body;

        // Fabricate a result
        vo.setResult(2 * vo.input);
    }

}
