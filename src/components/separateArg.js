import { ENTER_A_PATH, INVALID_INPUT, OPERTIONS } from "../utils/consts.js";

export const separateArg = (arg) => {
    const [opp, ...pathes] = arg.split(' ');
	let err = '';

    if (!OPERTIONS.includes(opp)) {
        console.log(INVALID_INPUT); 
        return;
	}

	switch (opp) {
		case 'up':
		case 'ls':
			if (pathes.length) {
                console.log(INVALID_INPUT);
				err = INVALID_INPUT;
			}
			break;
		case 'cd':
		case 'os':
			if (!pathes.length) {
                console.log(ENTER_A_PATH);
				err = ENTER_A_PATH;
			}
		break;
	}

	return err;
}