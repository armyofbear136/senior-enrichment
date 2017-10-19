import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeStudent } from '../../reducers/students';

/* -----------------    COMPONENT     ------------------ */


class StudentItem extends React.Component {

    constructor(props) {
        super(props);
        this.removeStudentCallback = this.removeStudentCallback.bind(this);

    }

    render() {
        const { student } = this.props;
        return (
            <div className="list-group-item min-content student-item">
                <div className="media">
                    {/* <div className="media-left media-middle icon-container">
                        <img className="media-object img-circle" src={student.photo} />
                    </div> */}
                    <NavLink
                        className="media-body"
                        activeClassName="active"
                        to={`/student/${student.id}`}>
                        <h4 className="media-heading tucked">
                            <span placeholder="0">{student.id}</span>
                        </h4>
                        <h4 className="media-heading tucked">
                            <span placeholder="Jean Doe">{student.name}</span>
                        </h4>

                    </NavLink>
                    <NavLink
                        to={`/campus/${student.campus_id}`}>
                        <h5 className="tucked">
                            <span placeholder='Pony School'>{student.campus.name}</span>
                        </h5>
                    </NavLink>
                    <div className="media-right media-middle">
                        <button
                            className="btn btn-default"
                            onClick={this.removeStudentCallback}>
                            <span className="glyphicon glyphicon-remove" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    removeStudentCallback(event) {
        event.stopPropagation();
        console.log("running remove student callback");
        const { removeStudent, student } = this.props;
        console.log("remove student", removeStudent);
        removeStudent(student.id);
    }

}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;

const mapDispatch = () => ({removeStudent});

export default connect(mapState, mapDispatch)(StudentItem);
