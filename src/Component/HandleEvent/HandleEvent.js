import React, { Component } from 'react'

export default class HandleEvent extends Component {

    //Define a function to execute an action when user clicks on the button click me
    handleClick = (name) => {
        alert("Hello World!" + name)
    }

    render() {
        return (
            <div>
                <button className='btn btn-danger' onClick={function () {
                    alert("Hello World!")
                }}>Click me!</button>
                {/* Way 2 */}
                <button className='btn btn-success' onClick={this.handleClick}>Click me! 1</button>
                {/* way 3: using arrow function, most popular cause it allows variables */}
                <button className='btn btn-primary' onClick={() => {
                    this.handleClick("Mike")
                }}>Click me!</button>
                {/* way 4: don't use ()=>{}, but use bind() function to hold function from running before clicking */}
                <button className='btn btn-warning' onClick={this.handleClick.bind(this, "Mike")}>Click me!</button>
            </div >
        )
    }
}
