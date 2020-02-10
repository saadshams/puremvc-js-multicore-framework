describe("ControllerTest", () => {

    it("should testGetInstance", () => {
        // Test Factory Method
        let controller = puremvc.Controller.getInstance("ControllerTestKey1", key => new puremvc.Controller(key));

        // test assertions
        assert.isNotNull(controller);
    });

    it("should testRegisterAndExecuteCommand", () => {
        let controller = puremvc.Controller.getInstance("ControllerTestKey2", key => new puremvc.Controller(key));

        controller.registerCommand("ControllerTest", () => new ControllerTestCommand());

        let vo = new ControllerTestVO(12);
        let note = new puremvc.Notification("ControllerTest", vo);

        controller.executeCommand(note);

        assert.isTrue(vo.result == 24, "Expected vo.result == 24");
    });

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