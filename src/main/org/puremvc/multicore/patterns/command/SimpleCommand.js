import { Notifier } from "org/puremvc/multicore/patterns/observer/Notifier"
// import { ICommand } from "org/puremvc/multicore/interfaces/ICommand"
/**
 * A base <code>ICommand</code> implementation.
 *
 * <P>Your subclass should override the <code>execute</code>
 * method where your business logic will handle the <code>INotification</code>.</P>
 *
 * @see puremvc.Controller Controller
 * @see puremvc.Notification Notification
 * @see puremvc.MacroCommand MacroCommand
 *
 * @typedef {puremvc.SimpleCommand} SimpleCommand
 *
 * @class puremvc.SimpleCommand
 * @extends puremvc.Notifier
 * @implements puremvc.ICommand
 */
class SimpleCommand extends Notifier {

    /**
     * Fulfill the use-case initiated by the given <code>INotification</code>.
     *
     * <P>In the Command Pattern, an application use-case typically
     * begins with some user action, which results in an <code>INotification</code> being broadcast, which
     * is handled by business logic in the <code>execute</code> method of an
     * <code>ICommand</code>.</P>
     *
     * @param {puremvc.INotification} notification
     */
    execute(notification) {

    }
}

export { SimpleCommand }
