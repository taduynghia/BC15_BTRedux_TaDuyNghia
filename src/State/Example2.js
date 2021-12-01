import React, { Component } from 'react'
import imgCar from '../assets/img/CarBasic/products/black-car.jpg';


export default class Example2 extends Component {
    
    
    state = {
        imgCar: './img/CarBasic/products/black-car.jpg'
    }

    changeColor = (color)=>{
        this.setState({
            imgCar: `./img/CarBasic/products/${color}-car.jpg`
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={this.state.imgCar} alt="..." className="w-100" />
                        {/* <img src={imgCar} alt='...' className="w-100"/> */}
                    </div>
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={()=>{
                           this.changeColor('red')
                        }}>Red</button>
                        <button className="btn bg-dark text-white" onClick={()=>{
                             this.changeColor('black')
                        }}>Black</button>
                        <button className="btn btn-default" style={{backgroundColor:
                    '#EEE'}} onClick={()=>{
                        this.changeColor('silver')
                    }}>Silver</button>
                        <button onClick={()=>{
                             this.changeColor('steel')
                        }} className="btn" style={{backgroundColor:'gray',color:'#000'}}>Steel</button>
                    </div>
                </div>
            </div>
        )
    }
}
