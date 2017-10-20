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
                <div className="row">
                    <div className="col">
                        <button
                            className="btn btn-default"
                            onClick={this.removeStudentCallback}>X
                            <span className="glyphicon glyphicon-remove" />
                        </button>
                    </div>
                    <div className='col'>
                        <NavLink
                            className="media-body"
                            activeClassName="active"
                            to={`/student/${student.id}`}>

                            <h4 className="media-heading tucked col">
                                <span placeholder="Jean Doe">{student.name}</span>
                            </h4>

                        </NavLink>
                    </div>
                    <div className='col'>
                        <img className="img-rounded" height="50" src={student.imageUrl} />
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
