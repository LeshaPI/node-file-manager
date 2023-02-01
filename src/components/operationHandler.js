import { ls } from "../operations/list.js";
import { cd, up } from "../operations/navigation.js"
import { showCurrentPath } from "./currentPath.js";
import { separateArg } from "./separateArg.js";
import { read, create, renameFile, copy, move, delite } from "../operations/fsOperations.js";
import { normalizePath } from "./normalizePath.js";
import { osOperation } from "../operations/osOperations.js";
import { OPERATION_FAILED, OPERTIONS_CLI } from "../utils/consts.js";
import { compress, decompress } from "../operations/compressOperations.js";
import { calculateHash } from "../operations/hash.js";

export const operationHandler = ( operation ) => {

    const err = separateArg(operation);
    const [op , ...args] = normalizePath(operation);


    if(!err){
        try {
          
            switch(op){
                case OPERTIONS_CLI.up: up();
                break;
                case OPERTIONS_CLI.cd: cd(args);
                break;
                case OPERTIONS_CLI.ls: ls();
                break;
                case OPERTIONS_CLI.cat: read(args); 
                break;
                case OPERTIONS_CLI.add: create(args);
                break;
                case OPERTIONS_CLI.rm: renameFile(args);
                break;
                case OPERTIONS_CLI.cp: copy(args);
                break;
                case OPERTIONS_CLI.mv: move(args);
                break;
                case OPERTIONS_CLI.rm: delite(args);
                break;
                case OPERTIONS_CLI.os: osOperation(args);
                break
                case OPERTIONS_CLI.compress: compress(args);
                break;
                case OPERTIONS_CLI.decompress: decompress(args);
                break;
                case OPERTIONS_CLI.hash: calculateHash(args);
                break;
            }
  
        } catch (error) {
           console.log(OPERATION_FAILED);  
        }   
    }
    
    showCurrentPath();
}