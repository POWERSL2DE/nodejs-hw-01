import *  as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';


const getAllContacts = async () => {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8'} );
    return JSON.parse(data);
};


getAllContacts()
  .then((data) => data)
  .catch((error) => console.error(error));


console.log(await getAllContacts());

export default getAllContacts;
