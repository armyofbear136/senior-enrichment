import React, { Component } from 'react';
import CampusItem from './Campus/CampusItem';
import { connect } from 'react-redux';


class Home extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h1>Campuses</h1>
                <div>
                    {
                        this.props.campuses
                            //.filter(this.filterUser)
                            .map(campus => <CampusItem campus={campus} key={campus.id} />)
                    }
                </div>
            </div>
        )
    }

}

const mapState = ({ campuses }) => ({ campuses });


export default connect(mapState)(Home);