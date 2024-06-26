// src/App.js

import React, { useState } from 'react';
import ContactList from './components/contactlist';
import ContactForm from './components/contactform';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210' },
  ]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleUpdateContact = (updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <ContactForm onAdd={handleAddContact} />
      <ContactList
        contacts={contacts}
        onDelete={handleDeleteContact}
        onUpdate={handleUpdateContact}
      />
    </div>
  );
}

export default App;
