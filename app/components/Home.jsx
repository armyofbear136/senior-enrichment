import React, { Component } from 'react';


export default class Home extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h1> This is your home now </h1>
            </div>
        )
    }

}

// const mapState = ({ campuses }) => ({ campuses });


// export default connect(mapState)(Home);