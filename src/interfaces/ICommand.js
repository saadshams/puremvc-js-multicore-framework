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
 * Execute the <code>ICommand</code>'s logic to handle a given <code>INotification</code>.
 *
 * @param {puremvc.INotification} notification an <code>INotification</code> to handle.
 */
ICommand.prototype.execute = (notification) => {
    throw new Error("Not Implemented");
};
