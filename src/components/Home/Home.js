import React from 'react';
import './Home.css';

import Banner from '../Banner/Banner.js';


function Home() {
    return (
        <div>
            <Banner></Banner>
            <div className="home-content">
                <div className="row">
                    <div className="column"> 
                        <h2>Mission</h2>
                        <p>
                            Make quantum computing accesible to anyone with the commitment to learn and build a community around this. 
                            We do this through clear articles that don't get cluttered up with never-ending senteces and fancy words, and 
                            events that bring people closer to the field and its community. 
                        </p> 
                    </div>
                    <div className="column"> 
                        <h2>Who are we?</h2>
                        <p>
                            We started as a group of students from QxQ's Introduction to Quantum Computing course. 
                            Willing to help the field of quantum comptuing reach more people, our bond has grown beyond this course.
                            Now, with people from many backgrounds, we are determined to reach our goals. 
                        </p>
                    </div>
                    <div className="column"> 
                        <h2>Vision</h2>
                        <p>
                            To become a hub where people from any academic and social background can come and learn about quantum computing, attend events suitable to their experience,
                            find projects to work on and collaborate in making this project grow. We want people to come here to get help and help in return. 
                        </p>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;