import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';


const readContacts = async () => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const readData =  JSON.parse(data);
    readData.shift();

};

export default readContacts;
