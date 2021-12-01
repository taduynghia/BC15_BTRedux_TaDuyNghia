import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    productList = [
        { id: 1, name: 'black car', img: './img/CarBasic/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './img/CarBasic/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './img/CarBasic/products/silver-car.jpg', price: 3000 },
        { id: 4, name: 'steel car', img: './img/CarBasic/products/steel-car.jpg', price: 4000 },
    ]

    renderTable = () => {
        // //Cách 1: 
        // let arrJSX = [];
        // // let trJSX = <tr></tr>
        // // console.log(trJSX);
        // for (let i = 0; i < this.productList.length; i++) {
        //     //Mỗi lần duyệt sẽ lấy ra 1 product
        //     let product = this.productList[i];
        //     //Từ product đó mình sẽ tạo ra 1 tag jsx object tương ứng
        //     let tr = <tr>
        //         <th>{product.id}</th>
        //         <th>{product.name}</th>
        //         <th>{product.price}</th>
        //         <th><img src={product.img} alt="..." width="50" height="50" /></th>
        //         <th></th>
        //     </tr>;
        //     //Đưa các jsx vào mảng
        //     arrJSX.push(tr); // [<tr></tr>,<tr></tr>,<tr></tr>,<tr></tr>]
        // }
        //Cách 2: sử dụng hàm map 

        return this.productList.map((prod, index) => {
            return <tr key={index}>
                <th>{prod.id}</th>
                <th>{prod.name}</th>
                <th>{prod.price}</th>
                <th><img src={prod.img} alt="..." width="50" height="50" /></th>
                <th></th>
            </tr>
        }); //[<tr></tr>,<tr></tr>,<tr></tr>,<tr></tr>] 

        // return arrJSX;

    }

    renderWithCard = () => {
        return this.productList.map((product,index)=>{
            return <div className="col-3" key={index}>
            <div className="card">
                <img src={product.img} alt="..." className="w-100" />
            </div>
            <div className="card-body bg-dark text-white">
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div>
        </div>
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Render with map</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>img</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                        {/* <tr>
                            <th>1</th>
                            <th>red car</th>
                            <th>1000</th>
                            <th><img src="https://picsum.photos/200" alt="..." width="50" height="50" /></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>1</th>
                            <th>red car</th>
                            <th>1000</th>
                            <th><img src="https://picsum.photos/200" alt="..." width="50" height="50" /></th>
                            <th></th>
                        </tr> */}
                    </tbody>
                </table>

                <hr />
                <h3 className="text-center">Render with card</h3>
                <div className="row">
                    {this.renderWithCard()}
                    {/* <div className="col-3">
                        <div className="card">
                            <img src="https://picsum.photos/200" alt="..." className="w-100" />
                        </div>
                        <div className="card-body bg-dark text-white">
                            <p>Product name</p>
                            <p>Product price</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img src="https://picsum.photos/200" alt="..." className="w-100" />
                        </div>
                        <div className="card-body bg-dark text-white">
                            <p>Product name</p>
                            <p>Product price</p>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
