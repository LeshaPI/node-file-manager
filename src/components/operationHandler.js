import { ls } from "../operations/list.js";
import { cd, up } from "../operations/navigation.js"
import { showCurrentPath } from "./currentPath.js";
import { separateArg } from "./separateArg.js";
import { read, create, renameFile, copy, move, delite } from "../operations/fsOperation.js";

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
            case 'cat': read(path); 
            break;
            case 'add': create(path);
            break;
            case 'rn': renameFile(path);
            break;
            case 'cp': copy(path);
            break;
            case 'mv': move(path);
            break;
            case 'rm': delite(path);
            break;
        }

    } catch (error) {
        
    }   
    }
    
    showCurrentPath();
}