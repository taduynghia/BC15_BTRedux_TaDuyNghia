import React, { Component } from 'react'
import Example2 from './Example2'

export default class Example extends Component {
    //Các bước khi giải quyết bài toán react :
    /*
        B1: Xây dựng layout hoàn chỉnh
        B2: Phân tích dữ liệu thay đổi (xác định state là gì khi click vào đâu thì giao diện chổ nào thay đổi) xác định kiểu dữ liệu lưu trữ
        B3: Xây dựng xử lý thay đổi state
    */
    state = { 
        fSize: 16 //Giá trị thay đổi trên giao diện là fontSize của chữ => fontSize là state
    }
    handleFontSize = (size) =>{
        //Thay đổi state = hàm setState
        this.setState({
            fSize: this.state.fSize + size
        })
    }
    render() {
        return (
            <div>
                <h3>Demo về state </h3>
                <h3>Ví dụ 1: Thay đổi font chữ </h3>
                <p style={{fontSize:this.state.fSize}}>Đoạn văn bản ..........................</p>
                <button className="btn btn-outline-success mr-2" onClick={()=>{
                    this.handleFontSize(1);
                }}>+</button>
                <button className="btn btn-outline-success" onClick={()=>{
                    this.handleFontSize(-1);
                }}>-</button>
                <h3>Ví dụ 2: Bài tập chọn xe</h3>
                <Example2 />
            </div>
        )
    }
}
