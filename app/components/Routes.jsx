import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import history from './history';


import Root from './Root';
import Home from './Home';
import Navbar from './Navbar';
import Students from './Students';
import Campus from './Campus';
import Campuses from './Campuses';
import StudentDetail from './Student/StudentDetail';

import { fetchStudents } from '../reducers/students';
import { fetchCampuses } from '../reducers/campuses';

class Routes extends Component {

    componentDidMount() {
        this.props.fetchInitialData();
    }

    render() {
        console.log(history);
        return (
            <Router history={history} >
                <Root>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/students" component={Students} />
                        <Route path="/student/:id" component={StudentDetail} />
                        <Route path="/campuses" component={Campuses} />
                        <Route path="/campus/:id" component={Campus} />
                        <Redirect to="/" />
                    </Switch>
                </Root>
            </Router>
        )
    }

}

const mapProps = null;

const mapDispatch = dispatch => ({
    fetchInitialData: () => {
        dispatch(fetchStudents());
        dispatch(fetchCampuses());

    }
})

export default connect(mapProps, mapDispatch)(Routes);