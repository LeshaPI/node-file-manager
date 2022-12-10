import { getUserName } from "./utils/getUserName.js";
import { homedir } from 'os';
import { stdin, stdout, chdir  } from "process";
import { startProcess } from "./utils/startProcess.js";
import { endSession } from "./utils/endSession.js";


const userName = getUserName();
const SAY_HELLO = `Welcome to the File Manager, ${userName}!`;
const SAY_GOODBYE = `Thank you for using File Manager, ${userName}, goodbye!`;
const CURRENT_PATH_MESSAGE = () => `You are currently in ${process.cwd()}`;

chdir(homedir());
console.log(SAY_HELLO);
console.log(CURRENT_PATH_MESSAGE());

stdin.on('data', data => 
  startProcess(data, SAY_GOODBYE )
);

process.on('SIGINT', () => 
  endSession(SAY_GOODBYE)
);