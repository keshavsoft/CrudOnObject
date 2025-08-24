const { StartFunc: StartFuncFromObjectCrud } = require("./ObjectCrud/entryFile");
const { StartFunc: StartFuncFromAsync } = require("./Async/entryFile");

const StartFunc = () => {
    StartFuncFromObjectCrud();
    StartFuncFromAsync();
};

module.exports = { StartFunc };