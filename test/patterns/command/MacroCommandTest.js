describe("MacroCommandTest", () => {

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