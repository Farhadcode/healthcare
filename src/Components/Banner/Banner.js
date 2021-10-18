import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-style">
            <h1> Optometrist & Eye Care Specialist Services</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aut laborum dolores quaerat eius nostrum sunt aliquam. Aliquid minima obcaecati quam facere, repellat dolorum enim architecto! Saepe doloribus harum dolor.</p>
            <Link to="/contect"> <button className="main-btn"> Contact Us</button></Link>
        </div>
    );
};

export default Banner;