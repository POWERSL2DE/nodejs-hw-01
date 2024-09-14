import { createFakeContact } from '../utils/createFakeContact.js';
// import getAllContacts from './getAllContacts.js';
import writeContacts from '../utils/writeContacts.js';
import readContacts from '../utils/readContacts.js';

export const addOneContact = async () => {
    const contactList  = await readContacts();
    const newContactList = createFakeContact();
    contactList.push(newContactList);
    await writeContacts(contactList);
};

addOneContact();
