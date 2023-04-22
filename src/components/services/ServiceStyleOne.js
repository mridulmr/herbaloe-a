import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Icon_landscape from '../../assets/images/service/landscape.png';
import { FaLongArrowAltRight } from 'react-icons/fa';

const ServiceOneData = [
    {
        id: uuidv4(),
        heading: 'Consultant',
        description: 'Here you can connect with our finest experience person for your loved cattles.',
        img: Icon_landscape,
        serviceLink: '/',
    },
    {
        id: uuidv4(),
        heading: 'Delivery',
        description: 'There are wide range of service where we can delivery you our finest product.',
        img: Icon_landscape,
        serviceLink: '/',
    },

];

const ServiceOneItem = ({ img, heading, description, serviceLink }) => {
    return (
        <>
            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-service">
                    <div className="service-icon">
                        <img src={img} alt="Service Icon" />
                    </div>
                    <h3>{heading}</h3>
                    <p>{description}</p>
                    <a href={serviceLink}>Reach us<FaLongArrowAltRight /></a>
                </div>
            </div>
        </>
    )
}

const ServiceStyleOne = () => {
    return (
        <>
            <div className="service-area theme-bg-4 pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-70">
                                <span>Our Services</span>
                                <h2>Why will you choose our <br /> services?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {ServiceOneData.map((data) => (
                            <ServiceOneItem
                                key={data.id}
                                img={data.img}
                                heading={data.heading}
                                description={data.description}
                                serviceLink={data.serviceLink}
                            />
                        ))}
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="single-service-large">
                                <h3>We are professional in <span>Cattles health care products.</span></h3>
                                <p>We are the best company for you cattles having wide range of products we cover for your loved cattles to keep them fit and healhy.</p>
                                <a href="/" className="l-btn">Schedule call</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceStyleOne;