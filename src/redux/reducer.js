import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CONTACTS,
  SET_FILTER, // 👈 додай
} from "./actions";

const initialState = {
  contacts: [],
  filter: "", // 👈 додай
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };

    case SET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };

    case SET_FILTER: 
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};