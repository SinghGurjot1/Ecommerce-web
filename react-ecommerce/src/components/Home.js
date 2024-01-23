import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return(
        <div className='main'>
            <h2>Welcome to Our E-Commerce Website</h2>
            <img src='logo512.png'/>
            <p>
                Explore our Amazing products and shop with confidence. Visit our {' '}
                <Link to="/Shop">
                    Shop
                </Link>{' '}
                to discover the latest items.
            </p>
            <p>
                Already have an account {' '}
                <Link to="/Login">
                    Click here
                </Link>{' '}
                to Login.
            </p>
            <p>
                Have Some items picked out {' '}
                <Link to="/Cart">
                    Click here
                </Link>{' '}
                to Review before ckecking out.
            </p>
        </div>
    );
};



export default Home;