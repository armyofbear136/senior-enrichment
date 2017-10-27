import React, { Component } from 'react';
// import {Router} from 'react-router';
import { Link, NavLink, withRouter } from 'react-router-dom';
import history from './history';


class Navbar extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="container campus-item">
                <nav className="navigator row">
                    <div className="col">
                        <h2><NavLink to="/"> Home </NavLink></h2>
                    </div>
                    <div className="col">
                        <h2><NavLink to="/campuses"> Campuses </NavLink></h2>
                    </div>
                    <div className="col">
                        <h2><NavLink to="/students"> Students </NavLink></h2>
                    </div>

                    <div className="col">
                        <h2><NavLink to="/channels"> Chat </NavLink></h2>
                    </div>

                </nav>
            </div>
        )
    }
}

export default withRouter(Navbar);