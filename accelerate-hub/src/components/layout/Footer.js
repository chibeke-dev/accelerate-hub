import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="page-footer font-small unique-color-dark" style={{backgroundColor: 'black'}}>
          <div style={{backgroundColor: 'black'}}>
            <div className="container">
              <div className="row py-4 d-flex flex-column flex-md-row align-items-center">
              </div>
            </div>
          </div>
          <div className="container text-sm-left text-md-left mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold small-footer-heading">AccelerateHub</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                <p></p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">Products</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', color: '#ffffff'}} />
                <p>
                  <Link to="/login">Data Processing</Link>
                </p>
                <p>
                  <Link to="/login">Customer Management</Link>
                </p>
                <p>
                  <Link to="/login">Project Management</Link>
                </p>
                <p>
                  <Link to="/login">Report</Link>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold small-footer-heading">Resources</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', color: '#ffffff'}} />
                <p>
                  <Link to="/login">Your Account</Link>
                </p>
                <p>
                  <Link to="/login">Become an Affiliate</Link>
                </p>
                <p>
                  <Link to="/contact">Contact us</Link>
                </p>
                <p>
                  <Link to="/about">About us</Link>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 contact-container">
                <h6 className="text-uppercase font-weight-bold">Contact Us!</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                <p>
                   (+234) 9080930068 
                    <p>Monday-Friday</p>   
                   9am-6pm
                </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">© 2021 Copyright-AccelerateHub-All Rights Reserved
          </div>
      </footer>
      

    </React.Fragment>
  )
}

export default Footer;