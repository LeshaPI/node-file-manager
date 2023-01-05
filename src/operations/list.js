import { readdir } from 'fs/promises';

export const ls = async() => {
    const dirPath = process.cwd();
    const dirContent = await readdir(dirPath, {withFileTypes:true});

    const dir = [];
    const file = [];

    dirContent.forEach(element => {
        if(element.isFile()){
            const result = {
                name: element.name,
                type: 'file',
            }
            file.push(result);
        }else{
            const result = {
                name: element.name,
                type: 'directory',
            }
            dir.push(result);
        }
    });

    const resultArray = [...dir, ...file];

    console.table(resultArray);
};