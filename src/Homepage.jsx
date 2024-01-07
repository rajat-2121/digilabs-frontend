import React from "react";

import "./Homepage.css";

import wise from '../companyLogo/wise.svg';
import star from '../companyLogo/star.svg';
import mesh from '../companyLogo/mesh.svg';
import arrow from '../companyLogo/arrow.svg';

const Homepage = () => {
  return (
    <div>
       <div className="upper landing-page" style={{backgroundImage: `url(${mesh})`}}>
        <p className="fs-5">Seamless Experience</p>
        <h1>Unleashing the Next Generation of Card Solutions</h1>
        <h3>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        </h3>
        <div className="btn">
          <button className="button" id="btn">
            Unlock your cards 
            <img src={arrow} alt="" />
          </button>
          
        </div>
        <label htmlFor="btn">*no credit card required</label>
      </div>

      <div className="companies">
        <img src="./companyLogo/1.png" alt="" />
        <img src="./companyLogo/2.png" alt="" />
        <img src="./companyLogo/3.png" alt="" />
        <img src="./companyLogo/4.png" alt="" />
        <img src="./companyLogo/5.png" alt="" />
        <img src="./companyLogo/6.png" alt="" />
        <img src="./companyLogo/7.png" alt="" />
      </div>
      <div className="middlepage upper">
        <h2>Elevating Card Programs with Cutting-Edge Technology</h2>
        <h3>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </h3>
        <h4>compare all the premium features</h4>

        <div className="feature">
          <div className="card1">
            <div className="photo">
              <img
                className=""
                src="./companyLogo/8.png"
                alt="Card1 image cap"
              />
            </div>
            <div className="card1-body">
              <h3>Globally Accepted</h3>
              <p className="card1-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis minima,
              </p>
            </div>
          </div>
          <div className="card1">
            <div className="photo">
              <img
                className=""
                src="./companyLogo/9.png"
                alt="Card1 image cap"
              />
            </div>
            <div className="card1-body">
              <h3>Biometric integrated</h3>
              <p className="card1-text">
                I had the pleasure of experiencing the next generation of card1
                solutions
              </p>
            </div>
          </div>
          <div className="card1">
            <div className="photo">
              <img
                className=""
                src="./companyLogo/10.png"
                alt="Card1 image cap"
              />
            </div>
            <div className="card1-body">
              <h3>Fully secured</h3>
              <p className="card1-text">
                I had the pleasure of experiencing the next generation of card
                solutions
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-page middlepage upper">
        <h2>Elevating Card Programs with Cutting-Edge Technology</h2>

        <h3>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </h3>
        <h4>compare all the premium features</h4>
      </div>

      <div className="container spending">

          <img src="./companyLogo/11.png" alt="" />
          <img src="./companyLogo/12.png" alt="" />
      </div>

      <div className="container stats d-flex m-50">
        <div className="container">
          <h1>2 Million</h1>
          <p className="font-weight-bold">customers</p>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </p>
        </div>
        <div className="container">
          <h1>1K</h1>
          <p className="font-weight-bold">downloads</p>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </p>
        </div>
        <div className="container">
          <h1>$73 Million</h1>
          <p className="font-weight-bold">transaction</p>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </p>
        </div>
        <div className="container">
          <h1>2.0</h1>
          <p className="font-weight-bold">latest version</p>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </p>
        </div>
      </div>

      <div className="review container m-15">
        <div className="card">
        <img className="mt-3" src={wise} alt="" />
          <div className="card-body">
            <p className="card-text text-center p-5">
              I had the pleasure of experiencing the next generation of card
              solutions with this incredible product. It's refreshing to see
              such innovation in the financial industry.
            </p>
            <div className="photo">
              <img className="" src="image.png" alt="Card image cap" />
              <div className="fs-5">Nick Babich</div>
              <div className="fs-6 mb-1 text-muted">Lead Designer</div>
              <div>
                <img src={star} alt="star" style={{ margin: "5px"}} />
                <img src={star} alt="star" style={{ margin: "5px"}} />
                <img src={star} alt="star" style={{ margin: "5px"}} />
                <img src={star} alt="star" style={{ margin: "5px"}} />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="customer-support pb-5 d-flex ">
        <div className="cs-heading fs-2 mb-3 text-center" style={{fontWeight: "600"}}>Unlock Limitless Possibilities with<br/> Our New Card Solutions</div>
        <div className="cs-button d-flex justify-content-center">
          <div className="me-3 p-1 px-3 border border-dark rounded" style={{backgroundColor: "#582066", color: "#ffffff"}}>
            Unlock your card &nbsp;
            <i class="fa-regular fa-credit-card"></i>
          </div>
          <div className="me-3 p-1 px-3 border border-dark rounded" style={{color: "#5A6475"}}>
            Customer support &nbsp;
            <i class="fa-solid fa-headphones"></i>
          </div>
        </div>
      </div>

      <div className="modeui d-flex justify-content-center flex-column mb-3">
        <div className="fs-4 m-3  m-auto" style={{fontWeight: "500"}}>Mode UI</div>
        
        <div className="upper fs-4" style={{ border: "none"}}>
          Mode UI is a comprehensive design system that empowers designers and developers to create cohesive and visually stunning user interfaces across various platforms and devices
        </div>
      </div> 

    </div>
  );
};

export default Homepage;
