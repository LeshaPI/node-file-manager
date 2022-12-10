import { getUserName } from "./utils/getUserName.js";
import { homedir } from 'os';
import { stdin, stdout, chdir  } from "process";
import { startProcess } from "./utils/startProcess.js";
import { endSession } from "./utils/endSession.js";
import { showCurrentPath } from "./utils//currentPath.js";


const userName = getUserName();
const SAY_HELLO = `Welcome to the File Manager, ${userName}!`;
const SAY_GOODBYE = `Thank you for using File Manager, ${userName}, goodbye!`;

chdir(homedir());
console.log(SAY_HELLO);
showCurrentPath();

stdin.on('data', data => 
  startProcess(data, SAY_GOODBYE )
);

process.on('SIGINT', () => 
  endSession(SAY_GOODBYE)
);