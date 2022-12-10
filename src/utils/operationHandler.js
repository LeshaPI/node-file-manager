import { cd, up } from "../operations/navigation.js"
import { showCurrentPath } from "./currentPath.js";
import { separateArg } from "./separateArg.js";

export const operationHandler = ( operation ) => {

    const err = separateArg(operation);
    const [opp, ...args] = operation.split(' ');

    if(!err){
      try {
        
        switch(opp){
            case 'up': up();
            break;
            case 'cd': cd(args);
            break;
        }
    } catch (error) {
        
    }   
    }
    
    
    showCurrentPath();
}