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
            // <Router history={history} >

            <nav className="navigator">
                <div className= "home-button">
                    <NavLink to="/"> Home </NavLink>
                </div>
                <div className= "campuses-button">
                    <NavLink to="/campuses"> Campuses </NavLink>
                </div>
                <div className= "students-button">
                    <NavLink to="/students"> Students </NavLink>
                </div>

            </nav>
            // </Router>
        )
    }
}

export default withRouter(Navbar);