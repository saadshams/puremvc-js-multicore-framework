// import { IFacade } from "org/puremvc/multicore/interfaces/IFacade"
/**
 * A base Multiton <code>IFacade</code> implementation.
 *
 * @see puremvc.Model Model
 * @see puremvc.View View
 * @see puremvc.Controller Controller
 *
 * @typedef {puremvc.Facade} Facade
 *
 * @class puremvc.Facade
 * @implements puremvc.IFacade
 */
class Facade {

    /**
     * Constructor.
     *
     * <P>This <code>IFacade</code> implementation is a Multiton,
     * so you should not call the constructor
     * directly, but instead call the static Factory method,
     * passing the unique key for this instance
     * <code>Facade.getInstance( multitonKey )</code></P>
     *
     * @constructor
     * @param {string} key
     * @throws {Error} Error if instance for this Multiton key has already been constructed
     */
    constructor(key) {
        if (Facade.instanceMap[key] != null) throw new Error(Facade.MULTITON_MSG);
        this.initializeNotifier(key);
        Facade.instanceMap.set(this.multitonKey, this);
        this.initializeFacade();
    }

    /**
     * Initialize the Multiton <code>Facade</code> instance.
     *
     * <P>Called automatically by the constructor. Override in your
     * subclass to do any subclass specific initializations. Be
     * sure to call <code>super.initializeFacade()</code>, though.</P>
     */
    initializeFacade() {
        this.initializeModel();
        this.initializeController();
        this.initializeView();
    }

    /**
     * Facade Multiton Factory method
     *
     * @static
     * @param {string} key
     * @param {factory} factory
     * @param {function(string):puremvc.IFacade} factory
     * @returns {puremvc.IFacade} the Multiton instance of the Facade
     */
    static getInstance(key, factory) {
        if (this.instanceMap.get(key) == null) this.instanceMap.set(key, factory(key));
        return this.instanceMap.get(key);
    }

    /**
     * Initialize the <code>Model</code>.
     *
     * <P>Called by the <code>initializeFacade</code> method.
     * Override this method in your subclass of <code>Facade</code>
     * if one or both of the following are true:</P>
     *
     * <UL>
     * <LI> You wish to initialize a different <code>IModel</code>.</LI>
     * <LI> You have <code>Proxy</code>s to register with the Model that do not
     * retrieve a reference to the Facade at construction time.</code></LI>
     * </UL>
     *
     * If you don't want to initialize a different <code>IModel</code>,
     * call <code>super.initializeModel()</code> at the beginning of your
     * method, then register <code>Proxy</code>s.
     *
     * <P>Note: This method is <i>rarely</i> overridden; in practice you are more
     * likely to use a <code>Command</code> to create and register <code>Proxy</code>s
     * with the <code>Model</code>, since <code>Proxy</code>s with mutable data will likely
     * need to send <code>INotification</code>s and thus will likely want to fetch a reference to
     * the <code>Facade</code> during their construction.</P>
     */
    initializeModel() {
        if (this.model != null) return;
        this.model = Model.getInstance(this.multitonKey, key => new Model(key));
    }

    /**
     * Initialize the <code>Controller</code>.
     *
     * <P>Called by the <code>initializeFacade</code> method.
     * Override this method in your subclass of <code>Facade</code>
     * if one or both of the following are true:</P>
     *
     * <UL>
     * <LI> You wish to initialize a different <code>IController</code>.</LI>
     * <LI> You have <code>Commands</code> to register with the <code>Controller</code> at startup.</code>. </LI>
     * </UL>
     *
     * <P>If you don't want to initialize a different <code>IController</code>,
     * call <code>super.initializeController()</code> at the beginning of your
     * method, then register <code>Command</code>s.</P>
     */
    initializeController() {
        if (this.controller != null) return;
        this.controller = Controller.getInstance(this.multitonKey, key => new Controller(key));
    }

    /**
     * Initialize the <code>View</code>.
     *
     * <P>Called by the <code>initializeFacade</code> method.
     * Override this method in your subclass of <code>Facade</code>
     * if one or both of the following are true:</P>
     *
     * <UL>
     * <LI> You wish to initialize a different <code>IView</code>.</LI>
     * <LI> You have <code>Observers</code> to register with the <code>View</code></LI>
     * </UL>
     *
     * <P>If you don't want to initialize a different <code>IView</code>,
     * call <code>super.initializeView()</code> at the beginning of your
     * method, then register <code>IMediator</code> instances.</P>
     *
     * <P>Note: This method is <i>rarely</i> overridden; in practice you are more
     * likely to use a <code>Command</code> to create and register <code>Mediator</code>s
     * with the <code>View</code>, since <code>IMediator</code> instances will need to send
     * <code>INotification</code>s and thus will likely want to fetch a reference
     * to the <code>Facade</code> during their construction.</P>
     */
    initializeView() {
        if (this.view != null) return;
        this.view = View.getInstance(this.multitonKey, key => new View(key));
    }

    /**
     * Register an <code>ICommand</code> with the <code>Controller</code> by Notification name.
     *
     * @param {string} notificationName the name of the <code>INotification</code> to associate the <code>ICommand</code> with
     * @param {factory} factory
     * @param {function():puremvc.ICommand} factory a reference to the factory of the <code>ICommand</code>
     */
    registerCommand(notificationName, factory) {
        this.controller.registerCommand(notificationName, factory);
    }

    /**
     * Check if a Command is registered for a given Notification
     *
     * @param {string} notificationName
     * @returns {boolean} whether a Command is currently registered for the given <code>notificationName</code>.
     */
    hasCommand(notificationName) {
        return this.controller.hasCommand(notificationName);
    }

