import React from 'react';
import './Main.css';
 
// Accesible from header navigation
import Home from '../Home/Home.js';
// import Blog from '../Blog/Blog.js';  Currently, blog is redirected to Medium's publication so there's no need to import the Blog component.
import Projects from '../Projects/Projects.js'; 
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';

// Not accesible from header navigation
import Privacy from '../Privacy/Privacy.js';

import { Switch, Route } from 'react-router-dom';

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/blog' component={() => { 
                    window.location.href = 'https://medium.com/quantum-untangled'; 
                    return null;
                }} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />

                <Route exact path='/privacy-policy' component={Privacy} />
            </Switch>
        </main>
    );
}

export default Main;