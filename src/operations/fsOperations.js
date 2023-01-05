import { OPERATION_FAILED } from '../utils/consts.js';
import { createReadStream, createWriteStream } from 'fs';
import { writeFile, rename, unlink } from 'node:fs/promises';
import { isExist } from '../components/isExist.js';
import { join, resolve, parse} from 'path';
import { pipeline } from 'stream/promises';


export const read = async (path) => {

    const correctPath = resolve(...path);


    const readStream = createReadStream(correctPath);

    try {
        readStream.on('data', chunk => {
          console.log(chunk.toString());
        });

        readStream.on('error', () => {
            console.log(OPERATION_FAILED);
        })
    } catch  {
        console.log(OPERATION_FAILED);
    }

};


export const create = async (path) => {

    const correctPath = resolve(...path);


    try {
        if(await isExist(correctPath)){
            
            console.log(OPERATION_FAILED);

        }else{
            await writeFile(correctPath, '')
            console.log('created')
        }
    } catch(e) {
        console.log(OPERATION_FAILED);
    };
    
};


export const renameFile = async (pathes) => {

    let [oldName, newName ] = pathes;
    if(newName){
        oldName = resolve(oldName);
        const { dir } = parse(oldName);
        const newPath = join(dir, newName);         
        try {
          await rename(oldName, newPath);
          console.log('renamed');
        } catch {
          console.log(OPERATION_FAILED);
        }
    }else{
        console.log(OPERATION_FAILED);
    }
    
}


export const copy = async(pathes) => {

    let [orgignalFile, newFile] = pathes;
    if(newFile){
        orgignalFile = resolve(orgignalFile);
        const { dir } = parse(orgignalFile);
        const newPath = join(dir, newFile);
        

        try {

            if(await isExist(newPath)){
                console.log(OPERATION_FAILED);
            }else{
                createReadStream(orgignalFile).pipe(createWriteStream(newPath));
                console.log('copied');
            }
            
        } catch(e) {
            console.log(OPERATION_FAILED);
        }

    }else{
        console.log(OPERATION_FAILED);
    }

}

export const move = async(pathes) => {

    let [pathToFile, pathToDir] = pathes;
    const {base} = parse(pathToFile);
    const correctPathToFile = resolve(pathToFile);
    const correctNewDir = resolve(pathToDir, base);

    const readable = createReadStream(correctPathToFile);
	const writable = createWriteStream(correctNewDir);

    try {
        await pipeline(readable, writable);
        await unlink(correctPathToFile);
        console.log('Moved')

    }catch {
      console.log(OPERATION_FAILED);
    }

} 

export const delite = async(path) => {
    const correctPAth = resolve(...path);

    try {
        await unlink(correctPAth);
        console.log('deleted')
    } catch{
      console.log(OPERATION_FAILED);
    }
};
