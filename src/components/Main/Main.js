import React from 'react';
import './Main.css';
 
// Accesible from header navigation
import Home from '../Home/Home.js';
// import Projects from '../Projects/Projects.js'; Projects tab under development, not ready to show.
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';

// Not accesible from header navigation
import Privacy from '../Privacy/Privacy.js';

// 404 error page
import NotFound from '../NotFound/NotFound.js';

import { Switch, Route } from 'react-router-dom';

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />

                <Route exact path='/privacy-policy' component={Privacy} />

                <Route component={NotFound} />
            </Switch>
        </main>
    );
}

export default Main;