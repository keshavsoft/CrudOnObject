const { StartFunc: StartFuncFromObjectCrud } = require("./ObjectCrud/entryFile");

const StartFunc = () => {
    StartFuncFromObjectCrud();
};

module.exports = { StartFunc };