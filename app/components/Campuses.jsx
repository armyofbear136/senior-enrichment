import React, { Component } from 'react';
import CampusItem from './Campus/CampusItem';
import AddCampus from './Campus/AddCampus';
import { connect } from 'react-redux';


class Campuses extends Component {
    constructor() {
        super()
        this.state = {
            editorActive: false
        }
        this.toggleEditor = this.toggleEditor.bind(this);
    }
    render() {
        return (
            <div className="container">
                <div className='row'>
                    <div className='col'>
                        <button
                            onClick={this.toggleEditor}
                        >Toggle Editor</button>
                    </div>
                    <div className='col campus-title'>
                        <h1>Campuses</h1>
                    </div>
                    <div className='col'>
                        <h1/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            this.props.campuses
                                //.filter(this.filterUser)
                                .map(campus => <CampusItem campus={campus} key={campus.id} />)
                        }
                    </div>
                    {this.state.editorActive ? <AddCampus /> : null}
                </div>
            </div>
        )
    }

    toggleEditor() {
        this.setState({ editorActive: !this.state.editorActive })
    }

}

const mapState = ({ campuses }) => ({ campuses });


export default connect(mapState)(Campuses);