/**
 * A SimpleCommand subclass used by MacroCommandTestCommand.
 *
 * @see MacroCommandTest
 * @see MacroCommandTestCommand
 * @see MacroCommandTestVO
 *
 * @class MacroCommandTestSub1Command
 * @extends puremvc.SimpleCommand
 * @implements ICommand
 */
class MacroCommandTestSub1Command extends puremvc.SimpleCommand {

    /**
     * Fabricate a result by multiplying the input by 2
     *
     * @param {puremvc.INotification} notification event the <code>IEvent</code> carrying the <code>MacroCommandTestVO</code>
     */
    execute(notification) {
        /** @type MacroCommandTestVO */
        let vo = notification.body;

        // Fabricate a result
        vo.result1 = 2 * vo.input;
    }
}
