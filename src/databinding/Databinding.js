import React, { Component } from 'react'

export default class Databinding extends Component {
    renderImg = () => {
        return <div>
            <img src="https://picsum.photos/200" alt="..."/>
        </div>
    }

    renderCard = () => {
        return <div className="card">
            {this.renderImg()}
            <div className="card-body">
                <p>Họ tên: Sĩ</p>
                <p>Tuổi: 18</p>
            </div>
        </div>
    }

    render() {
        let title = 'cybersoft';
        let srcImg = 'https://i.pravatar.cc/300'
        let sinhVien = {
            maSV: 1,
            tenSV: 'Nguyễn Văn Tèo',
            namSinh: '20/12/1999',
            hinhAnh: 'https://i.pravatar.cc/200'
        }
        return (
            //jsx
            <div className="container">
                Databinding
                {this.renderCard()}
                {this.renderImg()}
                <p id="txt">{title}</p>
                <br />
                <img src={srcImg} alt="..." />
                <br />
                <br />
                <div className="card w-25">
                    <img src={sinhVien.hinhAnh} alt="..." />
                    <div className="card-body">
                        <p>Họ tên: {sinhVien.tenSV} </p>
                        <p>Ngày sinh: {sinhVien.namSinh} </p>
                    </div>
                </div>
            </div>

        )
    }
}
