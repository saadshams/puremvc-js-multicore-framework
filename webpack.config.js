const path = require("path");
const RawBundlerPlugin = require("webpack-raw-bundler");

module.exports = {
    entry: "./src/header.txt",
    output: {
        filename: "puremvc-2.0.0.js",
        path: path.resolve(__dirname, "bin")
    },
    module: {
        rules: [
            { test: /\.txt$/, use: "raw-loader" }
        ]
    },
    plugins: [
        new RawBundlerPlugin({
            readEncoding: "utf-8",
            bundles: [ "puremvc-2.0.0.js", "puremvc-2.0.0-test.js" ],
            "puremvc-2.0.0.js": [
                "src/header.txt",
                "src/interfaces/ICommand.js",
                "src/interfaces/IController.js",
                "src/interfaces/IFacade.js",
                "src/interfaces/IMediator.js",
                "src/interfaces/IModel.js",
                "src/interfaces/INotification.js",
                "src/interfaces/INotifier.js",
                "src/interfaces/IObserver.js",
                "src/interfaces/IProxy.js",
                "src/interfaces/IView.js",
                "src/core/Controller.js",
                "src/core/Model.js",
                "src/core/View.js",
                "src/patterns/observer/Notification.js",
                "src/patterns/observer/Notifier.js",
                "src/patterns/observer/Observer.js",
                "src/patterns/facade/Facade.js",
                "src/patterns/command/SimpleCommand.js",
                "src/patterns/command/MacroCommand.js",
                "src/patterns/mediator/Mediator.js",
                "src/patterns/proxy/Proxy.js",
                "src/footer.txt"
            ],
            "puremvc-2.0.0-test.js": [
                "test/header.txt",
                "test/core/ControllerTest.js",
                "test/core/ControllerTestCommand.js",
                "test/core/ControllerTestCommand2.js",
                "test/core/ControllerTestVO.js",
                "test/core/ModelTest.js",
                "test/core/ModelTestProxy.js",
                "test/core/ViewTest.js",
                "test/core/ViewTestMediator.js",
                "test/core/ViewTestMediator2.js",
                "test/core/ViewTestMediator3.js",
                "test/core/ViewTestMediator4.js",
                "test/core/ViewTestMediator5.js",
                "test/core/ViewTestMediator6.js",
                "test/core/ViewTestNote.js",
                "test/patterns/facade/FacadeTest.js",
                "test/patterns/facade/FacadeTestCommand.js",
                "test/patterns/facade/FacadeTestVO.js",
                "test/patterns/command/MacroCommandTest.js",
                "test/patterns/command/MacroCommandTestCommand.js",
                "test/patterns/command/MacroCommandTestSub1Command.js",
                "test/patterns/command/MacroCommandTestSub2Command.js",
                "test/patterns/command/MacroCommandTestVO.js",
                "test/patterns/command/SimpleCommandTest.js",
                "test/patterns/command/SimpleCommandTestCommand.js",
                "test/patterns/command/SimpleCommandTestVO.js",
                "test/patterns/mediator/MediatorTest.js",
                "test/patterns/observer/NotificationTest.js",
                "test/patterns/observer/ObserverTest.js",
                "test/patterns/proxy/ProxyTest.js"
            ]
        })
    ],
    mode: "none"
};