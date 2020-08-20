// import { IView } from "org/puremvc/multicore/interfaces/IView"
/**
 * A Multiton <code>IView</code> implementation.
 *
 * <P>In PureMVC, the <code>View</code> class assumes these responsibilities:</P>
 *
 * <UL>
 * <LI>Maintain a cache of <code>IMediator</code> instances.</LI>
 * <LI>Provide methods for registering, retrieving, and removing <code>IMediators</code>.</LI>
 * <LI>Notifiying <code>IMediators</code> when they are registered or removed.</LI>
 * <LI>Managing the observer lists for each <code>INotification</code> in the application.</LI>
 * <LI>Providing a method for attaching <code>IObservers</code> to an <code>INotification</code>'s observer list.</LI>
 * <LI>Providing a method for broadcasting an <code>INotification</code>.</LI>
 * <LI>Notifying the <code>IObservers</code> of a given <code>INotification</code> when it broadcast.</LI>
 * </UL>
 *
 * @see puremvc.Mediator Mediator
 * @see puremvc.Observer Observer
 * @see puremvc.Notification Notification
 *
 * @class puremvc.View
 * @implements puremvc.IView
 */
class View {

    /**
     * Constructor.
     *
     * <P>This <code>IView</code> implementation is a Multiton,
     * so you should not call the constructor
     * directly, but instead call the static Multiton
     * Factory method <code>View.getInstance( multitonKey )</code>
     *
     * @constructor
     * @param {string} key
     *
     * @throws {Error} Error if instance for this Multiton key has already been constructed
     */
    constructor(key) {
        if (View.instanceMap.get(key) != null) throw new Error(View.MULTITON_MSG);
        // /** @protected {string} */
        /**
         * [multitonKey description]
         * @protected
         * @type {string}
         */
        this.multitonKey = key;
        View.instanceMap.set(this.multitonKey, this);
        // /** @protected {Map<string, puremvc.IMediator>} */
        /**
         * [mediatorMap description]
         * @protected
         * @type {Map<string, IMediator>}
         */
        this.mediatorMap = new Map();
        // /** @protected {Map<string, [puremvc.IObserver]>} */
        /**
         * [observerMap description]
         * @protected
         * @type {Map<string, puremvc.IObserver>}
         */
        this.observerMap = new Map();
        this.initializeView();
    }

    /**
     * <P>Initialize the Multiton View instance.</P>
     *
     * <P>Called automatically by the constructor, this
     * is your opportunity to initialize the Multiton
     * instance in your subclass without overriding the
     * constructor.</P>
     */
    initializeView() {

    }

    /**
     * View Multiton factory method.
     *
     * @static
     * @param {string} key
     * @param {factory} factory
     * @param {function(string):puremvc.IView} factory
     * @returns {puremvc.IView} the Multiton instance of <code>View</code>
     */
    static getInstance(key, factory) {
        if (this.instanceMap.get(key) == null) this.instanceMap.set(key, factory(key));
        return this.instanceMap.get(key);
    }

    /**
     * <P>Register an <code>IObserver</code> to be notified
     * of <code>INotifications</code> with a given name.</P>
     *
     * @param {string} notificationName the name of the <code>INotifications</code> to notify this <code>IObserver</code> of
     * @param {puremvc.IObserver} observer the <code>IObserver</code> to register
     */
    registerObserver(notificationName, observer) {
        if (this.observerMap.get(notificationName) != null) {
            let observers = this.observerMap.get(notificationName);
            observers.push(observer);
        } else {
            this.observerMap.set(notificationName, new Array(observer));
        }
    }

    /**
     * <P>Notify the <code>IObservers</code> for a particular <code>INotification</code>.</P>
     *
     * <P>All previously attached <code>IObservers</code> for this <code>INotification</code>'s
     * list are notified and are passed a reference to the <code>INotification</code> in
     * the order in which they were registered.</P>
     *
     * @param {puremvc.INotification} notification the <code>INotification</code> to notify <code>IObservers</code> of.
     */
    notifyObservers(notification) {
        if (this.observerMap.has(notification.name)) {
            // Copy observers from reference array to working array,
            // since the reference array may change during the notification loop
            let observers = this.observerMap.get(notification.name).slice();

            // Notify Observers from the working array
            for(let i = 0; i < observers.length; i++) {
                observers[i].notifyObserver(notification);
            }
        }
    }

