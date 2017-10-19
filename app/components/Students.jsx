import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import StudentItem from './Student/StudentItem';


class Students extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <div>
                    {/* <button>Students</button> */}
                    <NavLink to="/addpony">+</NavLink>
                </div>
                <div>
                    <h1># Name Campus</h1>
                </div>
                <div>
                    {
                        this.props.students
                            //.filter(this.filterUser)
                            .map(student => <StudentItem student={student} key={student.id} />)
                    }
                </div>
            </div>
        )
    }
}

const mapState = ({ students }) => ({ students });


export default connect(mapState)(withRouter(Students));