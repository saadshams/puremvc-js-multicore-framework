/**
 * @class puremvc.View
 * @implements puremvc.IView
 */
class View {

    /**
     * @constructor
     * @param {string} key
     */
    constructor(key) {
        if (View.instanceMap.get(key) != null) throw new Error(View.MULTITON_MSG);
        /** @member {string} */
        this.multitonKey = key;
        View.instanceMap.set(this.multitonKey, this);

        /** @member {Map<string, puremvc.IMediator>} */
        this.mediatorMap = new Map();

        /** @member {Map<string, [puremvc.IObserver]>} */
        this.observerMap = new Map();
        this.initializeView();
    }

    initializeView() {

    }

    /**
     *
     * @static
     * @param {string} key
     * @param {function(string):puremvc.IView} viewFunction
     * @returns {puremvc.IView}
     */
    static getInstance(key, viewFunction) {
        if (this.instanceMap.get(key) == null) this.instanceMap.set(key, viewFunction(key));
        return this.instanceMap.get(key);
    }

    registerObserver(notificationName, observer) {
        if (this.observerMap.get(notificationName) != null) {
            let observers = this.observerMap.get(notificationName);
            observers.push(observer);
        } else {
            this.observerMap.set(notificationName, new Array(observer));
        }
    }

    notifyObservers(notification) {
        if (this.observerMap.get(notification.name) != null) {
            // Copy observers from reference array to working array,
            // since the reference array may change during the notification loop
            let observers = this.observerMap.get(notification.name);

            // Notify Observers from the working array
            for(let i = 0; i < observers.length; i++) {
                observers[i].notifyObserver(notification);
            }
        }
    }

    removeObserver(notificationName, notifyContext) {
        let observers = this.observerMap.get(notificationName);

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
     *
     * @param {puremvc.IMediator} mediator
     */
    registerMediator(mediator) {
        if (this.mediatorMap.get(mediator.name) != null) return;

        mediator.initializeNotifier(this.multitonKey);

        this.mediatorMap.set(mediator.getMediatorName(), mediator);

        let interests = mediator.listNotificationInterests();

        if (interests.length > 0) {
            let observer = new Observer(mediator.handleNotification.bind(mediator), mediator); // check bind

            for (let i = 0; i < interests.length; i++) {
                this.registerObserver(interests[i], observer);
            }
        }

        mediator.onRegister();
    }

    retrieveMediator(mediatorName) {
        return this.mediatorMap.get(mediatorName);
    }

    removeMediator(mediatorName) {
        let mediator = this.mediatorMap.get(mediatorName);

        if (mediator) {
            let interests = mediator.listNotificationInterests();
            for (let i = 0; i < interests.length; i++) {
                this.removeObserver(interests[i], mediator);
            }

            this.mediatorMap.delete(mediatorName);

            mediator.onRemove();
        }

        return mediator;
    }

    hasMediator(mediatorName) {
        return this.mediatorMap.has(mediatorName);
    }

    static removeView(key) {
        this.instanceMap.delete(key);
    }

    /**
     *
     * @type {Map<string, puremvc.IView>}
     */
    static instanceMap = new Map();

    /**
     *
     * @type {string}
     */
    static get MULTITON_MSG() { return "View instance for this Multiton key already constructed!" };

}