import React, { useState } from 'react';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  //register event handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setRegistrationMessage('Please enter both email and password.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/users/register', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      setRegistrationMessage('Registration successful. You can now login.');
      //clear fields after registering
      setEmail(''); 
      setPassword(''); 

      console.log('User registered successfully');
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };
  //rendering registration form
  return (
    <div className="fade-in">
      {registrationMessage && <p>{registrationMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </div>
        <div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
