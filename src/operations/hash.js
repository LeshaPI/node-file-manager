import { resolve } from 'path';
import { OPERATION_FAILED } from '../utils/consts.js';
import { readFile } from 'fs/promises';


export const calculateHash = async(path) =>{
    const correctPath = resolve(...path);
    const { createHash } = await import('crypto');
    const hash = createHash('sha256');

    try {
        const file = await readFile(correctPath, {encoding: 'utf-8'});
        const result = hash.update(file).digest('hex');
        console.log(result);
    } catch {
        console.log(OPERATION_FAILED)
    }
}