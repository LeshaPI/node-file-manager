import { OS_OPERATION , INVALID_INPUT } from "../utils/consts.js";
import {EOL, cpus, homedir , userInfo, arch} from 'os';

const calculateCpus = () => {
    console.log('Overall amount of CPUS: ' + cpus().length)
    cpus().forEach(elem => {
        console.log(`Speed: ${elem.speed}, cpu: ${elem.model}`);
    })
}

export const osOperation = (op) => {

    const strOP = op.toString();

    if (!OS_OPERATION.includes(strOP)) {
        console.log(INVALID_INPUT); 
        return;
	}

 

    switch(strOP){
        case '--EOL': console.log(JSON.stringify(EOL));
        break;
        case '--cpus': calculateCpus();
        break;
        case '--homedir': console.log(homedir());
        break;  
        case '--username': console.log(userInfo().username);
        break;
        case '--architecture': console.log(arch());
        break;
    }
    
}