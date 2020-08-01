//
//  PureMVC JS Multicore Unit Tests
//
//  Copyright(c) 2020 Saad Shams <saad.shams@puremvc.org>
//  Your reuse is governed by the Creative Commons Attribution 3.0 License
//

if (typeof exports !== "undefined") {
    var puremvc = require("./puremvc-2.0.0").puremvc;
    var assert = require("chai").assert;
} else {
    var assert = chai.assert;
}


/**
 * Test the PureMVC Controller class.
 *
 * @see ControllerTestVO
 * @see ControllerTestCommand
 */
describe("ControllerTest", () => {

    /**
     * Tests the Controller Multiton Factory Method
     */
    it("should testGetInstance", () => {
        // Test Factory Method
        let controller = puremvc.Controller.getInstance("ControllerTestKey1", key => new puremvc.Controller(key));

        // test assertions
        assert.isNotNull(controller);
    });

    /**
     * Tests Command registration and execution.
     *
     * <P>This test gets a Multiton Controller instance
     * and registers the ControllerTestCommand class
     * to handle 'ControllerTest' Notifications.<P>
     *
     * <P>It then constructs such a Notification and tells the
     * Controller to execute the associated Command.
     * Success is determined by evaluating a property
     * on an object passed to the Command, which will
     * be modified when the Command executes.</P>
     */
    it("should testRegisterAndExecuteCommand", () => {
        // Create the controller, register the ControllerTestCommand to handle 'ControllerTest' notes
        let controller = puremvc.Controller.getInstance("ControllerTestKey2", key => new puremvc.Controller(key));
        controller.registerCommand("ControllerTest", () => new ControllerTestCommand());

        // Create a 'ControllerTest' note
        let vo = new ControllerTestVO(12);
        let note = new puremvc.Notification("ControllerTest", vo);

        // Tell the controller to execute the Command associated with the note
        // the ControllerTestCommand invoked will multiply the vo.input value
        // by 2 and set the result on vo.result
        controller.executeCommand(note);

        // test assertions
        assert.isTrue(vo.result == 24, "Expected vo.result == 24");
    });

    /**
     * Tests Command registration and removal.
     *
     * <P>Tests that once a Command is registered and verified
     * working, it can be removed from the Controller.</P>
     */
    it("should testRegisterAndRemoveCommand", () => {
        // Create the controller, register the ControllerTestCommand to handle 'ControllerTest' notes
        let controller = puremvc.Controller.getInstance("ControllerTestKey3", key => new puremvc.Controller(key));
        controller.registerCommand("ControllerRemoveTest", () => new ControllerTestCommand());

        // Create a 'ControllerTest' note
        let vo = new ControllerTestVO(12);
        let note = new puremvc.Notification("ControllerRemoveTest", vo);

        // Tell the controller to execute the Command associated with the note
        // the ControllerTestCommand invoked will multiply the vo.input value
        // by 2 and set the result on vo.result
        controller.executeCommand(note);

        // test assertions
        assert.isTrue(vo.getResult() == 24, "Expecting vo.result == 24");

        // Reset result
        vo.setResult(0);

        // Remove the Command from the Controller
        controller.removeCommand("ControllerRemoveTest");

        // Tell the controller to execute the Command associated with the
        // note. This time, it should not be registered, and our vo result
        // will not change
        controller.executeCommand(note);

        // test assertions
        assert.isTrue(vo.result == 0, "Expecting vo.result == 0");
    });

    /**
     * Test hasCommand method.
     */
    it("should testHasCommand", () => {
        // register the ControllerTestCommand to handle 'hasCommandTest' notes
        let controller = puremvc.Controller.getInstance("ControllerTestKey4", key => new puremvc.Controller(key));
        controller.registerCommand("hasCommandTest", () => new ControllerTestCommand());

        // test that hasCommand returns true for hasCommandTest notifications
        assert.isTrue(controller.hasCommand("hasCommandTest"), "Expecting controller.hasCommand('hasCommandTest') == true");

        // Remove the Command from the Controller
        controller.removeCommand("hasCommandTest");

        // test that hasCommand returns false for hasCommandTest notifications
        assert.isFalse(controller.hasCommand("hasCommandTest"), "Expecting controller.hasCommand('hasCommandTest') == true");
    });

    /**
     * Tests Removing and Reregistering a Command
     *
     * <P>Tests that when a Command is re-registered that it isn't fired twice.
     * This involves, minimally, registration with the controller but
     * notification via the View, rather than direct execution of
     * the Controller's executeCommand method as is done above in
     * testRegisterAndRemove. The bug under test was fixed in AS3 Standard
     * Version 2.0.2. If you run the unit tests with 2.0.1 this
     * test will fail.</P>
     */
    it("should testReregisterAndExecuteCommand", () => {
        // Fetch the controller, register the ControllerTestCommand2 to handle 'ControllerTest2' notes
        let controller = puremvc.Controller.getInstance("ControllerTestKey5", key => new puremvc.Controller(key));
        controller.registerCommand("ControllerTest2", () => new ControllerTestCommand2());

        // Remove the Command from the Controller
        controller.removeCommand("ControllerTest2");

        // Re-register the Command with the Controller
        controller.registerCommand("ControllerTest2", () => new ControllerTestCommand2());

        // Create a 'ControllerTest2' note
        let vo = new ControllerTestVO(12);
        let note = new puremvc.Notification("ControllerTest2", vo);

        // retrieve a reference to the View from the same core.
        let view = puremvc.View.getInstance("ControllerTestKey5", key => new puremvc.View(key));

        // send the Notification
        view.notifyObservers(note);

        // test assertions
        // if the command is executed once the value will be 24
        assert.isTrue(vo.result == 24, "Expecting vo.result == 24");

        // Prove that accumulation works in the VO by sending the notification again
        view.notifyObservers(note);

        // if the command is executed twice the value will be 48
        assert.isTrue(vo.result == 48, "Expecting vo.result == 48");
    });

});


/**
 /**
 * A SimpleCommand subclass used by ControllerTest.
 *
 * @see ControllerTest
 * @see ControllerTestVO
 *
 * @class ControllerTestCommand
 */
class ControllerTestCommand extends puremvc.SimpleCommand {

    /**
     * Fabricate a result by multiplying the input by 2
     *
     * @param notification the note carrying the ControllerTestVO
     */
    execute(notification) {
        /** @type ControllerTestVO */
        let vo = notification.getBody();

        // Fabricate a result
        vo.setResult(2 * vo.getInput());
    }
}


