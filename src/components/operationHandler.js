import { ls } from "../operations/list.js";
import { cd, up } from "../operations/navigation.js"
import { showCurrentPath } from "./currentPath.js";
import { separateArg } from "./separateArg.js";

export const operationHandler = ( operation ) => {

    const err = separateArg(operation);
    const [op , ...path] = operation.split(' ');

    if(!err){
      try {
        
        switch(op){
            case 'up': up();
            break;
            case 'cd': cd(path);
            break;
            case 'ls': ls();
            break;
        }

    } catch (error) {
        
    }   
    }
    
    showCurrentPath();
}