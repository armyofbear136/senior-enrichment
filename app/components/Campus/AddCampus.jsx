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
            <div className='col student-item'>
                <div className='col'>
                    <h1 className='campus-title'>Add Campus</h1>
                    <label className='col'> </label>
                    <form onSubmit={this.onCampusSubmit}>
                        <div>
                            <label className='col campus-title'>Name:</label>
                            <input
                                className='col'
                                name="name"
                                type="name"
                                placeholder="Yakyakistan Asylum"
                                required
                            />
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
                        <label className='col'> </label>
                        <button type="submit">Confirm</button>
                    </form>
                </div>
                <label className='col'> </label>
                <label className='col'> </label>
                <div className='col'>
                    <h1 className='campus-title'>Edit Campus</h1>
                    <label className='col'> </label>
                    <form onSubmit={this.onCampusEditSubmit}>
                        <div>
                            <label className='col campus-title'>Campus to modify: </label>
                            <select
                                className='col'
                                name='id'>
                                {
                                    this.props.campuses
                                        .map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)
                                }
                            </select>
                        </div>
                        <label className='col'> </label>
                        <div>
                            <label className='col campus-title'>New Name</label>
                            <input
                                className='col'
                                name="name"
                                type="name"
                                placeholder="Yakyakistan Asylum"
                            />
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
                        <label className='col'> </label>
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
        let imageUrl = event.target.imageUrl.value;
        if (imageUrl === '') imageUrl = 'https://vignette2.wikia.nocookie.net/mlp/images/5/54/Ponyville_is_in_chaos_S2E02.png/revision/latest?cb=20120715155845';
        this.props.attemptSignUpCampus(name, imageUrl);

    }
    onCampusEditSubmit(event) {
        event.preventDefault();
        const id = event.target.id.value;
        const name = event.target.name.value;
        let imageUrl = event.target.imageUrl.value;
        if (imageUrl === '') imageUrl = 'https://vignette2.wikia.nocookie.net/mlp/images/5/54/Ponyville_is_in_chaos_S2E02.png/revision/latest?cb=20120715155845';
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