/**
 * A SimpleCommand subclass used by ControllerTest.
 *
 * @see ControllerTest
 * @see ControllerTestVO
 *
 * @class ControllerTestCommand2
 */
class ControllerTestCommand2 extends puremvc.SimpleCommand {

    /**
     * Fabricate a result by multiplying the input by 2 and adding to the existing result
     *
     * @param {puremvc.INotification} notification
     */
    execute(notification) {
        /** @type ControllerTestVO */
        let vo = notification.getBody();

        // Fabricate a result
        vo.setResult(vo.getResult() + (2 * vo.getInput()));
    }

}


/**
 * A utility class used by ControllerTest.
 *
 * @see ControllerTest
 * @see ControllerTestCommand
 *
 * @class ControllerTestVO
 */
class ControllerTestVO {

    /**
     * Constructor
     *
     * @param {number} input
     */
    constructor(input) {
        this.input = input;
        this.result = 0;
    }

    /**
     *
     * @returns {number}
     */
    getInput() {
        return this.input;
    }

    /**
     *
     * @returns {number}
     */
    getResult() {
        return this.result;
    }

    /**
     *
     * @param {number} result
     */
    setResult(result) {
        this.result = result;
    }
}


/**
 * Test the PureMVC Model class.
 */
describe("ModelTest", () => {

    /**
     * Tests the Model Multiton Factory Method
     */
    it("should testGetInstance", () => {
        // Test Factory Method
        let model = puremvc.Model.getInstance("ModelTestKey1", key => new puremvc.Model(key));

        // test assertions
        assert.isNotNull(model, "Expecting instance not null");
    });

    /**
     * Tests the proxy registration and retrieval methods.
     *
     * <P>
     * Tests <code>registerProxy</code> and <code>retrieveProxy</code> in the same test.
     * These methods cannot currently be tested separately
     * in any meaningful way other than to show that the
     * methods do not throw exception when called. </P>
     */
    it("should testRegisterAndRetrieveProxy", () => {
        // register a proxy and retrieve it.
        let model = puremvc.Model.getInstance("ModelTestKey2", key => new puremvc.Model(key));
        model.registerProxy(new puremvc.Proxy("colors", ["red", "green", "blue"]));
        let proxy = model.retrieveProxy("colors");
        let data = proxy.getData();

        // test assertions
        assert.isNotNull(data, "Expecting data not null");
        assert.isTrue(data.length == 3, "Expecting data.length == 3");
        assert.isTrue(data[0] == "red", "Expecting data[0] == 'red'");
        assert.isTrue(data[1] == "green", "Expecting data[1] == 'green'");
        assert.isTrue(data[2] == "blue", "Expecting data[2] == 'blue'");
    });

    /**
     * Tests the proxy removal method.
     */
    it("should testRegisterAndRemoveProxy", () => {
        // register a proxy, remove it, then try to retrieve it
        let model = puremvc.Model.getInstance("ModelTestKey3", key => new puremvc.Model(key));
        model.registerProxy(new puremvc.Proxy("sizes", [7, 13, 21]));

        // remove the proxy
        let removedProxy = model.removeProxy("sizes");

        // assert that we removed the appropriate proxy
        assert.isTrue(removedProxy.getProxyName() == "sizes", "Expecting removedProxy.getProxyName() == 'sizes'");

        // ensure that the proxy is no longer retrievable from the model
        let proxy = model.retrieveProxy("sizes");

        // test assertions
        assert.isUndefined(proxy);
    });

    /**
     * Tests the hasProxy Method
     */
    it("should testHasProxy", () => {
        // register a proxy
        let model = puremvc.Model.getInstance("ModelTestKey4", key => new puremvc.Model(key));
        let proxy = new puremvc.Proxy("aces", ["clubs", "spades", "hearts", "diamonds"]);
        model.registerProxy(proxy);

        // assert that the model.hasProxy method returns true
        // for that proxy name
        assert.isTrue(model.hasProxy("aces"), "Expecting model.hasProxy('aces') == true");

        // remove the proxy
        model.removeProxy("aces");

        // assert that the model.hasProxy method returns false
        // for that proxy name
        assert.isFalse(model.hasProxy("aces"), "Expecting model.hasProxy('aces') == false")
    });

    /**
     * Tests that the Model calls the onRegister and onRemove methods
     */
    it("should testOnRegisterAndOnRemove", () => {
        // Get a Multiton Model instance
        let model = puremvc.Model.getInstance("ModelTestKey5", key => new puremvc.Model(key));

        // Create and register the test proxy
        let proxy = new ModelTestProxy();
        model.registerProxy(proxy);

        // assert that onRegsiter was called, and the proxy responded by setting its data accordingly
        assert.isTrue(proxy.getData() == ModelTestProxy.ON_REGISTER_CALLED, "Expecting proxy.getData() == ModelTestProxy.ON_REGISTER_CALLED");

        // Remove the component
        model.removeProxy(ModelTestProxy.NAME);

        // assert that onRemove was called, and the proxy responded by setting its data accordingly
        assert.isTrue(proxy.getData() == ModelTestProxy.ON_REMOVE_CALLED, "Expecting proxy.getData() == ModelTestProxy.ON_REMOVE_CALLED");
    });

});


/**
 * @class ModelTestProxy
 */
class ModelTestProxy extends puremvc.Proxy {

    constructor() {
        super(ModelTestProxy.NAME, "");
    }

    onRegister() {
        this.setData(ModelTestProxy.ON_REGISTER_CALLED)
    }

    onRemove() {
        this.setData(ModelTestProxy.ON_REMOVE_CALLED)
    }

    static get ON_REGISTER_CALLED() { return "onRegister Called" }

    static get ON_REMOVE_CALLED() { return "onRemove Called" }

    static get NAME() { return "ModelTestProxy" }

}

let ViewTest = {
    NOTE1: "Notification1",
    NOTE2: "Notification2",
    NOTE3: "Notification3",
    NOTE4: "Notification4",
    NOTE5: "Notification5",
    NOTE6: "Notification6"
};

/**
 * Test the PureMVC View class.
 */
