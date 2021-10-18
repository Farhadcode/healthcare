import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    // console.log(props);

    const { name, img, description } = service;
    return (
        <div>

            <img src={img} alt="" />
            <h3> service {name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Service;