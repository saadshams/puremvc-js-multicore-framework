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
