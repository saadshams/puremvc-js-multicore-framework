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

    it("should testViewAccessor", () => {
        // Create a view object
        let view = new Object();

        // Create a new Proxy and use accessors to set the proxy name
        let mediator = new puremvc.Mediator(puremvc.Mediator.NAME, view);

        // test assertions
        assert.isNotNull(mediator)
    });

});