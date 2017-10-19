import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents, addStudent, updateStudent } from '../../reducers/students';


class AddPony extends Component {
    constructor() {
        super()
        this.onPonySubmit = this.onPonySubmit.bind(this);
        this.onPonyEditSubmit = this.onPonyEditSubmit.bind(this);
    }
    render() {
        return (
            <div>
                <div className="student-elements">
                    <h1>Add Pony</h1>
                    <form onSubmit={this.onPonySubmit}>
                        <div>
                            <label>Name</label>
                            <input
                                name="name"
                                type="name"
                                placeholder="Fizzlepop Berrytwist"
                                required
                            />
                        </div>
                        <div>
                            <label>Campus</label>
                            <select
                                name='campus_id'>
                                {
                                    this.props.campuses
                                        .map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <label>Image Url</label>
                            <input
                                name="imageUrl"
                                placeholder="http://www.ponytown.com/default.png"
                            />
                        </div>
                        <button type="submit">Confirm</button>
                    </form>
                    <h1>Edit Pony</h1>
                    <form onSubmit={this.onPonyEditSubmit}>
                        <div>
                            <label>Pony to modify: </label>
                            <select
                                name='id'>
                                {
                                    this.props.students
                                        .map(student => <option key={student.id} value={student.id}>{student.name}</option>)
                                }
                            </select>
                        </div>
                        <div>---------------------------------</div>
                        <div>
                            <label>Name</label>
                            <input
                                name="name"
                                type="name"
                                placeholder="Fizzlepop Berrytwist"
                                required
                            />
                        </div>
                        <div>
                            <label>Campus</label>
                            <select
                                name='campus_id'>
                                {
                                    this.props.campuses
                                        .map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <label>Image Url</label>
                            <input
                                name="imageUrl"
                                placeholder="http://www.ponytown.com/default.png"
                            />
                        </div>
                        <button type="submit">Confirm</button>
                    </form>
                </div>
            </div>
        )
    }

    onPonySubmit(event) {
        event.preventDefault();
        console.log("creating pony");
        const name = event.target.name.value;
        const campus_id = event.target.campus_id.value;
        const imageUrl = event.target.imageUrl.value;
        this.props.attemptSignUpPony(name, campus_id, imageUrl);

    }

    onPonyEditSubmit(event) {
        event.preventDefault();
        const id = event.target.id.value;
        const name = event.target.name.value;
        const campus_id = event.target.campus_id.value;
        const imageUrl = event.target.imageUrl.value;
        this.props.attemptEditPony(id, name, campus_id, imageUrl);

    }

}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ students, campuses }) => ({ students, campuses });
const mapDispatch = (dispatch, ownProps) => {
    return {
        attemptSignUpPony: (name, campus_id, imageUrl) =>
            dispatch((addStudent)({ name, campus_id, imageUrl })),
        attemptEditPony: (id, name, campus_id) =>
            dispatch((updateStudent)(id, { name, campus_id, imageUrl}))
    }
};


export default connect(mapState, mapDispatch)(AddPony);