import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import StudentItem from './StudentItem';

/* -----------------    COMPONENT     ------------------ */

class StudentDetail extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.filterOneStudent = this.filterOneStudent.bind(this);
    }

    render() {
        const ourStudent = this.props.students.filter(this.filterOneStudent)[0];
        if (!ourStudent) return <div />  // the student id is invalid or data isn't loaded yet
        return (
            <div className="container student-item">
                <StudentItem student={ourStudent} />
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h2 className="panel-title large-font">stories</h2>
                    </div>
                    {/* <ul className="list-group">
                        <form className="list-group-item story-item" onSubmit={this.onSubmit}>
                            <input
                                name="title"
                                type="text"
                                className="form-like"
                                required
                                placeholder="Story Title"
                            />
                            <button type="submit" className="btn btn-warning btn-xs">
                                <span className="glyphicon glyphicon-plus" />
                            </button>
                        </form>
                    </ul> */}
                </div>
            </div>
        );
    }

    filterOneStudent(student) {
        //return false;
        return student.id === +this.props.match.params.id;
    }

    onSubmit(event) {
        event.preventDefault();
    }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ students }) => ({ students });
// const mapState = ({ students }) => {
//   const paramId = Number(ownProps.match.params.id);
//   return {
//     student: _.find(students, student => student.id === paramId),
//     stories
//   };
// };

// const mapDispatch = { addStory };

export default connect(mapState)(StudentDetail);