describe("ViewTest", () => {
    /**
     * Tests the View Multiton Factory Method
     */
    it("should testGetInstance", () => {
        // Test Factory Method
        let view = puremvc.View.getInstance("ViewTestKey1", key => {return new puremvc.View(key)});

        // test assertions
        assert.isNotNull(view, "Expecting instance not null");
    });

    /**
     * Tests registration and notification of Observers.
     *
     * <P>An Observer is created to callback the viewTestMethod of
     * this ViewTest instance. This Observer is registered with
     * the View to be notified of 'ViewTestEvent' events. Such
     * an event is created, and a value set on its payload. Then
     * the View is told to notify interested observers of this
     * Event.</P>
     *
     * <P>The View calls the Observer's notifyObserver method
     * which calls the viewTestMethod on this instance
     * of the ViewTest class. The viewTestMethod method will set
     * an instance variable to the value passed in on the Event
     * payload. We evaluate the instance variable to be sure
     * it is the same as that passed out as the payload of the
     * original 'ViewTestEvent'.</P>
     */
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
        assert.isTrue(mediator != undefined, "ViewTestMediator is not null");
    });

    it("testHasMediator", () => {
        // register a Mediator
        let view = puremvc.View.getInstance("ViewTestKey4", key => new puremvc.View(key));

        // Create and register the test mediator
        let mediator = new puremvc.Mediator("hasMediatorTest", this);
        view.registerMediator(mediator);

        // assert that the view.hasMediator method returns true
        // for that mediator name
        assert.isTrue(view.hasMediator("hasMediatorTest") == true, "Expecting view.hasMediator('hasMediatorTest') == true");

        view.removeMediator("hasMediatorTest");

        // assert that the view.hasMediator method returns false
        // for that mediator name
        assert.isTrue(view.hasMediator("hasMediatorTest") == false, "Expecting view.hasMediator('hasMediatorTest') == false");
    });

    /**
     * Tests registering and removing a mediator
     */
    it("testRegisterAndRemoveMediator", () => {
        // Get the Multiton View instance
        let view = puremvc.View.getInstance("ViewTestKey5", key => new puremvc.View(key));

        // Create and register the test mediator
        let mediator = new puremvc.Mediator("testing", this);
        view.registerMediator(mediator);

        // Remove the component
        let removedMediator = view.removeMediator("testing");

        // assert that we have removed the appropriate mediator
        assert.isTrue(removedMediator.getMediatorName() == "testing", "Expecting removedMediator.getMediatorName() == 'testing'");

        // assert that the mediator is no longer retrievable
        assert.isTrue(view.retrieveMediator("testing") == null, "Expecting removedMediator.getMediatorName() == 'testing'");
    });

    /**
     * Tests that the View callse the onRegister and onRemove methods
     */
    it("testOnRegisterAndOnRemove", () => {
        let viewTest = {
            onRegisterCalled: false,
            onRemoveCalled: false
        };

        // Get the Multiton View instance
        let view = puremvc.View.getInstance("ViewTestKey6", key => new puremvc.View(key));

        // Create and register the test mediator
        let mediator = new ViewTestMediator4(viewTest);
        view.registerMediator(mediator);

        // assert that onRegsiter was called, and the mediator responded by setting our boolean
        assert.isTrue(viewTest.onRegisterCalled, "Expecting onRegisterCalled == true");

        // Remove the component
        view.removeMediator(ViewTestMediator4.NAME);

        // assert that the mediator is no longer retrievable
        assert.isTrue(viewTest.onRemoveCalled, "Expecting onRemoveCalled == true");
    });

    /**
     * Tests successive register and remove of same mediator.
     */
    it("testSuccessiveRegisterAndRemoveMediator", () => {
        // Get the Multiton View instance
        let view = puremvc.View.getInstance("ViewTestKey7", key => new puremvc.View(key));

        // Create and register the test mediator,
        // but not so we have a reference to it
        view.registerMediator(new ViewTestMediator({}));

        // test that we can retrieve it
        assert.isTrue(view.retrieveMediator(ViewTestMediator.NAME) != null, "Expecting view.retrieveMediator(ViewTestMediator.NAME) != null");

        // Remove the Mediator
        view.removeMediator(ViewTestMediator.NAME);

        // test that retrieving it now returns null
        assert.isTrue(view.retrieveMediator(ViewTestMediator.NAME) == null, "Expecting view.retrieveMediator(ViewTestMediator.NAME) == null");

        // test that removing the mediator again once its gone doesn't cause crash
        assert.isTrue(view.retrieveMediator(ViewTestMediator.NAME) == null, "Expecting view.retrieveMediator(ViewTestMediator.NAME) doesn't crash");

        // Create and register another instance of the test mediator,
        view.registerMediator(new ViewTestMediator({}));

        assert.isTrue(view.retrieveMediator(ViewTestMediator.NAME) != null, "view.retrieveMediator(ViewTestMediator.NAME) != null");

        // Remove the Mediator
        view.removeMediator(ViewTestMediator.NAME);
    });

    /**
     * Tests registering a Mediator for 2 different notifications, removing the
     * Mediator from the View, and seeing that neither notification causes the
     * Mediator to be notified. Added for the fix deployed in version 1.7
     */
    it("testRemoveMediatorAndSubsequentNotify", () => {
        let viewTest = {
            lastNotification: ""
        };

        // Get the Multiton View instance
        let view = puremvc.View.getInstance("ViewTestKey8", key => new puremvc.View(key));

        // Create and register the test mediator to be removed.
        view.registerMediator(new ViewTestMediator2(viewTest));

        // test that notifications work
        view.notifyObservers(new puremvc.Notification(ViewTest.NOTE1))
        assert.isTrue(viewTest.lastNotification == ViewTest.NOTE1, "Expecting lastNotification == NOTE1");

        view.notifyObservers(new puremvc.Notification(ViewTest.NOTE2));
        assert.isTrue(viewTest.lastNotification == ViewTest.NOTE2);

        // Remove the Mediator
        view.removeMediator(ViewTestMediator2.NAME);

        // test that retrieving it now returns null
        assert.isTrue(view.retrieveMediator( ViewTestMediator2.NAME ) == null, "Expecting view.retrieveMediator( ViewTestMediator2.NAME ) == null");

        // test that notifications no longer work
        // (ViewTestMediator2 is the one that sets lastNotification
        // on this component, and ViewTestMediator)
        viewTest.lastNotification = null;

        view.notifyObservers(new puremvc.Notification(ViewTest.NOTE1))
        assert.isTrue(viewTest.lastNotification != ViewTest.NOTE1, "Expecting lastNotification == NOTE1");

        view.notifyObservers(new puremvc.Notification(ViewTest.NOTE2))
        assert.isTrue(viewTest.lastNotification != ViewTest.NOTE2, "Expecting lastNotification == NOTE2");
    });

    it("testRemoveOneOfTwoMediatorsAndSubsequentNotify", () => {
        let viewTest = { lastNotification: "" };

        // Get the Multiton View instance
        let view = puremvc.View.getInstance("ViewTestKey9", key => new puremvc.View(key));

        // Create and register that responds to notifications 1 and 2
        view.registerMediator(new ViewTestMediator2(viewTest));

        // Create and register that responds to notification 3
        view.registerMediator(new ViewTestMediator3(viewTest));

        // test that all notifications work
        view.notifyObservers(new puremvc.Notification(ViewTest.NOTE1));
        assert.isTrue(viewTest.lastNotification == ViewTest.NOTE1, "Expecting lastNotification == NOTE1");

        view.notifyObservers(new puremvc.Notification(ViewTest.NOTE2));
        assert.isTrue(viewTest.lastNotification == ViewTest.NOTE2, "Expecting lastNotification == NOTE2");

        view.notifyObservers(new puremvc.Notification(ViewTest.NOTE3));
        assert.isTrue(viewTest.lastNotification == ViewTest.NOTE3, "Expecting lastNotification == NOTE3");

        // Remove the Mediator that responds to 1 and 2
        view.removeMediator(ViewTestMediator2.NAME);

        // test that retrieving it now returns null
        assert.isTrue(view.retrieveMediator(ViewTestMediator2.NAME) == null, "Expecting view.retrieveMediator(ViewTestMediator2.NAME) != null");

        // test that notifications no longer work
        // for notifications 1 and 2, but still work for 3
        viewTest.lastNotification = null;

        view.notifyObservers(new puremvc.Notification(ViewTest.NOTE1));
        assert.isTrue(viewTest.lastNotification != ViewTest.NOTE1, "Expecting lastNotification != NOTE1");

        view.notifyObservers(new puremvc.Notification(ViewTest.NOTE2));
        assert.isTrue(viewTest.lastNotification != ViewTest.NOTE2, "Expecting lastNotification != NOTE2");

        view.notifyObservers(new puremvc.Notification(ViewTest.NOTE3));
        assert.isTrue(viewTest.lastNotification == ViewTest.NOTE3, "Expecting lastNotification == NOTE3");
    });

    /**
     * Tests registering the same mediator twice.
     * A subsequent notification should only illicit
     * one response. Also, since reregistration
     * was causing 2 observers to be created, ensure
     * that after removal of the mediator there will
     * be no further response.
     */
    it("testMediatorReregistration", () => {
        let viewTest = {
            counter: 0,
        }

        // Get the Multiton View instance
        let view = puremvc.View.getInstance("ViewTestKey10", key => new puremvc.View(key));

        // Create and register that responds to notification 5
        view.registerMediator(new ViewTestMediator5(viewTest));

        // try to register another instance of that mediator (uses the same NAME constant).
        view.registerMediator(new ViewTestMediator5(viewTest));

        // test that the counter is only incremented once (mediator 5's response)
        viewTest.counter = 0;
        view.notifyObservers(new puremvc.Notification(ViewTest.NOTE5));
        assert.isTrue(viewTest.counter === 1, "Expecting counter == 1");

        // Remove the Mediator
        view.removeMediator(ViewTestMediator5.NAME);

        // test that retrieving it now returns null
        assert.isTrue(view.retrieveMediator(ViewTestMediator5.NAME) == null, "Expecting view.retrieveMediator(ViewTestMediator5.NAME) == null");

        // test that the counter is no longer incremented
        viewTest.counter = 0;
        view.notifyObservers(new puremvc.Notification(ViewTest.NOTE5));
        assert.isTrue(viewTest.counter === 0, "Expecting counter == 0");
    });

    /**
     * Tests the ability for the observer list to
     * be modified during the process of notification,
     * and all observers be properly notified. This
     * happens most often when multiple Mediators
     * respond to the same notification by removing
     * themselves.
     */
    it("testModifyObserverListDuringNotification", () => {
        let viewTest = {
            counter: 0,
        }

        // Get the Multiton View instance
        let view = puremvc.View.getInstance("ViewTestKey11", key => new puremvc.View(key));

        // Create and register several mediator instances that respond to notification 6
        // by removing themselves, which will cause the observer list for that notification
        // to change. versions prior to MultiCore Version 2.0.5 will see every other mediator
        // fails to be notified.
        view.registerMediator(new ViewTestMediator6(ViewTestMediator6.NAME + "/1", viewTest));
        view.registerMediator(new ViewTestMediator6(ViewTestMediator6.NAME + "/2", viewTest));
        view.registerMediator(new ViewTestMediator6(ViewTestMediator6.NAME + "/3", viewTest));
        view.registerMediator(new ViewTestMediator6(ViewTestMediator6.NAME + "/4", viewTest));
        view.registerMediator(new ViewTestMediator6(ViewTestMediator6.NAME + "/5", viewTest));
        view.registerMediator(new ViewTestMediator6(ViewTestMediator6.NAME + "/6", viewTest));
        view.registerMediator(new ViewTestMediator6(ViewTestMediator6.NAME + "/7", viewTest));
        view.registerMediator(new ViewTestMediator6(ViewTestMediator6.NAME + "/8", viewTest));

        // clear the counter
        viewTest.counter = 0;

        // send the notification. each of the above mediators will respond by removing
        // themselves and incrementing the counter by 1. This should leave us with a
        // count of 8, since 8 mediators will respond.
        view.notifyObservers(new puremvc.Notification(ViewTest.NOTE6));

        // verify the count is correct
        assert.isTrue(viewTest.counter === 8, "Expecting counter == 8");

        // clear the counter
        viewTest.counter = 0;
        view.notifyObservers(new puremvc.Notification(ViewTest.NOTE6));
        // verify the count is 0
        assert.isTrue(viewTest.counter === 0, "Expecting counter == 0");
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


/**
 * A Mediator class used by ViewTest.
 *
 * @class ViewTestMediator
 * @extends puremvc.Mediator
 * @implements puremvc.IMediator
 */
class ViewTestMediator extends puremvc.Mediator {

    /**
     * @param {puremvc.View} view
     */
    constructor(view) {
        super(ViewTestMediator.NAME, view)
    }

    listNotificationInterests() {
        // be sure that the mediator has some Observers created
        // in order to test removeMediator
        return ["ABC", "DEF", "GHI"];
    }

    /**
     * The Mediator name
     */
    static get NAME() { return "ViewTestMediator" }
}

/**
 * @class ViewTestMediator2
 * @extends Mediator
 */
class ViewTestMediator2 extends puremvc.Mediator {

    /**
     * Constructor
     *
     * @constructor
     * @param view
     */
    constructor(view) {
        super(ViewTestMediator2.NAME, view);
    }

    /**
     * @override
     * @returns {[string]}
     */
    listNotificationInterests() {
        return [ViewTest.NOTE1, ViewTest.NOTE2];
    }

    /**
     * @override
     * @param notification
     */
    handleNotification(notification) {
        this.getViewComponent().lastNotification = notification.getName();
    }

    /**
     *
     * @returns {string}
     * @static
     */
    static get NAME() { return "ViewTestMediator2" }
}

class ViewTestMediator3 extends puremvc.Mediator {

    /**
     * @constructor
     * @param {object} view
     */
    constructor(view) {
        super(ViewTestMediator3.NAME, view);
    }

    listNotificationInterests() {
        // be sure that the mediator has some Observers created
        // in order to test removeMediator
        return [ViewTest.NOTE3];
    }

    /**
     * @override
     * @param notification
     */
    handleNotification(notification) {
        this.getViewComponent().lastNotification = notification.getName();
    }

    /**
     * The Mediator name
     * @returns {string}
     */
    static get NAME() { return "ViewTestMediator3" }

}


class ViewTestMediator4 extends puremvc.Mediator {

    /**
     * Constructor
     * @param {Object} view
     */
    constructor(view) {
        super(ViewTestMediator4.NAME, view);
    }

    /**
     * @override
     */
    onRegister() {
        this.viewTest.onRegisterCalled = true;
    }

    /**
     * @override
     */
    onRemove() {
        this.viewTest.onRemoveCalled = true;
    }

    /**
     *
     * @returns {ViewTest}
     */
    get viewTest() {
        return this.getViewComponent();
    }

    static get NAME() { return "ViewTestMediator4" }

}

/**
 * @class ViewTestMediator5
 * @extends Mediator
 */
class ViewTestMediator5 extends puremvc.Mediator {

    /**
     *
     * @param {Object} view
     */
    constructor(view) {
        super(ViewTestMediator5.NAME, view);
    }

    /**
     * @override
     * @returns {[string]}
     */
    listNotificationInterests() {
        return [ViewTest.NOTE5];
    }

    /**
     * @override
     * @param {puremvc.INotification} notification
     */
    handleNotification(notification) {
        this.viewTest.counter++;
    }

    /**
     *
     * @returns {ViewTest}
     */
    get viewTest() {
        return this.getViewComponent();
    }

    /**
     *
     * @static
     * @returns {string}
     */
    static get NAME() { return "ViewTestMediator5" }

}


class ViewTestMediator6 extends puremvc.Mediator {

    constructor(name, view) {
        super(name, view);
    }

    listNotificationInterests() {
        return [ViewTest.NOTE6];
    }

    handleNotification(notification) {
        this.facade.removeMediator(this.getMediatorName());
    }

    onRemove() {
        this.viewTest.counter++;
    }

    /**
     *
     * @returns {ViewTest}
     */
    get viewTest() {
        return this.getViewComponent();
    }

    /**
     * The Mediator base name
     *
     * @static
     * @returns {string}
     */
    static get NAME() { return "ViewTestMediator6" }

}


/**
 *
 * @extends Notification
 * @implements INotification
 */
class ViewTestNote extends puremvc.Notification {

    /**
     *
     * @param {string} name
     * @param {Object} body
     */
    constructor(name, body) {
        super(name, body);
    }

    /**
     *
     * @param {Object} body
     * @static
     * @returns {ViewTestNote}
     */
    static create(body) {
        return new ViewTestNote(ViewTestNote.NAME, body)
    }

    static get NAME() { return "ViewTestNote" }
}

/**
 * Test the PureMVC Facade class.
 *
 * @see FacadeTestVO
 * @see FacadeTestCommand
 */
describe("FacadeTest", () => {

    /**
     * Tests the Facade Multiton Factory Method
     */
    it("should testGetInstance", () => {
        // Test Factory Method
       let facade = puremvc.Facade.getInstance("FacadeTestKey1", key => new puremvc.Facade(key));

        // test assertions
        assert.isTrue(facade != null, "");
    });

    /**
     * Tests Command registration and execution via the Facade.
     *
     * <P>This test gets a Multiton Facade instance
     * and registers the FacadeTestCommand class
     * to handle 'FacadeTest' Notifications.<P>
     *
     * <P>It then sends a notification using the Facade.
     * Success is determined by evaluating
     * a property on an object placed in the body of
     * the Notification, which will be modified by the Command.</P>
     */
    it("should testRegisterCommandAndSendNotification", () => {
        // Create the Facade, register the FacadeTestCommand to
        // handle 'FacadeTest' notifications
        let facade = puremvc.Facade.getInstance("FacadeTestKey2", key => new puremvc.Facade(key));
        facade.registerCommand("FacadeTestNote", () => new FacadeTestCommand());

        // Send notification. The Command associated with the event
        // (FacadeTestCommand) will be invoked, and will multiply
        // the vo.input value by 2 and set the result on vo.result
        let vo = new FacadeTestVO(32);
        facade.sendNotification("FacadeTestNote", vo);

        // test assertions
        assert.isTrue(vo.result == 64, "Expecting vo.result == 64");
    });

    /**
     * Tests Command removal via the Facade.
     *
     * <P>This test gets a Multiton Facade instance
     * and registers the FacadeTestCommand class
     * to handle 'FacadeTest' Notifications. Then it removes the command.<P>
     *
     * <P>It then sends a Notification using the Facade.
     * Success is determined by evaluating
     * a property on an object placed in the body of
     * the Notification, which will NOT be modified by the Command.</P>
     */
    it("should testRegisterAndRemoveCommandAndSendNotification", () => {
        // Create the Facade, register the FacadeTestCommand to
        // handle 'FacadeTest' events
        let facade = puremvc.Facade.getInstance("FacadeTestKey3", key => new puremvc.Facade(key));
        facade.registerCommand("FacadeTestNote", () => new FacadeTestCommand());
        facade.removeCommand("FacadeTestNote");

        // Send notification. The Command associated with the event
        // (FacadeTestCommand) will NOT be invoked, and will NOT multiply
        // the vo.input value by 2
        let vo = new FacadeTestVO(32);
        facade.sendNotification("FacadeTestNote", vo);

        // test assertions
        assert.isTrue(vo.result != 64, "Expecting vo.result != 64")
    });

    /**
     * Tests the regsitering and retrieving Model proxies via the Facade.
     *
     * <P>Tests <code>registerProxy</code> and <code>retrieveProxy</code> in the same test.
     * These methods cannot currently be tested separately
     * in any meaningful way other than to show that the
     * methods do not throw exception when called.</P>
     */
    it("should testRegisterAndRetrieveProxy", () => {
        // register a proxy and retrieve it.
        let facade = puremvc.Facade.getInstance("FacadeTestKey4", key => new puremvc.Facade(key));
        facade.registerProxy(new puremvc.Proxy("colors", ["red", "green", "blue"]));
        let proxy = facade.retrieveProxy("colors");

        // test assertions
        assert.isNotNull(proxy, "Expecting proxy is not null");

        // retrieve data from proxy
        let data = proxy.getData();

        // test assertions
        assert.isNotNull(data, "Expecting data not null");
        assert.isTrue(data.length == 3, "Expecting data.length == 3");
        assert.isTrue(data[0] == "red", "Expecting data[0] == 'red'");
        assert.isTrue(data[1] == "green", "Expecting data[1] == 'green'");
        assert.isTrue(data[2] == "blue", "Expecting data[2] == 'blue'");
    });

    /**
     * Tests the removing Proxies via the Facade.
     */
    it("should testRegisterAndRemoveProxy", () => {
        // register a proxy, remove it, then try to retrieve it
        let facade = puremvc.Facade.getInstance("FacadeTestKey5", key => new puremvc.Facade(key));
        let proxy = new puremvc.Proxy("sizes", [7, 13, 21]);
        facade.registerProxy(proxy);

        // remove the proxy
        let removedProxy = facade.removeProxy("sizes");

        // assert that we removed the appropriate proxy
        assert.isTrue(removedProxy.getProxyName() == "sizes", "Expecting removedProxy.getProxyName() == 'sizes'");

        // make sure we can no longer retrieve the proxy from the model
        proxy = facade.retrieveProxy("sizes");

        // test assertions
        assert.isUndefined(proxy, "Expecting proxy is null");
    });

    /**
     * Tests registering, retrieving and removing Mediators via the Facade.
     */
    it("should testRegisterRetrieveAndRemoveMediator", () => {
        // register a mediator, remove it, then try to retrieve it
        let facade = puremvc.Facade.getInstance("FacadeTestKey6", key => new puremvc.Facade(key));
        facade.registerMediator(new puremvc.Mediator(puremvc.Mediator.NAME, {}));

        // retrieve the mediator
        assert.isNotNull(facade.retrieveMediator(puremvc.Mediator.NAME), "Expecting mediator is not null");

        // remove the mediator
        let removedMediator = facade.removeMediator(puremvc.Mediator.NAME);

        // assert that we have removed the appropriate mediator
        assert.isTrue(removedMediator.getMediatorName() == puremvc.Mediator.NAME, "Expecting removedMediator.getMediatorName() == Mediator.NAME");

        // assert that the mediator is no longer retrievable
        assert.isTrue(facade.retrieveMediator(puremvc.Mediator.NAME) == null, "Expecting facade.retrieveMediator( Mediator.NAME ) == null )")
    });

    /**
     * Tests the hasProxy Method
     */
    it("should testHasProxy", () => {
        // register a Proxy
        let facade = puremvc.Facade.getInstance("FacadeTestKey7", key => new puremvc.Facade(key));
        facade.registerProxy(new puremvc.Proxy("hasProxyTest", [1, 2, 3]));

        // assert that the model.hasProxy method returns true
        // for that proxy name
        assert.isTrue(facade.hasProxy("hasProxyTest") == true, "Expecting facade.hasProxy('hasProxyTest') == true");
    });

    /**
     * Tests the hasMediator Method
     */
    it("should testHasMediator", () => {
        // register a Mediator
        let facade = puremvc.Facade.getInstance("FacadeTestKey8", key => new puremvc.Facade(key));
        facade.registerMediator(new puremvc.Mediator("facadeHasMediatorTest", {}));

        // assert that the facade.hasMediator method returns true
        // for that mediator name
        assert.isTrue(facade.hasMediator("facadeHasMediatorTest") == true, "Expecting facade.hasMediator('facadeHasMediatorTest') == true");

        facade.removeMediator("facadeHasMediatorTest");

        // assert that the facade.hasMediator method returns false
        // for that mediator name
        assert.isTrue(facade.hasMediator("facadeHasMediatorTest") == false, "Expecting facade.hasMediator('facadeHasMediatorTest') == false");
    });

    /**
     * Test hasCommand method.
     */
    it("should testHasCommand", () => {
        // register the ControllerTestCommand to handle 'hasCommandTest' notes
        let facade = puremvc.Facade.getInstance("FacadeTestKey10", key => new puremvc.Facade(key));
        facade.registerCommand("facadeHasCommandTest", () => new FacadeTestCommand());

        // test that hasCommand returns true for hasCommandTest notifications
        assert.isTrue(facade.hasCommand("facadeHasCommandTest") == true, "Expecting facade.hasCommand('facadeHasCommandTest') == true");

        // Remove the Command from the Controller
        facade.removeCommand("facadeTestCommand");

        // test that hasCommand returns false for hasCommandTest notifications
        assert.isTrue(facade.hasCommand("facadeTestCommand") == false, "Expecting facade.hasCommand('facadeHasCommandTest') == false");
    });

    /**
     * Tests the hasCore and removeCore methods
     */
    it("should testHasCoreAndRemoveCore", () => {
        // assert that the Facade.hasCore method returns false first
        assert.isTrue(puremvc.Facade.hasCore("FacadeTestKey11") == false, "Expecting facade.hasCore('FacadeTestKey11') == false");

        // register a Core
        puremvc.Facade.getInstance("FacadeTestKey11", key => new puremvc.Facade(key));

        // assert that the Facade.hasCore method returns true now that a Core is registered
        assert.isTrue(puremvc.Facade.hasCore("FacadeTestKey11") == true, "Expecting facade.hasCore('FacadeTestKey11') == true");

        // remove the Core
        puremvc.Facade.removeCore("FacadeTestKey11");

        // assert that the Facade.hasCore method returns false now that the core has been removed.
        assert.isTrue(puremvc.Facade.hasCore("FacadeTestKey11") == false, "Expecting facade.hasCore('FacadeTestKey11') == false");
    });

});


/**
 * A SimpleCommand subclass used by FacadeTest.
 *
 * @see FacadeTest
 * @see FacadeTestVO
 *
 * @class FacadeTestCommand
 * @extends puremvc.SimpleCommand
 */
class FacadeTestCommand extends puremvc.SimpleCommand {

    /**
     * Fabricate a result by multiplying the input by 2
     *
     * @param {puremvc.INotification} notification the Notification carrying the FacadeTestVO
     */
    execute(notification) {
        /** @type FacadeTestVO */
        let vo = notification.getBody();

        // Fabricate a result
        vo.result = 2 * vo.input;
    }

}


/**
 * A utility class used by FacadeTest.
 *
 * @class FacadeTestVO
 */
class FacadeTestVO {

    /**
     * @constructor
     * @param {number} input the number to be fed to the FacadeTestCommand
     */
    constructor(input) {
        this.input = input;
        this.result = 0;
    }

}


/**
 * Test the PureMVC SimpleCommand class.
 *
 * @see MacroCommandTestVO
 * @see MacroCommandTestCommand
 */
describe("MacroCommandTest", () => {

    /**
     * Tests operation of a <code>MacroCommand</code>.
     *
     * <P>This test creates a new <code>Notification</code>, adding a
     * <code>MacroCommandTestVO</code> as the body.
     * It then creates a <code>MacroCommandTestCommand</code> and invokes
     * its <code>execute</code> method, passing in the
     * <code>Notification</code>.</P>
     *
     * <P>The <code>MacroCommandTestCommand</code> has defined an
     * <code>initializeMacroCommand</code> method, which is
     * called automatically by its constructor. In this method
     * the <code>MacroCommandTestCommand</code> adds 2 SubCommands
     * to itself, <code>MacroCommandTestSub1Command</code> and
     * <code>MacroCommandTestSub2Command</code>.</P>
     *
     * <P>The <code>MacroCommandTestVO</code> has 2 result properties,
     * one is set by <code>MacroCommandTestSub1Command</code> by
     * multiplying the input property by 2, and the other is set
     * by <code>MacroCommandTestSub2Command</code> by multiplying
     * the input property by itself.</P>
     *
     * <P>Success is determined by evaluating the 2 result properties
     * on the <code>MacroCommandTestVO</code> that was passed to
     * the <code>MacroCommandTestCommand</code> on the Notification
     * body.</P>
     */
    it("should testMacroCommandExecute", () => {
        // Create the VO
        let vo = new MacroCommandTestVO(5);

        // Create the Notification (note)
        let note = new puremvc.Notification("MacroCommandTest", vo, "");

        // Create the SimpleCommand
        let command = new MacroCommandTestCommand();

         // Execute the SimpleCommand
         command.execute(note);

        // test assertions
        assert.isTrue(vo.result1 == 10, "Expecting vo.result1 == 10");
        assert.isTrue(vo.result2 == 25, "Expecting vo.result2 == 25")
    });

});


/**
 * A MacroCommand subclass used by MacroCommandTest.
 *
 * @see MacroCommandTest
 * @see MacroCommandTestSub1Command
 * @see MacroCommandTestSub2Command
 * @see MacroCommandTestVO
 *
 * @class MacroCommandTestCommand
 * @extends puremvc.MacroCommand
 */
class MacroCommandTestCommand extends puremvc.MacroCommand {

    /**
     * Initialize the MacroCommandTestCommand by adding
     * its 2 SubCommands.
     */
    initializeMacroCommand() {
        this.addSubCommand(() => new MacroCommandTestSub1Command());
        this.addSubCommand(() => new MacroCommandTestSub2Command());
    }

}


/**
 * A SimpleCommand subclass used by MacroCommandTestCommand.
 *
 * @see MacroCommandTest
 * @see MacroCommandTestCommand
 * @see MacroCommandTestVO
 *
 * @class MacroCommandTestSub1Command
 * @extends puremvc.SimpleCommand
 * @implements ICommand
 */
class MacroCommandTestSub1Command extends puremvc.SimpleCommand {

    /**
     * Fabricate a result by multiplying the input by 2
     *
     * @param {puremvc.INotification} notification event the <code>IEvent</code> carrying the <code>MacroCommandTestVO</code>
     */
    execute(notification) {
        /** @type MacroCommandTestVO */
        let vo = notification.body;

        // Fabricate a result
        vo.result1 = 2 * vo.input;
    }
}


/**
 * A SimpleCommand subclass used by MacroCommandTestCommand.
 *
 * @see MacroCommandTest
 * @see MacroCommandTestCommand
 * @see MacroCommandTestVO
 *
 * @class MacroCommandTestSub2Command
 * @extends puremvc.SimpleCommand
 * @implements ICommand
 */
class MacroCommandTestSub2Command extends puremvc.SimpleCommand {

    /**
     * Fabricate a result by multiplying the input by itself
     *
     * @param {puremvc.INotification} notification event the <code>IEvent</code> carrying the <code>MacroCommandTestVO</code>
     */
    execute(notification) {
        /** @type MacroCommandTestVO */
        let vo = notification.body;

        // Fabricate a result
        vo.result2 = vo.input * vo.input;
    }
}


/**
 * A utility class used by MacroCommandTest.
 *
 * @see MacroCommandTest
 * @see MacroCommandTestCommand
 * @see MacroCommandTestSub1Command
 * @see MacroCommandTestSub2Command
 *
 * @class MacroCommandTestVO
 */
class MacroCommandTestVO {

    /**
     * Constructor.
     *
     * @param {number} input the number to be fed to the MacroCommandTestCommand
     */
    constructor(input) {
        this.input = input;
        this.result1 = 0;
        this.result2 = 0;
    }

}


/**
 * Test the PureMVC SimpleCommand class.
 *
 * @see SimpleCommandTestVO
 * @see SimpleCommandTestCommand
 */
describe("SimpleCommandTest", () => {

    /**
     * Tests the <code>execute</code> method of a <code>SimpleCommand</code>.
     *
     * <P>This test creates a new <code>Notification</code>, adding a
     * <code>SimpleCommandTestVO</code> as the body.
     * It then creates a <code>SimpleCommandTestCommand</code> and invokes
     * its <code>execute</code> method, passing in the note.</P>
     *
     * <P>Success is determined by evaluating a property on the
     * object that was passed on the Notification body, which will
     * be modified by the SimpleCommand</P>.
     */
    it("should testSimpleCommandExecute", () => {
        // Create the VO
        let vo = new SimpleCommandTestVO(5);

        // Create the Notification (note)
        let note = new puremvc.Notification("SimpleCommandTestNote", vo, "");

        // Create the SimpleCommand
        let command = new SimpleCommandTestCommand();

        // Execute the SimpleCommand
        command.execute(note);

        // test assertions
        assert.isTrue(vo.getResult() === 10, "Expecting vo.result == 10");
    });

});


/**
 * A SimpleCommand subclass used by SimpleCommandTest.
 *
 * @class SimpleCommandTestCommand
 * @extends puremvc.SimpleCommand
 */
class SimpleCommandTestCommand extends puremvc.SimpleCommand {

    /**
     * Fabricate a result by multiplying the input by 2
     *
     * @param {puremvc.INotification} notification event the <code>INotification</code> carrying the <code>SimpleCommandTestVO</code>
     */
    execute(notification) {
        /** @type {SimpleCommandTestVO} */
        let vo = notification.body;

        // Fabricate a result
        vo.setResult(2 * vo.input);
    }

}


/**
 * A utility class used by SimpleCommandTest.
 *
 * @see SimpleCommandTest
 * @see SimpleCommandTestCommand
 *
 * @class SimpleCommandTestVO
 */
class SimpleCommandTestVO {

    /**
     * Constructor.
     *
     * @param {number} input the number to be fed to the SimpleCommandTestCommand
     */
    constructor(input) {
        this.input = input
    }

    /**
     *
     * @returns {number}
     */
    getResult() {
        return this.result;
    }

    /**
     *
     * @param {number} result
     */
    setResult(result) {
        this.result = result;
    }

}


/**
 * Test the PureMVC Mediator class.
 *
 * @see IMediator
 * @see Mediator
 */
describe("MediatorTest", () => {

    /**
     * Tests getting the name using Mediator class accessor method.
     */
    it("should testNameAccessor", () => {
        // Create a new Mediator and use accessors to set the mediator name
        let mediator = new puremvc.Mediator();

        // test assertions
        assert.equal(mediator.getMediatorName(), puremvc.Mediator.NAME, "Expecting mediator.getMediatorName() == Mediator.NAME");
    });

    /**
     * Tests getting the name using Mediator class accessor method.
     */
    it("should testViewAccessor", () => {
        // Create a view object
        let view = new Object();

        // Create a new Proxy and use accessors to set the proxy name
        let mediator = new puremvc.Mediator(puremvc.Mediator.NAME, view);

        // test assertions
        assert.isNotNull(mediator)
    });

});


/**
 * Test the PureMVC Notification class.
 *
 * @see Notification
 */
describe("NotificationTest", () => {

    /**
     * Tests setting and getting the name using Notification class accessor methods.
     */
    it("should testNameAccessors", () => {
        // Create a new Notification and use accessors to set the note name
        /** @type {puremvc.INotification} */
        let note = new puremvc.Notification("TestNote", null, "");

        // test assertions
        assert.isTrue(note.getName() === "TestNote", "Expecting note.getName() == 'TestNote'");
    });

    /**
     * Tests setting and getting the body using Notification class accessor methods.
     */
    it("should testBodyAccessors", () => {
        // Create a new Notification and use accessors to set the body
        let notification = new puremvc.Notification("TestNote", null, "");
        notification.setBody(5);

        // test assertions
        assert.isTrue(notification.getBody() === 5, "Expecting note.getBody()as Number == 5");
    });

    /**
     * Tests setting the name and body using the Notification class Constructor.
     */
    it("should testConstructor", () => {
        // Create a new Notification using the Constructor to set the note name and body
        let notification = new puremvc.Notification("TestNote", 5, "TestNoteType");

        // test assertions
        assert.isTrue(notification.getName() === "TestNote", "Expecting note.getName() == 'TestNote'");
        assert.isTrue(notification.getBody() === 5, "Expecting note.getBody() == 5");
        assert.isTrue(notification.getType() === "TestNoteType", "Expecting note.getType() == 'TestNoteType'");
    });

    /**
     * Tests the toString method of the notification
     */
    it("should testToString", () => {
        // Create a new Notification and use accessors to set the note name
        let notification = new puremvc.Notification("TestNote", [1,3,5], "TestType");
        let ts = "Notification Name: TestNote\nBody:1,3,5\nType:TestType";

        // test assertions
        assert.isTrue(notification.toString() === ts, "Expecting note.testToString() == '"+ts+"'");
    });

});


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


/**
 * Test the PureMVC Proxy class.
 *
 * @see IProxy
 * @see Proxy
 */
describe("ProxyTest", () => {

    /**
     * Tests getting the name using Proxy class accessor method. Setting can only be done in constructor.
     */
    it("should testNameAccessor", () => {
        // Create a new Proxy and use accessors to set the proxy name
        let proxy = new puremvc.Proxy("TestProxy", null);

        // test assertions
        assert(proxy.getProxyName() === "TestProxy", "Expecting proxy.getProxyName() == 'TestProxy'");

        let proxy2 = new puremvc.Proxy();

        // test assertions
        assert.isTrue(proxy2.getProxyName() === puremvc.Proxy.NAME, "Expecting proxy.getProxyName() == 'Proxy'");
    });

    it("should testDataAccessors", () => {
        // Create a new Proxy and use accessors to set the data
        let proxy = new puremvc.Proxy("colors", null);
        proxy.setData(["red", "green", "blue"]);
        let data = proxy.getData();

        // test assertions
        assert.equal(data.length, 3, "Expecting data.length == 3");
        assert.equal(data[0], "red", "Expecting data[0] == 'red'");
        assert.equal(data[1], "green", "Expecting data[1] == 'green'");
        assert.equal(data[2], "blue", "Expecting data[2] == 'blue'");
    });

    it("should testConstructor", () => {
        // Create a new Proxy using the Constructor to set the name and data
        let proxy = new puremvc.Proxy("colors", ["red", "green", "blue"]);
        let data = proxy.getData();

        // test assertions
        assert.equal(proxy.getProxyName(), "colors", "Expecting proxy.getProxyName() == 'colors'");
        assert.equal(data.length, 3, "Expecting data.length == 3");
        assert.equal(data[0], "red", "Expecting data[0] == 'red'");
        assert.equal(data[1], "green", "Expecting data[1] == 'green'");
        assert.equal(data[2], "blue", "Expecting data[2] == 'blue'");
    });

});


