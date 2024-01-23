import React from 'react';
import {Link} from "react-router-dom";

export const Navbar = () => {
    return <div className='navbar' style={styles.navbar}>
        <div className='links' style={styles.links}>
            <Link to = "/" style={styles.links}>Home</Link>
            <Link to = "/Shop" style={styles.links}>Shop</Link>
            <Link to = "/Login" style={styles.links}>Login</Link>
            <Link to = "/Cart" style={styles.links}>Cart</Link>
        </div>
    </div>
};

const styles = {
    navbar: {
        background: 'rgb(19,19,19)',
        width: '100%',
        height: '40px',
        color: 'white',
        padding: '10px',
    },

    links: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '5px',
        color: 'white',
        textDecoration: 'bold',
    },
};