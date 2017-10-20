import React, { Component } from 'react';


export default class Home extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <section id="carousel">
                    <img className="carousel-image_top" src="https://i.pinimg.com/originals/2f/80/dd/2f80dddc5fb0c9ba2c498952951d4e21.jpg" />
                    <div id="carousel-text">
                        <h1 className='campus-title'>Pony Up For A Better World</h1>
                        <h2>Click to see our campuses and students!</h2>
                    </div>
                </section>
            </div>
        )
    }

}

// const mapState = ({ campuses }) => ({ campuses });


// export default connect(mapState)(Home);