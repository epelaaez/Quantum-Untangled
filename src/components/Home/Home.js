import React from 'react';
import './Home.css';

import Banner from '../Banner/Banner.js';


function Home() {
    return (
        <div>
            <Banner />
            <div className="home-content">
                <h1>
                    We are Quantum Untangled.
                </h1>
                <p>
                    A hub for everything quantum computing and related fields.
                </p>
            </div>
        </div>
    );
}

export default Home;