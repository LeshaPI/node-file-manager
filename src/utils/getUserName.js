import { RUN_WITH_USERNAME, USER_NAME } from "./consts.js";
import { endSession } from "./endSession.js";

export const getUserName = () => {
    const args = process.argv.slice(2);
    
    if(!args.length || args.length > 1 || !args[0].includes(USER_NAME)){
        endSession(RUN_WITH_USERNAME);
    }

    const userName =  args[0].split('=');
    if(!userName[1]){
        endSession(RUN_WITH_USERNAME);
    }
    return userName[1];
}