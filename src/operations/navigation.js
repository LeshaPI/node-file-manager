import {join, resolve, win32 } from 'path';
import { OPERATION_FAILED } from '../utils/consts.js';

export const up = () => {
    const newPath = join(process.cwd(), '..');
    process.chdir(newPath);
}

export const cd = (path) => {
    const correctPath = resolve(...path);
    
    try {
        process.chdir(correctPath);
    } catch {
        console.log(OPERATION_FAILED);
    }
};