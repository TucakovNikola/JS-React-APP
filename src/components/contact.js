// src/components/Contact.js

import React, { useState } from 'react';

const Contact = ({ id, name, phone, onDelete, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedPhone, setUpdatedPhone] = useState(phone);

  const handleUpdate = () => {
    onUpdate({ id, name: updatedName, phone: updatedPhone });
    setEditMode(false);
  };

  return (
    <div className="contact">
      {editMode ? (
        <div>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="text"
            value={updatedPhone}
            onChange={(e) => setUpdatedPhone(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>{name}</p>
          <p>{phone}</p>
          <button onClick={() => onDelete(id)}>Delete</button>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Contact;
