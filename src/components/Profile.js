import React, { Component } from 'react'



//React class component
export default class Profile extends Component {

    renderABC = () => {
        return <div>abc</div>
    }
    //Phương thức render là phương thức trả về giao diện của component này
    render() {
        return (
            <div className="w-25">
                <div className="card text-left bg-dark text-light">
                    <img className="card-img-top" src="https://i.pravatar.cc/300" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">Họ tên: Sĩ đẹp trai</h4>
                        <p className="card-text">Tuổi: 18</p>
                    </div>
                </div>
            </div>
        )
    }
}
