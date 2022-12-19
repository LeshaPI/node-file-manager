import { resolve, parse } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';
import { OPERATION_FAILED } from '../utils/consts.js';




export const compress = async(pathes) => {
    let [pathToFile, pathToDestination] = pathes;
    const resolvedPathToFile = resolve(pathToFile);
    const { base } = parse(resolvedPathToFile);
    const resolvedPathToDestination = resolve(pathToDestination + `${base}.br`);
    const brotliCompress = createBrotliCompress();
    const readStream = createReadStream(resolvedPathToFile);
    const writeStream = createWriteStream(resolvedPathToDestination);

    try {
        await pipeline(readStream, brotliCompress, writeStream);
    } catch  {
        console.log(OPERATION_FAILED);
    }

}

export const decompress = async( pathes ) => {
    let [pathToFile, pathToDestination] = pathes
    const resolvedPathToFile = resolve(pathToFile);
    const resolvedPathToDestination = resolve(pathToDestination, parse(pathToFile).name);

    console.log(resolvedPathToDestination);
    const brotliDecompress = createBrotliDecompress();
    const writeStream = createWriteStream(resolvedPathToDestination);
    const readStream = createReadStream(resolvedPathToFile);

    try {
        await pipeline(readStream, brotliDecompress, writeStream);
    } catch{
        console.log(OPERATION_FAILED);
    }
}