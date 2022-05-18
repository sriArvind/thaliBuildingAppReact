import React from 'react';
import { useNavigate } from 'react-router-dom';
import thali from '../images/thali.png';

const Home = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/customizeThali');
    };

    return (

        <div className='container my-5'>

            <h1 className='display-6 text-center text-primary'>
                Dear Customer, Welcome to our website!
            </h1>

            <p className='text-center fs-4 my-4'>
                “We welcome you to a delicious feast of exquisite dishes in our restaurant.
                With a wide range of dishes to choose from, <br />we guarantee you
                a sumptuous feast experience in our restaurant.”
            </p>

            <img src={thali} className='d-block mx-auto' alt='thali' />

            <button
                className='d-block mx-auto my-5 btn btn-lg btn-outline-primary '
                onClick={handleNavigate}
            >
                Create Order
            </button>

            <p className='text-center text-success fs-4'>Have a Nice Day!</p>

        </div>

    );

};


export default Home;