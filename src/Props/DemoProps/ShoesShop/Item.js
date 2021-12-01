import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        let {prod} = this.props
        return (
            <div className="card">
                <img src={prod.image} alt="..." />

                <div className="card-body">
                    <p style={{height:100}}>{prod.name}</p>
                    <p>{prod.price}$</p>
                    <button style={{backgroundColor:'#000',color:'white'}}>Add to carts <i className="fa fa-cart-plus"></i></button>
                </div>
            </div>
        )
    }
}
