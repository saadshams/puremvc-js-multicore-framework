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