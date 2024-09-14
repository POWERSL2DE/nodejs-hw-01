// import getAllContacts from './getAllContacts.js';
import writeContacts from '../utils/writeContacts.js';
import readContacts from '../utils/readContacts.js';

export const removeLastContact = async () => {
    const contactList = await readContacts();
    contactList.pop();
    await writeContacts(contactList);
};

removeLastContact();
