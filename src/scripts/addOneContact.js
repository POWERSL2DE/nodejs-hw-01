import { createFakeContact } from '../utils/createFakeContact.js';
import getAllContacts from './getAllContacts.js';
import writeContacts from '../utils/writeContacts.js';

export const addOneContact = async () => {
    const contactList  = await getAllContacts();
    const newContactList = createFakeContact();
    contactList.push(newContactList);
    await writeContacts(contactList);
};

addOneContact();
