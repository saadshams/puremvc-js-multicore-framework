/**
 * The interface definition for a PureMVC Command.
 *
 * @interface puremvc.ICommand
 * @extends puremvc.INotifier
 */
function ICommand() {}

ICommand.prototype = new INotifier();
ICommand.prototype.constructor = IMediator;

/**
 *
 * @param {puremvc.INotification} notification
 */
ICommand.prototype.execute = notification => {
    throw new Error("Not Implemented");
};