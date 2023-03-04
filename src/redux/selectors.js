export const getContacts = state => state.contacts.contacts;

export const getFilterValue = state => state.filter.value;

export const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filterContacts = getFilterValue(state).toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContacts)
  );
};
