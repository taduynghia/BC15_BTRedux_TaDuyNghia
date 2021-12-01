import React, { Component } from 'react'

export default class Card extends Component {


    render() {
        //props: là thuộc tính có sẵn của react class component => nhận giá trị từ nơi dụng component này truyền vào
        // let name = this.props.hoTen;
        // let tuoi = this.props.tuoi;
        let {hoTen,tuoi} = this.props;

        return (
            <div className="card text-white bg-primary w-25">
                <img className="card-img-top" src="https://i.pravatar.cc/200" alt />
                <div className="card-body">
                    <h4 className="card-title">{hoTen}</h4>
                    <p className="card-text">{tuoi}</p>
                </div>
            </div>

        )
    }
}
