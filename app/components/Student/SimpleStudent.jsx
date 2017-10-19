import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeStudent } from '../../reducers/students';

/* -----------------    COMPONENT     ------------------ */


class SimpleStudent extends React.Component {

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
                            <span placeholder="Jean Doe">{student.name}</span>
                        </h4>

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
        const { removeStudent, student } = this.props;
        removeStudent(student.id);
    }

}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;

const mapDispatch = { removeStudent }

export default connect(mapState, mapDispatch)(SimpleStudent);
