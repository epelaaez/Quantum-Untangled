import React from 'react';
import './About.css';

import cover from '../../assets/cover_1.png'

function About() {
    return (
        <div className="about-content">
            <h1>About</h1>

            <p>
                Quantum Untangled is a hub for quantum enthusiasts. We are aiming to promote the beauty and usefulness of quantum computing and the fields related to people with any type of background.
                We do this by publishing articles that try to explain important topics in the field with the most simplicity possible.
            </p>

            <p>
                Anyone is welcome to colaborate with us, whether you are just a begginer or an expert on quantum computing. 
                You can do so by joining our Discord server available in the <a href="/contact">Contact</a> section. Also, feel free to explore our GitHub <a href="https://github.com/epelaaez/Quantum-Untangled">repo</a>.
            </p>

            <p>
                We are currently in the process of transfering into our new website, for our complete collection of articles refer to our <a href="https://medium.com/quantum-untangled">Medium publication</a>.
            </p>

            <img alt="Quantum Untangled alternate cover" src={cover}></img>
        </div>        
    );
}

export default About;