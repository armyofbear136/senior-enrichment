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
        if (!student.campus) return <div />
        return (
            <div className="container student-item">
                <div className="row">
                    {/* <div className="media-left media-middle icon-container">
                        <img className="media-object img-circle" src={student.photo} />
                    </div> */}
                    <NavLink
                        className="media-body col"
                        activeClassName="active"
                        to={`/student/${student.id}`}>
                        <h4 className="media-heading tucked">
                            <span placeholder="0">{student.id}</span>
                        </h4>
                    </NavLink>
                    <NavLink
                        className="media-body col"
                        activeClassName="active"
                        to={`/student/${student.id}`}>
                        <h4>
                            <span placeholder="Jean Doe">{student.name}</span>
                        </h4>
                        <img className="img-rounded" height="50" src={student.imageUrl} />
                    </NavLink>
                    <NavLink
                        className="media-body col"
                        activeClassName="active"
                        to={`/campus/${student.campus_id}`}>
                        <h3>
                            <span placeholder='Pony School'>{student.campus.name}</span>
                            <img className="img-rounded" width="200" src={student.campus.imageUrl} />
                        </h3>
                    </NavLink>
                    <div >
                        <button
                            className="btn btn-default"
                            onClick={this.removeStudentCallback}>X
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

export default connect(mapState, mapDispatch)(StudentItem);
