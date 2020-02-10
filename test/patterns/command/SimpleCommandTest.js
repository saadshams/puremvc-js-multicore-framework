describe("SimpleCommandTest", () => {

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
        assert.isTrue(vo.getResult() == 10, "Expecting vo.result == 10");
    });

});