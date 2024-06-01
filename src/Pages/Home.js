import React from 'react';
import { Link } from 'react-router-dom';
import matheus from '../assets/pexels-matheus-cenali-2733918.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'style={{ backgroundImage: `url(${matheus})`}}>
      <div className='headerContainer'>
        <h1>Online grocery shopping </h1>
        <p>Making grocery shopping easier</p>

        <Link to="/menu">
        <button>Click here for more products</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
