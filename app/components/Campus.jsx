import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import StudentItem from './Student/StudentItem';
import { removeCampus } from '../reducers/campuses';

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
        this.ourCampus = this.props.campuses.filter(this.filterOneCampus)[0];
        if (!this.ourCampus) return <div />  // the student id is invalid or data isn't loaded yet

        return (
            <div>
                <h1>{`${this.ourCampus.name}`}</h1>
                <div className="media-right media-middle">
                        <button
                            className="btn btn-default"
                            onClick={this.removeCampusCallback}>
                            <span className="glyphicon glyphicon-remove" />
                        </button>
                    </div>
                <div>
                    {
                        this.props.students
                            .filter(this.filterByCampus)
                            .map(student => <StudentItem student={student} key={student.id} />)
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
        const { removeCampus } = this.props;
        event.stopPropagation();
        removeCampus(this.ourCampus.id);
    }
}

const mapState = ({ students, campuses }) => ({ students, campuses });

const mapDispatch = { removeCampus };

export default connect(mapState)(withRouter(Campus));
