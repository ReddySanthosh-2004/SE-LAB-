import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './css/LoginPage.css';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', phone: '' });
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({ phone: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Phone validation: must be exactly 10 digits
    if (name === 'phone') {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(value)) {
        setFieldErrors((prev) => ({ ...prev, phone: 'Phone number must be exactly 10 digits' }));
      } else {
        setFieldErrors((prev) => ({ ...prev, phone: '' }));
      }
    }

    // Password validation: must contain one special character, one uppercase letter
    if (name === 'password') {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;
      if (!passwordRegex.test(value)) {
        setFieldErrors((prev) => ({ ...prev, password: 'Password must contain at least one uppercase letter and one special character' }));
      } else {
        setFieldErrors((prev) => ({ ...prev, password: '' }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.error(process.env.REACT_APP_BACKEND_URL);

    // Check for form-level errors before submitting
    if (fieldErrors.phone || fieldErrors.password) {
      setError('Please fix the errors in the form');
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/register`, formData);
      alert('User registered successfully! Redirecting to login page');
      navigate('/login');
    } catch (error) {
      console.error('Error registering user', error);
      if (error.response) {
        setError(error.response.data.error);
      } else if (error.request) {
        setError('Server did not respond. Please try again later.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container" style={{ marginTop: -200 }}>
        <h2>Enter details below to Create a user</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-inputs">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
            />
            {fieldErrors.phone && <div className="error-message">{fieldErrors.phone}</div>}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            {fieldErrors.password && <div className="error-message">{fieldErrors.password}</div>}
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">Register</button>
        </form>
        <p>Back to <Link to="/login" className="html-link">Login</Link> page</p>
      </div>
    </div>
  );
};

export default Register;
