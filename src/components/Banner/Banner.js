import React from 'react';
import './Banner.css';
import cover from '../../assets/cover_2.jpg'

function Banner() {
    return (
        <img src={cover} alt="Quantum Untangled cover" width="100%" className="banner-img"></img>
    );
}

export default Banner;