/**
 * A Multiton <code>IController</code> implementation.
 *
 * <P>In PureMVC, the <code>Controller</code> class follows the
 * 'Command and Controller' strategy, and assumes these
 * responsibilities:</P>
 *
 * <UL>
 * <LI> Remembering which <code>ICommand</code>s
 * are intended to handle which <code>INotifications</code>.</LI>
 * <LI> Registering itself as an <code>IObserver</code> with
 * the <code>View</code> for each <code>INotification</code>
 * that it has an <code>ICommand</code> mapping for.</LI>
 * <LI> Creating a new instance of the proper <code>ICommand</code>
 * to handle a given <code>INotification</code> when notified by the <code>View</code>.</LI>
 * <LI> Calling the <code>ICommand</code>'s <code>execute</code>
 * method, passing in the <code>INotification</code>.</LI>
 * </UL>
 *
 * <P>Your application must register <code>ICommands</code> with the
 * Controller.</P>
 *
 * <P>The simplest way is to subclass </code>Facade</code>,
 * and use its <code>initializeController</code> method to add your
 * registrations.</P>
 *
 * @see puremvc.View View
 * @see puremvc.Observer Observer
 * @see puremvc.Notification Notification
 * @see puremvc.SimpleCommand SimpleCommand
 * @see puremvc.MacroCommand MacroCommand
 *
 * @class puremvc.Controller
 * @implements puremvc.IController
 */
class Controller {

    /**
     * Constructor.
     *
     * <P>This <code>IController</code> implementation is a Multiton,
     * so you should not call the constructor
     * directly, but instead call the static Factory method,
     * passing the unique key for this instance
     * <code>Controller.getInstance( multitonKey )</code></P>
     *
     * @throws {Error} Error if instance for this Multiton key has already been constructed
     *
     * @constructor
     * @param {string} key
     */
    constructor(key) {
        if (Controller.instanceMap[key] != null) throw new Error(Controller.MULTITON_MSG);
        /** @protected {string} */
        this.multitonKey = key;
        Controller.instanceMap.set(this.multitonKey, this);
        /** @protected {Map<string, function():puremvc.ICommand>} */
        this.commandMap = new Map();
        this.initializeController();
    }

    /**
     * Initialize the Multiton <code>Controller</code> instance.
     *
     * <P>Called automatically by the constructor.</P>
     *
     * <P>Note that if you are using a subclass of <code>View</code>
     * in your application, you should <i>also</i> subclass <code>Controller</code>
     * and override the <code>initializeController</code> method in the
     * following way:</P>
     *
     * <pre><code>
     *		// ensure that the Controller is talking to my IView implementation
     *		initializeController( )
     *		{
     *			this.view = MyView.getInstance(this.multitonKey, (key) => new MyView(key));
     *		}
     * </code></pre>
     *
     */
    initializeController() {
        /** @protected **/
        this.view = View.getInstance(this.multitonKey, (key) => new View(key));
    }

    /**
     * <code>Controller</code> Multiton Factory method.
     *
     * @static
     * @param {string} key
     * @param {factory} factory
     * @param {function(string):puremvc.IController} factory
     * @returns {puremvc.IController} the Multiton instance of <code>Controller</code>
     */
    static getInstance(key, factory) {
        if (this.instanceMap.get(key) == null) this.instanceMap.set(key, factory(key));
        return this.instanceMap.get(key);
    }

    /**
     * <P>If an <code>ICommand</code> has previously been registered
     * to handle a the given <code>INotification</code>, then it is executed.</P>
     *
     * @param {puremvc.INotification} notification an <code>INotification</code>
     */
    executeCommand(notification) {
        let factory = this.commandMap.get(notification.name);
        if (factory == null) return;

        let commandInstance = factory();
        commandInstance.initializeNotifier(this.multitonKey);
        commandInstance.execute(notification);
    }

    /**
     * <P>Register a particular <code>ICommand</code> class as the handler
     * for a particular <code>INotification</code>.</P>
     *
     * <P>If an <code>ICommand</code> has already been registered to
     * handle <code>INotification</code>s with this name, it is no longer
     * used, the new <code>ICommand</code> is used instead.</P>
     *
     * <P>The Observer for the new ICommand is only created if this the
     * first time an ICommand has been regisered for this Notification name.</P>
     *
     * @param notificationName the name of the <code>INotification</code>
     * @param {factory} factory the <code>Class</code> of the <code>ICommand</code>
     * @param {function():puremvc.ICommand} factory
     */
    registerCommand(notificationName, factory) {
        if (this.commandMap.get(notificationName) == null) {
            this.view.registerObserver(notificationName, new Observer(this.executeCommand, this));
        }
        this.commandMap.set(notificationName, factory);
    }

    /**
     * Check if a Command is registered for a given Notification
     *
     * @param {string} notificationName
     * @return {boolean} whether a Command is currently registered for the given <code>notificationName</code>.
     */
    hasCommand(notificationName) {
        return this.commandMap.has(notificationName);
    }

    /**
     * Remove a previously registered <code>ICommand</code> to <code>INotification</code> mapping.
     *
     * @param {string} notificationName the name of the <code>INotification</code> to remove the <code>ICommand</code> mapping for
     */
    removeCommand(notificationName) {
        // if the Command is registered...
        if(this.hasCommand(notificationName)) {
            // remove the observer
            this.view.removeObserver(notificationName, this);

            // remove the command
            this.commandMap.delete(notificationName)
        }
    }

    /**
     * Remove an IController instance
     *
     * @static
     * @param {string} key of IController instance to remove
     */
    static removeController(key) {
        Controller.instanceMap.delete(key);
    }

    /**
     * Multiton instance
     *
     * @static
     * @type {Map<string, puremvc.IController>}
     */
    static instanceMap = new Map();

    /**
     * Message Constants
     *
     * @static
     * @type {string}
     */
    static get MULTITON_MSG() { return "Controller instance for this Multiton key already constructed!" };

}
