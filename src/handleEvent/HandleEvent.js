import React, { Component } from 'react'

export default class HandleEvent extends Component {


    handleClick = () => {
        alert('Hello bootcamp 15')
    }

    handleClick1 = (name) => {
        alert(`Hello ! ${name}`)
    }

    showMessage = (mess) => {
        alert(mess);
    }
    render() {
        return (
            <div className="container">
                <div>Handle event</div>

                <button id="btn" onClick={this.handleClick}>Click me!</button>
                <br />
                <br />
                <button className="btn btn-success" onClick={() => {
                    alert('Hello Sĩ đẹp trai !');
                }}>Show message</button>
                <hr />
                <button id="btn" onClick={this.handleClick1.bind(this,'Sĩ')}>Click me</button>

                <button id="btn" onClick={() => {
                   this.showMessage('Hello bootcamp 15')
                }}>Show mess</button>
            </div>
        )
    }
}
