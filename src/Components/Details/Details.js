import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Details = () => {
    const { serviceId } = useParams();
    // console.log(serviceId);

    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Farhadcode/doctor-portal-data/main/data/data.json')
            .then(res => res.json())
            .then(data => {
                const findServiceData = data.find(service =>
                    service.id === parseInt(serviceId))

                if (findServiceData) {
                    setService(findServiceData);

                }


            })
    }, [])

    // console.log(service);




    return (


        <div className="card mb-3">
            <img src={service.img} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.description}</p>
                <Link to="/booking"> <button className="main-btn"> Booking </button></Link>
            </div>
        </div>
    );
};

export default Details;