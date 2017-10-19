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
            <div>
                <div>
                    <button
                    onClick={this.toggleEditor}
                    >Toggle Editor</button>
                </div>
                <h1 className='campus'>Campuses</h1>
                <div>
                    {
                        this.props.campuses
                            //.filter(this.filterUser)
                            .map(campus => <CampusItem campus={campus} key={campus.id} />)
                    }
                </div>
                {this.state.editorActive ? <AddCampus/> : null}
            </div>
        )
    }

    toggleEditor() {
        console.log(this.state);
        this.setState({editorActive: !this.state.editorActive})
    }

}

const mapState = ({ campuses }) => ({ campuses });


export default connect(mapState)(Campuses);