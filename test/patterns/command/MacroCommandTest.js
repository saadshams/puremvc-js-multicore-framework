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
