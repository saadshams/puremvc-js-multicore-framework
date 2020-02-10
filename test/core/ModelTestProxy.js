/**
 * @class ModelTestProxy
 */
class ModelTestProxy extends puremvc.Proxy {

    constructor() {
        super(ModelTestProxy.NAME, "");
    }

    onRegister() {
        this.setData(ModelTestProxy.ON_REGISTER_CALLED)
    }

    onRemove() {
        this.setData(ModelTestProxy.ON_REMOVE_CALLED)
    }

    static get ON_REGISTER_CALLED() { return "onRegister Called" }

    static get ON_REMOVE_CALLED() { return "onRemove Called" }

    static get NAME() { return "ModelTestProxy" }

}