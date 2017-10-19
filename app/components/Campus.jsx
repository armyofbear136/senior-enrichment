import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import SimpleStudent from './Student/SimpleStudent';
import { removeCampus } from '../reducers/campuses';
import { fetchStudents } from '../reducers/students';

class Campus extends Component {
    constructor(props) {
        super(props)
        this.filterByCampus = this.filterByCampus.bind(this);
        this.filterOneCampus = this.filterOneCampus.bind(this);
        this.removeCampusCallback = this.removeCampusCallback.bind(this);
        this.state = {
            ourCampus: null
        }
    }
    render() {
        console.log();
        this.state.ourCampus = this.props.campuses.filter(this.filterOneCampus)[0];
        if (!this.state.ourCampus) return <div />  // the student id is invalid or data isn't loaded yet

        return (
            <div>
                <div className="campus-elements">
                    <h1>{`${this.state.ourCampus.name}`}</h1>
                    <div className="media-right media-middle">
                        <button
                            className="btn btn-default"
                            onClick={this.removeCampusCallback}>
                            <span className="glyphicon glyphicon-remove" />
                        </button>
                    </div>
                </div>
                <div className="student-elements">
                    {
                        this.props.students
                            .filter(this.filterByCampus)
                            .map(student => <SimpleStudent student={student} key={student.id} />)
                    }
                </div>
            </div>
        )
    }

    filterByCampus(student) {
        // console.log(student);
        // console.log("student id", student.campus_id, "props id", this.props.match.params.id);
        return student.campus_id === +this.props.match.params.id;
    }

    filterOneCampus(campus) {
        return campus.id === +this.props.match.params.id;
    }

    removeCampusCallback(event) {
        const { removeCampus, fetchStudents } = this.props;
        event.stopPropagation();
        removeCampus(this.state.ourCampus.id)
            .then(res =>
                fetchStudents()
            )
    }
}

const mapState = ({ students, campuses }) => ({ students, campuses });

const mapDispatch = { removeCampus, fetchStudents };

export default connect(mapState, mapDispatch)(withRouter(Campus));
