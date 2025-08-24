import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = async () => {
    let LocalFromLowDb = await StartFuncFromReadFromFile();

    return await LocalFromLowDb;
};

export {
    GetFunc
};