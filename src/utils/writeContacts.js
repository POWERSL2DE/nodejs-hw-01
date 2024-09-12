import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
// import readContacts from './readContacts.js';


const writeContacts = async (updatedContacts) => {
    // updatedContacts = JSON.parse(readContacts);

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));

};

export default writeContacts;
