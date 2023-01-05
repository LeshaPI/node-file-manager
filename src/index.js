import { getUserName } from "./components/getUserName.js";
import { homedir } from 'os';
import { stdin,  chdir  } from "process";
import { endSession } from "./components/endSession.js";
import { showCurrentPath } from "./components/currentPath.js";
import { operationHandler } from "./components/operationHandler.js";



const userName = getUserName();
const SAY_HELLO = `Welcome to the File Manager, ${userName}!`;
const SAY_GOODBYE = `Thank you for using File Manager, ${userName}, goodbye!`;

chdir(homedir());
console.log(SAY_HELLO);
showCurrentPath();

stdin.on('data', data => {
  const correctData = data.toString().trim();
  if(correctData === '.exit') endSession(SAY_GOODBYE);
  operationHandler(correctData);
});

process.on('SIGINT', () => 
  endSession(SAY_GOODBYE)
); 