/**
 * A MacroCommand subclass used by MacroCommandTest.
 *
 * @see MacroCommandTest
 * @see MacroCommandTestSub1Command
 * @see MacroCommandTestSub2Command
 * @see MacroCommandTestVO
 *
 * @class MacroCommandTestCommand
 * @extends puremvc.MacroCommand
 */
class MacroCommandTestCommand extends puremvc.MacroCommand {

    /**
     * Initialize the MacroCommandTestCommand by adding
     * its 2 SubCommands.
     */
    initializeMacroCommand() {
        this.addSubCommand(() => new MacroCommandTestSub1Command());
        this.addSubCommand(() => new MacroCommandTestSub2Command());
    }

}
