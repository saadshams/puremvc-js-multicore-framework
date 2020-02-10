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

    it("should testHasProxy", () => {
        // register a Proxy
        let facade = puremvc.Facade.getInstance("FacadeTestKey7", key => new puremvc.Facade(key));
        facade.registerProxy(new puremvc.Proxy("hasProxyTest", [1, 2, 3]));

        // assert that the model.hasProxy method returns true
        // for that proxy name
        assert.isTrue(facade.hasProxy("hasProxyTest") == true, "Expecting facade.hasProxy('hasProxyTest') == true");
    });

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