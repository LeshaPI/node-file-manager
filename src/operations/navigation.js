import {join, resolve , parse } from 'path';
import { INCORECT_PATH } from '../utils/consts.js';

export const up = () => {
    const newPath = join(process.cwd(), '..');
    process.chdir(newPath);
}

export const cd = (path) => {
    const correctPath = resolve(...path);
    
    try {
        process.chdir(correctPath);
    } catch {
        console.log(INCORECT_PATH);
    }
};