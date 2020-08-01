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
