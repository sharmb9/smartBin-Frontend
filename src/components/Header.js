import React from 'react';
import About from './About';
import Stats from './Stats';


import {
    HashRouter as Router,
    Route,
    Link,
    Switch
}
    from "react-router-dom"

const Header = () => (
    <Router basename='/' >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <p className="navbar-brand">smartBin</p>
            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <div className="navbar-nav">
                    <div className="nav-item nav-link active"><Link class="nav_link" to="/About">About</Link></div>
                    <div className="nav-item nav-link active"><Link class="nav_link" to="/Stats">Stats</Link></div>
                    {/* <div className="nav-item nav-link active"><Link class="nav_link" to="/Contact">Resume</Link></div> */}
                </div>
            </div>
        </nav>

        {/* Switch tag looks through its children <Route>s and renders the one that mathced the current url */}
        <Switch>
            <Route path="/" exact>
                <About />
            </Route>
            <Route path="/About">
                <About />
            </Route>
            <Route path="/Stats">
                <Stats />
            </Route>
            {/* <Route path="/Contact">
                <Contact />
            </Route> */}
        </Switch>
    </Router>
)

export default Header;