    /**
     * <P>Remove the observer for a given notifyContext from an observer list for a given Notification name.</P>
     *
     * @param {string} notificationName which observer list to remove from
     * @param {Object} notifyContext remove the observer with this object as its notifyContext
     */
    removeObserver(notificationName, notifyContext) {
        // the observer list for the notification under inspection
        let observers = this.observerMap.get(notificationName);

        // find the observer for the notifyContext
        for (let i = 0; i < observers.length; i++) {
            if (observers[i].compareNotifyContext(notifyContext) == true) {
                // there can only be one Observer for a given notifyContext
                // in any given Observer list, so remove it and break
                observers.splice(i, 1);
                break;
            }
        }

        // Also, when a Notification's Observer list length falls to
        // zero, delete the notification key from the observer map
        if (observers.length == 0) {
            this.observerMap.delete(notificationName);
        }
    }

    /**
     * Register an <code>IMediator</code> instance with the <code>View</code>.
     *
     * <P>Registers the <code>IMediator</code> so that it can be retrieved by name,
     * and further interrogates the <code>IMediator</code> for its
     * <code>INotification</code> interests.</P>
     *
     * <P>If the <code>IMediator</code> returns any <code>INotification</code>
     * names to be notified about, an <code>Observer</code> is created encapsulating
     * the <code>IMediator</code> instance's <code>handleNotification</code> method
     * and registering it as an <code>Observer</code> for all <code>INotifications</code> the
     * <code>IMediator</code> is interested in.</p>
     *
     * @param {puremvc.IMediator} mediator a reference to the <code>IMediator</code> instance
     */
    registerMediator(mediator) {
        // do not allow re-registration (you must to removeMediator fist)
        if (this.mediatorMap.has(mediator.getMediatorName()) !== false) return;

        mediator.initializeNotifier(this.multitonKey);

        // Register the Mediator for retrieval by name
        this.mediatorMap.set(mediator.getMediatorName(), mediator);

        // Get Notification interests, if any.
        let interests = mediator.listNotificationInterests();

        // Register Mediator as an observer for each notification of interests
        if (interests.length > 0) {
            // Create Observer referencing this mediator's handlNotification method
            let observer = new Observer(mediator.handleNotification.bind(mediator), mediator); // check bind

            // Register Mediator as Observer for its list of Notification interests
            for (let i = 0; i < interests.length; i++) {
                this.registerObserver(interests[i], observer);
            }
        }

        // alert the mediator that it has been registered
        mediator.onRegister();
    }

    /**
     * Retrieve an <code>IMediator</code> from the <code>View</code>.
     *
     * @param {string} mediatorName the name of the <code>IMediator</code> instance to retrieve.
     * @returns {puremvc.IMediator} the <code>IMediator</code> instance previously registered with the given <code>mediatorName</code>.
     */
    retrieveMediator(mediatorName) {
        return this.mediatorMap.get(mediatorName);
    }

    /**
     * Remove an <code>IMediator</code> from the <code>View</code>.
     *
     * @param {string} mediatorName name of the <code>IMediator</code> instance to be removed.
     * @returns {puremvc.IMediator} the <code>IMediator</code> that was removed from the <code>View</code>
     */
    removeMediator(mediatorName) {
        // Retrieve the named mediator
        let mediator = this.mediatorMap.get(mediatorName);

        if (mediator) {
            // for every notification this mediator is interested in...
            let interests = mediator.listNotificationInterests();
            for (let i = 0; i < interests.length; i++) {
                // remove the observer linking the mediator
                // to the notification interest
                this.removeObserver(interests[i], mediator);
            }

            // remove the mediator from the map
            this.mediatorMap.delete(mediatorName);

            // alert the mediator that it has been removed
            mediator.onRemove();
        }

        return mediator;
    }

    /**
     * Check if a Mediator is registered or not
     *
     * @param {string} mediatorName
     * @returns {boolean} whether a Mediator is registered with the given <code>mediatorName</code>.
     */
    hasMediator(mediatorName) {
        return this.mediatorMap.has(mediatorName);
    }

    /**
     * Remove an IView instance
     *
     * @static
     * @param key multitonKey of IView instance to remove
     */
    static removeView(key) {
        this.instanceMap.delete(key);
    }

    /**
     * Multiton instance
     *
     * @static
     * @type {Map<string, puremvc.IView>}
     */
    // static instanceMap = new Map();
    static get instanceMap () {
      let instanceMap = new Map()
      Reflect.defineProperty(this, `instanceMap`, {value: instanceMap})
      return instanceMap
    }

    /**
     * Message Constants
     *
     * @static
     * @type {string}
     */
    static get MULTITON_MSG() { return "View instance for this Multiton key already constructed!" };

}

export { View }
