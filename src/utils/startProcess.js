import { endSession } from "./endSession.js";
import { operationHandler } from "./operationHandler.js";

export const startProcess = (data, goodbyeMsg) => {
    const correctData = data.toString().trim();
    if(correctData === '.exit') endSession(goodbyeMsg);
    operationHandler(correctData);
}