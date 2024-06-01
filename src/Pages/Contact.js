import React, { useState } from 'react';
import Input from '../Components/Input';
import '../styles/Contact.css';
import strawberry from '../assets/pexels-strawberry.jpg';

const Contact = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (credentials.username === 'dea.simnica' && credentials.password === '123') {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCredentials({
      username: '',
      password: ''
    });
  };

  return (
    <section className="contact">
      <div className="leftSide">
        <img src={strawberry} alt='strawberry' />
      </div>
      <div className="rightSide">
        <div className="login-form">
          <h3>Here you can Login</h3>
          <form onSubmit={handleLogin}>
            <input 
              type="text"
              name="username"
              placeholder="Username"
              value={credentials.username}
              onChange={handleChange}
            />
            <input 
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
        <div>
          <h2>Contact info</h2>
          <p>Here you can contact and visit us</p>
          <address>
            Location: Kosova, Prishtine<br />
            Street: Dardania, Rexhep Krasniqi <br />
            Phone: 383-45-321-123 <br />
            Email: onlineshop@gmail.com <br />
            <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.5582144145565!2d21.15394542884454!3d42.65327781461842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549f069911e159%3A0xf2369798b9ee240!2sBill%20Clinton%20Statue!5e0!3m2!1sen!2s!4v1710947583952!5m2!1sen!2s"
        ></iframe>
          </address>
        </div>
      </div>
    </section>
  );
};

export default Contact;
