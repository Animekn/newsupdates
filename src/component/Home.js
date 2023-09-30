import React from 'react';
import './home.css';
import {Link} from 'react-router-dom' 
const App = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    minHeight: '100vh',
    backgroundImage: `url('./background-image.jpeg')`, // Adjust the path accordingly
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className="page">
    <div className="layout">
      <h1>Country~News</h1>
      <p>
      Welcome to County~News, where we bring the world to your fingertips. At County~News, we specialize in delivering the latest news across a spectrum of categories. From thrilling sports action and captivating entertainment to the pulse of politics, global news, and the wonders of science and technology, we're your trusted source for staying informed.

With a unique focus on India, we provide comprehensive coverage that matters. Our dedicated team of journalists ensures that you stay connected to the most important stories shaping your world. Our commitment is to empower you with accurate and timely information.

Experience the power of knowledge with County~News. Explore the news that matters, and join us on a journey of discovery. Stay informed, stay curious, and let us be your guide in navigating the dynamic landscape of today's news.
      </p>
      <button
              type="button"
              className="btn btn-dark"

            >
        <Link style={{color:'white',fontSize:'28px'}}to='/general'>GetStarted &rarr;</Link>
            </button>
    </div>
    </div>
  );
};
export default App;
