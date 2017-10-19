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
            <div>
                <div>
                    <button
                    onClick={this.toggleEditor}
                    >Toggle Editor</button>
                </div>
                <div>
                    <h1># Name Campus</h1>
                </div>
                <div className="student-elements">
                    {
                        this.props.students
                            //.filter(this.filterUser)
                            .map(student => <StudentItem student={student} key={student.id} />)
                    }
                </div>
                {this.state.editorActive ? <AddPony/> : null}
            </div>
        )
    }

    toggleEditor() {
        console.log(this.state);
        this.setState({editorActive: !this.state.editorActive})
    }
}

const mapState = ({ students }) => ({ students });


export default connect(mapState)(withRouter(Students));