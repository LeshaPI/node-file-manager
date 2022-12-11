import { regPath } from "../utils/reg.js"

export const getCorrectPath = (path) => {

    const correcPath = path.match(regPath).map(x => x.trim());
    console.log(correcPath);
}