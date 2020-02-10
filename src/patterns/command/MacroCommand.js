/**
 * @class puremvc.MacroCommand
 * @extends puremvc.Notifier
 * @implements puremvc.ICommand
 */
class MacroCommand extends Notifier {

    /**
     * @constructor
     */
    constructor() {
        super();
        /** @protected {[function():puremvc.ICommand]} */
        this.subCommands = [];
        this.initializeMacroCommand();
    }

    initializeMacroCommand() {

    }

    /**
     *
     * @param {function():puremvc.ICommand} commandFunction
     */
    addSubCommand(commandFunction) {
        this.subCommands.push(commandFunction);
    }

    /**
     *
     * @param {puremvc.INotification} notification
     */
    execute(notification) {
        while(this.subCommands.length > 0) {
            let commandFunc = this.subCommands.shift();
            let command = commandFunc();
            command.initializeNotifier(this.multitonKey);
            command.execute(notification);
        }
    }

}