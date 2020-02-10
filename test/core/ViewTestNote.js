/**
 *
 * @extends Notification
 * @implements INotification
 */
class ViewTestNote extends puremvc.Notification {

    /**
     *
     * @param {string} name
     * @param {Object} body
     */
    constructor(name, body) {
        super(name, body);
    }

    /**
     *
     * @param {Object} body
     * @static
     * @returns {ViewTestNote}
     */
    static create(body) {
        return new ViewTestNote(ViewTestNote.NAME, body)
    }

    static get NAME() { return "ViewTestNote" }
}