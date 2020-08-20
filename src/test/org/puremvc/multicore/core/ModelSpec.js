import { Model, View } from "org.puremvc.multicore"
import chai from "chai"

describe("ModelTest", () => {
  it("should testGetInstance", () => {
      // Test Factory Method
      let model = Model.getInstance("ModelTestKey1", key => new Model(key));
      let view = View.getInstance("ViewTestKey1", key => new View(key))

      // test assertions
      chai.assert.isNotNull(model, "Expecting instance not null");
      chai.assert.isNotNull(view, "Expecting instance not null")
  });
});
