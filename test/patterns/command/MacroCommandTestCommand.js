/**
 * @class MacroCommandTestCommand
 * @extends puremvc.MacroCommand
 */
class MacroCommandTestCommand extends puremvc.MacroCommand {

    initializeMacroCommand() {
        this.addSubCommand(() => new MacroCommandTestSub1Command());
        this.addSubCommand(() => new MacroCommandTestSub2Command());
    }

}