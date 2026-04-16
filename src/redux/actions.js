
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const SET_CONTACTS = "SET_CONTACTS";


export const SET_FILTER = "SET_FILTER";


export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});


export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});


export const setContacts = (contacts) => ({
  type: SET_CONTACTS,
  payload: contacts,
});

export const setFilter = (value) => ({
  type: SET_FILTER,
  payload: value,
});