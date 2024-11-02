import React from 'react';

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>
      <p style={styles.paragraph}>
        We would love to hear from you! If you have any questions, concerns, or feedback,
        feel free to reach out to us.
      </p>
      
      <div style={styles.contactDetails}>
        
    
        <h3>Location: 123 Pet Street, Animal City, 45678</h3>
        <h3>Mobile Number: (123) 456-7890</h3>
      </div>
      
      <p style={styles.footer}>
        Thank you for your interest in our app!
      </p>
    </div>
  );
};

// Basic inline styles for a cleaner look
const styles = {
  container: {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '2.5rem',
    color: '#343a40',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#6c757d',
  },
  contactDetails: {
    margin: '20px 0',
  },
  footer: {
    fontSize: '1rem',
    color: '#6c757d',
  },
};

export default ContactUs; 