/**
 * A base <code>ICommand</code> implementation that executes other <code>ICommand</code>s.
 *
 * <P>A <code>MacroCommand</code> maintains an list of
 * <code>ICommand</code> Class references called <i>SubCommands</i>.</P>
 *
 * <P>When <code>execute</code> is called, the <code>MacroCommand</code>
 * instantiates and calls <code>execute</code> on each of its <i>SubCommands</i> turn.
 * Each <i>SubCommand</i> will be passed a reference to the original
 * <code>INotification</code> that was passed to the <code>MacroCommand</code>'s
 * <code>execute</code> method.</P>
 *
 * <P>Unlike <code>SimpleCommand</code>, your subclass
 * should not override <code>execute</code>, but instead, should
 * override the <code>initializeMacroCommand</code> method,
 * calling <code>addSubCommand</code> once for each <i>SubCommand</i>
 * to be executed.</P>
 *
 * @see puremvc.Controller Controller
 * @see puremvc.Notification Notification
 * @see puremvc.SimpleCommand SimpleCommand
 *
 * @typedef {puremvc.MacroCommand} MacroCommand
 *
 * @class puremvc.MacroCommand
 * @extends puremvc.Notifier
 * @implements puremvc.ICommand
 */
class MacroCommand extends Notifier {

    /**
     * Constructor.
     *
     * <P>You should not need to define a constructor,
     * instead, override the <code>initializeMacroCommand</code>
     * method.</P>
     *
     * <P>If your subclass does define a constructor, be
     * sure to call <code>super()</code>.</P>
     *
     * @constructor
     */
    constructor() {
        super();
        /** @protected {[function():puremvc.ICommand]} */
        this.subCommands = [];
        this.initializeMacroCommand();
    }

    /**
     * Initialize the <code>MacroCommand</code>.
     *
     * <P>In your subclass, override this method to
     * initialize the <code>MacroCommand</code>'s <i>SubCommand</i>
     * list with <code>ICommand</code> class references like
     * this:</P>
     *
     * <pre><code>
     *		// Initialize MyMacroCommand
     *		initializeMacroCommand() {
     *			this.addSubCommand(() => new app.FirstCommand());
     *			this.addSubCommand(() => new app.SecondCommand());
     *			this.addSubCommand(() => new app.ThirdCommand());
     *		}
     * </code></pre>
     *
     * <P>Note that <i>SubCommand</i>s may be any <code>ICommand</code> implementor,
     * <code>MacroCommand</code>s or <code>SimpleCommands</code> are both acceptable.
     */
    initializeMacroCommand() {

    }

    /**
     * Add a <i>SubCommand</i>.
     *
     * <P>The <i>SubCommands</i> will be called in First In/First Out (FIFO)
     * order.</P>
     *
     * @param {factory} factory
     * @param {function():puremvc.ICommand} factory
     */
    addSubCommand(factory) {
        this.subCommands.push(factory);
    }

    /**
     * Execute this <code>MacroCommand</code>'s <i>SubCommands</i>.
     *
     * <P>The <i>SubCommands</i> will be called in First In/First Out (FIFO)
     * order.</P>
     *
     * @param {puremvc.INotification} notification
     */
    execute(notification) {
        while(this.subCommands.length > 0) {
            let factory = this.subCommands.shift();
            let commandInstance = factory();
            commandInstance.initializeNotifier(this.multitonKey);
            commandInstance.execute(notification);
        }
    }

}
