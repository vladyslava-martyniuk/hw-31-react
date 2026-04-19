import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { ContactsEditor } from "./components/ContactsEditor/ContactsEditor";
import { ContactsList } from "./components/ContactsList/ContactsList";
import { Filter } from "./components/Filter/Filter";

import { addContact, deleteContact } from "./redux/contacts/contactsSlice";
import { setFilter } from "./redux/filters/filtersSlice";

function App() {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const handleAddContact = ({ name, number }) => {
    const exists = contacts.some(
      (c) => c.name.toLowerCase() === name.toLowerCase()
    );

    if (exists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(
      addContact({
        id: `id-${Date.now()}`,
        name,
        number,
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Phonebook</h1>

      <ContactsEditor onSubmit={handleAddContact} />

      <h2>Contacts</h2>

      <Filter
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />

      <ContactsList
        contacts={filteredContacts}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;