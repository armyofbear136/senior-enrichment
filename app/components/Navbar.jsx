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

            <nav>
                <div>
                    {/* <button>Home</button> */}
                    <NavLink to="/">Home</NavLink>
                </div>
                <div>
                    {/* <button>Students</button> */}
                    <NavLink to="/students">Students</NavLink>
                </div>

            </nav>
            // </Router>
        )
    }
}

export default withRouter(Navbar);