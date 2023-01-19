import { ls } from "../operations/list.js";
import { cd, up } from "../operations/navigation.js"
import { showCurrentPath } from "./currentPath.js";
import { separateArg } from "./separateArg.js";
import { read, create, renameFile, copy, move, delite } from "../operations/fsOperations.js";
import { normalizePath } from "./normalizePath.js";
import { osOperation } from "../operations/osOperations.js";
import { OPERATION_FAILED } from "../utils/consts.js";
import { compress, decompress } from "../operations/compressOperations.js";
import { calculateHash } from "../operations/hash.js";

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
                case 'compress': compress(args);
                break;
                case 'decompress': decompress(args);
                break;
                case 'hash': calculateHash(args);
                break;
            }
  
        } catch (error) {
           console.log(OPERATION_FAILED);  
        }   
    }
    
    showCurrentPath();
}