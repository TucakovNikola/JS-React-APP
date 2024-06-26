// src/components/ContactForm.js

import React, { useState } from 'react';

const ContactForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    const newContact = {
      id: Math.floor(Math.random() * 1000),
      name: name,
      phone: phone,
    };
    onAdd(newContact);
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
