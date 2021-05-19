import React from 'react';
import './Contact.css';

import ContactForm from './ContactForm/ContactForm.js';

function Contact() {
    return (
        <div className="contact-content">
            <h1>Contact us</h1>

            <p>
                Feel free to contact us to express a concern about the website, your interest on writing an article to be posted here, 
                or anything related to Quantum Untangled. We will make sure to reach back to you as soon as possible!
            </p>

            <p>
                You can contact us by joining our Discord server, join <a href="https://discord.gg/ZCVtHTbepq">here</a>. 
                Or you can fill the form below to communicate with us. 
            </p>

            <ContactForm />
        </div>
    );
}

export default Contact;