    /**
     * Remove a previously registered <code>ICommand</code> to <code>INotification</code> mapping from the Controller.
     *
     * @param {string} notificationName the name of the <code>INotification</code> to remove the <code>ICommand</code> mapping for
     */
    removeCommand(notificationName) {
        this.controller.removeCommand(notificationName);
    }

    /**
     * Register an <code>IProxy</code> with the <code>Model</code> by name.
     *
     * @param {string} proxyName the name of the <code>IProxy</code>.
     * @param {puremvc.IProxy} proxy the <code>IProxy</code> instance to be registered with the <code>Model</code>.
     */
    registerProxy(proxy) {
        this.model.registerProxy(proxy);
    }

    /**
     * Remove an <code>IProxy</code> from the <code>Model</code> by name.
     *
     * @param {string} proxyName the <code>IProxy</code> to remove from the <code>Model</code>.
     * @returns {puremvc.IProxy} the <code>IProxy</code> that was removed from the <code>Model</code>
     */
    removeProxy(proxyName) {
        return this.model.removeProxy(proxyName);
    }

    /**
     * Check if a Proxy is registered
     *
     * @param {string} proxyName
     * @returns {boolean} whether a Proxy is currently registered with the given <code>proxyName</code>.
     */
    hasProxy(proxyName) {
        return this.model.hasProxy(proxyName);
    }

    /**
     * Retrieve an <code>IProxy</code> from the <code>Model</code> by name.
     *
     * @param {string} proxyName the name of the proxy to be retrieved.
     * @returns {puremvc.IProxy} the <code>IProxy</code> instance previously registered with the given <code>proxyName</code>.
     */
    retrieveProxy(proxyName) {
        return this.model.retrieveProxy(proxyName);
    }

    /**
     * Register a <code>IMediator</code> with the <code>View</code>.
     *
     * @param {puremvc.IMediator} mediator a reference to the <code>IMediator</code>
     */
    registerMediator(mediator) {
        this.view.registerMediator(mediator);
    }

    /**
     * Remove an <code>IMediator</code> from the <code>View</code>.
     *
     * @param {string} mediatorName name of the <code>IMediator</code> to be removed.
     * @returns {puremvc.IMediator} the <code>IMediator</code> that was removed from the <code>View</code>
     */
    removeMediator(mediatorName) {
        return this.view.removeMediator(mediatorName);
    }

    /**
     * Check if a Mediator is registered or not
     *
     * @param {string} mediatorName
     * @returns {puremvc.IMediator} whether a Mediator is registered with the given <code>mediatorName</code>.
     */
    hasMediator(mediatorName) {
        return this.view.hasMediator(mediatorName);
    }

    /**
     * Retrieve an <code>IMediator</code> from the <code>View</code>.
     *
     * @param {string} mediatorName
     * @returns {puremvc.IMediator} the <code>IMediator</code> previously registered with the given <code>mediatorName</code>.
     */
    retrieveMediator(mediatorName) {
        return this.view.retrieveMediator(mediatorName);
    }

    /**
     * Create and send an <code>INotification</code>.
     *
     * <P>Keeps us from having to construct new notification
     * instances in our implementation code.</P>
     *
     * @param {string} notificationName the name of the notiification to send
     * @param {Object} [body] body the body of the notification (optional)
     * @param {string} [type] type the type of the notification (optional)
     */
    sendNotification(notificationName, body = null, type = "") {
        this.notifyObservers(new Notification(notificationName, body, type));
    }

    /**
     * Notify <code>Observer</code>s.
     *
     * <P>This method is left public mostly for backward
     * compatibility, and to allow you to send custom
     * notification classes using the facade.</P>
     *
     * <P>Usually you should just call sendNotification
     * and pass the parameters, never having to
     * construct the notification yourself.</P>
     *
     * @param {puremvc.INotification} notification the <code>INotification</code> to have the <code>View</code> notify <code>Observers</code> of.
     */
    notifyObservers(notification) {
        this.view.notifyObservers(notification);
    }

    /**
     * Set the Multiton key for this facade instance.
     *
     * <P>Not called directly, but instead from the
     * constructor when getInstance is invoked.
     * It is necessary to be public in order to
     * implement INotifier.</P>
     */
    initializeNotifier(key) {
        this.multitonKey = key;
    }

    /**
     * Check if a Core is registered or not
     *
     * @static
     * @param {string} key the multiton key for the Core in question
     * @returns {boolean} whether a Core is registered with the given <code>key</code>.
     */
    static hasCore(key) {
        return this.instanceMap.has(key);
    }

    /**
     * Remove a Core.
     *
     * <P>Remove the Model, View, Controller and Facade
     * instances for the given key.</P>
     *
     * @typedef {puremvc.IModel} Model
     * @typedef {puremvc.IView} View
     * @typedef {puremvc.IController} Controller
     *
     * @static
     * @param {string} key multitonKey of the Core to remove
     */
    static removeCore(key) {
        if (Facade.instanceMap.get(key) == null) return;
        Model.removeModel(key);
        View.removeView(key);
        Controller.removeController(key);
        this.instanceMap.delete(key);
    }

    /**
     * The Multiton Facade instanceMap.
     *
     * @static
     * @type {Map<string, puremvc.IFacade>}
     */
    // static instanceMap = new Map();
    static get instanceMap () {
      Reflect.defineProperty(this, `instanceMap`, {value: new Map()})
      return this.instanceMap
    }

    /**
     * Message Constants
     *
     * @static
     * @returns {string}
     */
    static get MULTITON_MSG() {return "Facade instance for this Multiton key already constructed!"};
}

export { Facade }
