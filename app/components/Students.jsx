import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import StudentItem from './Student/StudentItem';
import AddPony from './Student/AddPony';


class Students extends Component {
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
                <div>
                    {this.state.editorActive
                    ? 
                    <button
                            onClick={this.toggleEditor}
                        >Editor Mode On
                    </button>
                    :
                        <button
                            onClick={this.toggleEditor}
                        >Editor Mode Off
                    </button>
                }

                </div>
                <div className="row">

                    <div className="col">
                        <h1 className='campus-title'>#</h1>
                    </div>
                    <div className="col">
                        <h1 className='campus-title'>Name</h1>
                    </div>
                    <div className="col">
                        <h1 className='campus-title'>Campus</h1>
                    </div>
                    <div className="col">
                        {
                            this.props.students
                                //.filter(this.filterUser)
                                .map(student => <StudentItem student={student} key={student.id} />)
                        }
                    </div>
                    {this.state.editorActive ? <AddPony /> : null}
                </div>
            </div>
        )
    }

    toggleEditor() {
        this.setState({ editorActive: !this.state.editorActive })
    }
}

const mapState = ({ students }) => ({ students });


export default connect(mapState)(withRouter(Students));