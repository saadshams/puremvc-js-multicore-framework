/**
 * Tests PureMVC Observer class.
 *
 * <P>Since the Observer encapsulates the interested object's
 * callback information, there are no getters, only setters.
 * It is, in effect write-only memory.</P>
 *
 * <P>Therefore, the only way to test it is to set the
 * notification method and context and call the notifyObserver
 * method.</P>
 */
describe("ObserverTest", () => {

    /**
     * Tests observer class when initialized by accessor methods.
     */
    it("should testObserverAccessors", () => {
        // Create observer with null args, then
        // use accessors to set notification method and context
        let observer = new puremvc.Observer(null, null);
        observer.setNotifyContext(this);
        observer.setNotifyMethod(observerTestMethod);

        // create a test event, setting a payload value and notify
        // the observer with it. since the observer is this class
        // and the notification method is observerTestMethod,
        // successful notification will result in our local
        // observerTestVar being set to the value we pass in
        // on the note body.
        let notification = new puremvc.Notification("ObserverTestNote", 10, "");
        observer.notifyObserver(notification);

        // test assertions
        assert.equal(observerTestVar, 10, "Expecting observerTestVar = 10")
    });

    /**
     * Tests observer class when initialized by constructor.
     */
    it("should testObserverConstructor", () => {
        // Create observer with null args, then
        // use accessors to set notification method and context
        let observer = new puremvc.Observer(null, null);
        observer.setNotifyContext(this);
        observer.setNotifyMethod(observerTestMethod);

        // create a test note, setting a body value and notify
        // the observer with it. since the observer is this class
        // and the notification method is observerTestMethod,
        // successful notification will result in our local
        // observerTestVar being set to the value we pass in
        // on the note body.
        let notification = new puremvc.Notification("ObserverTestNote", 5, "");
        observer.notifyObserver(notification);

        // test assertions
        assert.isTrue(observerTestVar == 5, "Expecting observerTestVar = 5");
    });

    /**
     * Tests the compareNotifyContext method of the Observer class
     */
    it("should testCompareNotifyContext", () => {
        // Create observer passing in notification method and context
        let observer = new puremvc.Observer(observerTestMethod, this);

        let negTestObject = new Object();

        // test assertions
        assert.isTrue(observer.compareNotifyContext(negTestObject) == false, "Expecting observer.compareNotifyContext(negTestObj) == false");
        assert.isTrue(observer.compareNotifyContext(this) == true, "Expecting observer.compareNotifyContext(this) == true");
    });

    /**
     * A test variable that proves the notify method was
     * executed with 'this' as its exectution context
     */
    let observerTestVar;

    /**
     * A function that is used as the observer notification
     * method. It multiplies the input number by the
     * observerTestVar value
     *
     * @param {puremvc.INotification} notification
     */
    let observerTestMethod = (notification) => {
        observerTestVar = notification.body;
    };

});
