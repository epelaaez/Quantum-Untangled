import React from 'react';
import './Main.css';
 
import Home from '../Home/Home.js';
import Blog from '../Blog/Blog.js';
import Projects from '../Projects/Projects.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';

import { Switch, Route } from 'react-router-dom';

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/blog' component={Blog}></Route>
                <Route exact path='/projects' component={Projects}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/contact' component={Contact}></Route>
            </Switch>
        </main>
    );
}

export default Main;