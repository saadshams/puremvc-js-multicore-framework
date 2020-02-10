/**
 * @class MacroCommandTestSub2Command
 * @extends puremvc.SimpleCommand
 * @implements ICommand
 */
class MacroCommandTestSub2Command extends puremvc.SimpleCommand {

    /**
     * Fabricate a result by multiplying the input by itself
     *
     * @param {puremvc.INotification} notification
     */
    execute(notification) {
        /** @type MacroCommandTestVO */
        let vo = notification.body;

        // Fabricate a result
        vo.result2 = vo.input * vo.input;
    }
}