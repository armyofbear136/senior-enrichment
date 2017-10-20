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
            <div className='col student-item'>
                <div className='col'>
                    <h1 className='campus-title'>Add Pony</h1>
                    <label className='col'> </label>
                    <form onSubmit={this.onPonySubmit}>
                        <div>
                            <label className='col campus-title'>Name</label>
                            <input
                                className='col'
                                name="name"
                                type="name"
                                placeholder="Fizzlepop Berrytwist"
                                required
                            />
                        </div>
                        <label className='col'> </label>
                        <div>
                            <label className='col campus-title'>Campus</label>
                            <select
                                className='col'
                                name='campus_id'>
                                {
                                    this.props.campuses
                                        .map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)
                                }
                            </select>
                        </div>
                        <label className='col'> </label>
                        <div>
                            <label className='col campus-title'>Image Url</label>
                            <input
                                className='col'
                                name="imageUrl"
                                placeholder="http://www.ponytown.com/default.png"
                            />
                        </div>
                        <button type="submit">Confirm</button>
                    </form>
                </div>
                <label className='col'> </label>
                <label className='col'> </label>
                <div className='col'>
                    <h1 className='campus-title'>Edit Pony</h1>
                    <label className='col'> </label>
                    <form onSubmit={this.onPonyEditSubmit}>
                        <div>
                            <label className='col campus-title'>Pony to modify: </label>
                            <select
                                className='col'
                                name='id'>
                                {
                                    this.props.students
                                        .map(student => <option key={student.id} value={student.id}>{student.name}</option>)
                                }
                            </select>
                        </div>
                        <label className='col'> </label>
                        <div>
                            <label className='campus-title'>Name</label>
                            <input
                                className='col'
                                name="name"
                                type="name"
                                placeholder="Fizzlepop Berrytwist"
                                required
                            />
                        </div>
                        <label className='col'> </label>
                        <div>
                            <label className='col campus-title'>Campus</label>
                            <select
                                className='col'
                                name='campus_id'>
                                {
                                    this.props.campuses
                                        .map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)
                                }
                            </select>
                        </div>
                        <label className='col'> </label>
                        <div>
                            <label className='col campus-title'>Image Url</label>
                            <input
                                className='col'
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
        attemptEditPony: (id, name, campus_id, imageUrl) =>
            dispatch((updateStudent)(id, { name, campus_id, imageUrl }))
    }
};


export default connect(mapState, mapDispatch)(AddPony);