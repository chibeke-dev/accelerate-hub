 import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import BackgroundImage from '../../components/images/bg.png'
import '../../components/styles/register.css'

export default function Home() {
    return (
        <>
        <Navbar/>
        <header style={ HeaderStyle }>      
            <h1 className="main-title text-center">AccelerateHub Workspace</h1>
            <p className="main-para text-center">join us now and don't waste time</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/signup">
                    <button className="primary-button" id="reg_btn"><span>Get Started </span></button>
                </Link>
            </div>
        </header>
        <Footer/>
        </>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}