import React from 'react';
import home_img from '../images/home_img.jpg.jpeg';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img src={home_img} alt="My Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
