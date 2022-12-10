import { endSession } from "./endSession.js";

export const startProcess = (data, goodbyeMsg) => {
    const correctData = data.toString().trim();
    if(correctData === '.exit') endSession(goodbyeMsg);
}