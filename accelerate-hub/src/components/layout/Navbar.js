import React from 'react';
import {Link} from "react-router-dom";
import {HashLink as ScrollLink} from 'react-router-hash-link';


function Navbar() {
  return (
    <React.Fragment> 
       <div className="container" style={{ height: '2px'}}> 
      <div className="navbar navbar-expand-lg text-right navbar-light home-nav" style={{height: '60px'}}>
      <a href="../index.html" className="navbar-brand" id="logo" style={{marginRight: '20px'}}>AccelerateHub</a> 
        <div className="collapse navbar-collapse" id="this_nav" style={{marginLeft: '50%'}}>
          <div className="navbar-nav" >
            <Link to="/" className="nav-link active">Home</Link>
            <ScrollLink 
              to="/products"         
              spy="true"
              smooth = "true"
              duration={500} 
              activeclass='active'
              className="nav-link"
            >Products
            </ScrollLink>
            <ScrollLink 
              to="/resources"         
              spy="true"
              smooth="true"
              duration={500} 
              activeclass='active'
              className="nav-link"
            >Resources
            </ScrollLink>
            <Link to='/about' className="nav-link">About</Link>
          </div>
          <div>
          <Link to="/signup"><button className="primary-button" id="reg_btn"  style={{marginBottom: '70px'}}><span>Get Started </span></button></Link>
          </div>
        </div>
      </div>
      </div>
    </React.Fragment>
  )
};


export default Navbar;


