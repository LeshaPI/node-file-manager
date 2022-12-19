import { ls } from "../operations/list.js";
import { cd, up } from "../operations/navigation.js"
import { showCurrentPath } from "./currentPath.js";
import { separateArg } from "./separateArg.js";
import { read, create, renameFile, copy, move, delite } from "../operations/fsOperation.js";
import { normalizePath } from "./normalizePath.js";
import { osOperation } from "../operations/osOperation.js";

export const operationHandler = ( operation ) => {

    const err = separateArg(operation);
    const [op , ...args] = normalizePath(operation);


    if(!err){
      try {
        
        switch(op){
            case 'up': up();
            break;
            case 'cd': cd(args);
            break;
            case 'ls': ls();
            break;
            case 'cat': read(args); 
            break;
            case 'add': create(args);
            break;
            case 'rn': renameFile(args);
            break;
            case 'cp': copy(args);
            break;
            case 'mv': move(args);
            break;
            case 'rm': delite(args);
            break;
            case 'os': osOperation(args);
            break
        }

    } catch (error) {
        
    }   
    }
    
    showCurrentPath();
}