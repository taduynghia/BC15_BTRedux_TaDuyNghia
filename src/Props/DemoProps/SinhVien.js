import React, { Component } from 'react'

export default class SinhVien extends Component {
   
    render() {
        let {sinh_Vien} = this.props
       
        return (
            <div>
                <ul>
                    <li>Mã sinh viên: {sinh_Vien.mssv} </li>
                    <li>Họ tên: {sinh_Vien.hoTen} </li>
                    <li>Năm sinh: {sinh_Vien.namSinh} </li>
                </ul>
            </div>
        )
    }
}
