/**
 * @class FacadeTestCommand
 * @extends puremvc.SimpleCommand
 */
class FacadeTestCommand extends puremvc.SimpleCommand {

    execute(notification) {
        /** @type FacadeTestVO */
        let vo = notification.getBody();

        // Fabricate a result
        vo.result = 2 * vo.input;
    }

}