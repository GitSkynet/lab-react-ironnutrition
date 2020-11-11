import React, { Component } from 'react'

class TodaysFood extends Component {
    state = {
        name: 'bbb',
        calories: 'bbb',
        quantity: 'bbb',
    }
    render(){
        return (
            <div>
                <h2>Name: {this.name}</h2>
                <p>Calories: {this.calories}</p>
                <p>Quantity: {this.quantity}</p>
            </div>
        )
    }
}

export default TodaysFood
