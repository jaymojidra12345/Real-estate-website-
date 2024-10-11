// import React from "react";

// const Contact = () => {
//   return <div>Contact</div>;
// };

// export default Contact;

import React, { useEffect, useState } from 'react';
import './Contact.css';  // Include the CSS file for styling

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from your Django API endpoint
    fetch('http://127.0.0.1:8000/api/contacts/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        return response.json();
      })
      .then((data) => setContacts(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="contact-page">
      <h1>Contact List</h1>
      {error && <p className="error">{error}</p>}
      <div className="contact-grid">
        {contacts.map((contact) => (
          <div key={contact.id} className="contact-card">
            <h2>{contact.name}</h2>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Subject:</strong> {contact.subject}</p>
            <p><strong>Message:</strong> {contact.message}</p>
            <p><em>Contact Date: {new Date(contact.contact_date).toLocaleDateString()}</em></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
