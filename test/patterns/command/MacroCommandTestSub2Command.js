/**
 * A SimpleCommand subclass used by MacroCommandTestCommand.
 *
 * @see MacroCommandTest
 * @see MacroCommandTestCommand
 * @see MacroCommandTestVO
 *
 * @class MacroCommandTestSub2Command
 * @extends puremvc.SimpleCommand
 * @implements ICommand
 */
class MacroCommandTestSub2Command extends puremvc.SimpleCommand {

    /**
     * Fabricate a result by multiplying the input by itself
     *
     * @param {puremvc.INotification} notification event the <code>IEvent</code> carrying the <code>MacroCommandTestVO</code>
     */
    execute(notification) {
        /** @type MacroCommandTestVO */
        let vo = notification.body;

        // Fabricate a result
        vo.result2 = vo.input * vo.input;
    }
}
