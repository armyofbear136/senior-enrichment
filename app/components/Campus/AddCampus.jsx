import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses, addCampus, updateCampus } from '../../reducers/campuses';

class AddCampus extends Component {
    constructor() {
        super()
        this.onCampusSubmit = this.onCampusSubmit.bind(this);
        this.onCampusEditSubmit = this.onCampusEditSubmit.bind(this);


    }
    render() {
        return (
            <div className='student-elements'>
                <div>
                    <h1>Add Campus</h1>
                    <form onSubmit={this.onCampusSubmit}>
                        <div>
                            <label>Name</label>
                            <input
                                name="name"
                                type="name"
                                placeholder="Yakyakistan Asylum"
                                required
                            />
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
                <div>
                    <h1>Edit Campus</h1>
                    <form onSubmit={this.onCampusEditSubmit}>
                        <div>
                            <label>Campus to modify: </label>
                            <select
                                name='id'>
                                {
                                    this.props.campuses
                                        .map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <label>New Name</label>
                            <input
                                name="name"
                                type="name"
                                placeholder="Yakyakistan Asylum"
                            />
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



    onCampusSubmit(event) {
        event.preventDefault();
        console.log(event.target.name.value);
        const name = event.target.name.value;
        const imageUrl = event.target.imageUrl.value;
        this.props.attemptSignUpCampus(name, imageUrl);

    }
    onCampusEditSubmit(event) {
        event.preventDefault();
        const id = event.target.id.value;
        const name = event.target.name.value;
        const imageUrl = event.target.imageUrl.value;
        this.props.attemptEditCampus(id, name, imageUrl);

    }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ campuses }) => ({ campuses });
const mapDispatch = (dispatch, ownProps) => {
    return {
        attemptSignUpCampus: (name, imageUrl) =>
            dispatch((addCampus)({ name, imageUrl })),

        attemptEditCampus: (id, name, imageUrl) =>
            dispatch((updateCampus)(id, { name, imageUrl }))
    }
};


export default connect(mapState, mapDispatch)(AddCampus);