import React from 'react';
import './ContactForm.css';

import cover from '../../../assets/cover_2.jpg'

class ComponentForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log('The form was submitted!');
    }

    render() {
        return (
            <div className="form-container">
                <img alt="Quantum Untangled cover" src={cover}></img>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="fname">Your first name:</label>
                    <input type="text" id="fname" name="firstname" placeholder="Name" required />
                    <label htmlFor="lname">Your last name:</label>
                    <input type="text" id="lname" name="lastname" placeholder="Last name" required />
                    <label htmlFor="email">Your email:</label>
                    <input type="email" id="email" name="_replyto" placeholder="Email" required />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Write your message here"></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div> 
        );
    }
}

export default ComponentForm;