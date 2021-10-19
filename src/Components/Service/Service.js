import React from 'react';
import './Service.css'
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // console.log(props);

    const { name, img, description, id } = service;
    return (
        <div className="servic">

            <img src={img} alt="" />

            <div className="servic-detals">
                <h3>{name}</h3>
                <p className="px-5">{description}</p>
                <Link to={`/details/${id} `}>
                    <button className="main-btn">Details</button>
                </Link>
            </div>
        </div >
    );
};

export default Service;