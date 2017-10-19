import React, { Component } from 'react';

export default class AddPony extends Component {
    constructor() {
        super()
        this.onSignupSubmit = this.onSignupSubmit.bind(this);
    }
    render() {
        return (
            <div>
                <h1>Add Pony</h1>
                <form onSubmit={this.onSignupSubmit}>
                <div>
                  <label>Name</label>
                  <input
                    name="name"
                    type="name"
                    required
                  />
                </div>
                <div>
                  <label>Select Campus</label>
                  <input
                    name="campus"
                    type="campus"
                    required
                  />
                </div>
                <button type="submit"></button>
              </form>
            </div>
        )
    }
    onSignupSubmit() {

    }
}