import React, { useEffect, useState } from 'react';
import './Serveses.css'
import Service from './../Service/Service';
const Serveses = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (


        <div>
            {
                service.map(service => <Service
                    key={service.Id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Serveses;