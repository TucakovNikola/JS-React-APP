// src/components/ContactList.js

import React from 'react';
import Contact from './contact';

const ContactList = ({ contacts, onDelete, onUpdate }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          phone={contact.phone}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default ContactList;
