let ViewTest = {

    lastNotification: "",
    onRegisterCalled: false,
    onRemoveCalled: false,
    counter: 0,

    NOTE1: "Notification1",
    NOTE2: "Notification2",
    NOTE3: "Notification3",
    NOTE4: "Notification4",
    NOTE5: "Notification5",
    NOTE6: "Notification6"
};

describe("ViewTest", () => {

    it("should testGetInstance", () => {
        // Test Factory Method
        let view = puremvc.View.getInstance("ViewTestKey1", key => {return new puremvc.View(key)});

        // test assertions
        assert.isNotNull(view, "Expecting instance not null");
    });

    it("should testRegisterAndNotifyObserver", () => {
        // Get the Multiton View instance
        let view = puremvc.View.getInstance("ViewTestKey2", key => {return new puremvc.View(key)});

        // Create observer, passing in notification method and context
        let observer = new puremvc.Observer(viewTestMethod, this);

        // Register Observer's interest in a particular Notification with the View
        view.registerObserver(ViewTestNote.NAME, observer);

        // Create a ViewTestNote, setting
        // a body value, and tell the View to notify
        // Observers. Since the Observer is this class
        // and the notification method is viewTestMethod,
        // successful notification will result in our local
        // viewTestVar being set to the value we pass in
        // on the note body.
        let note = ViewTestNote.create(10);
        view.notifyObservers(note);

        // test assertions
        assert.isTrue(viewTestVar == 10, "Expecting viewTestVar = 10");
    });

    /**
     * Tests registering and retrieving a mediator with
     * the View.
     */
    it("should testRegisterAndRetrieveMediator", () => {
        // Get the Multiton View instance
        let view = puremvc.View.getInstance("ViewTestKey3", key => new puremvc.View(key));

        // Create and register the test mediator
        let viewTestMediator = new ViewTestMediator(this);
        view.registerMediator(viewTestMediator);

        // Retrieve the component
        let mediator = view.retrieveMediator(ViewTestMediator.NAME);

        // test assertions
        //assert.isTrue(mediator != undefined, "ViewTestMediator is not null");
    });


    /**
     * A test variable that proves the viewTestMethod was
     * invoked by the View.
     */
    let viewTestVar;

    /**
     * A utility method to test the notification of Observers by the view
     * @param {puremvc.INotification} notification
     */
    function viewTestMethod(notification) {
        // set the local viewTestVar to the number on the event payload
        viewTestVar = notification.getBody();
    }
});