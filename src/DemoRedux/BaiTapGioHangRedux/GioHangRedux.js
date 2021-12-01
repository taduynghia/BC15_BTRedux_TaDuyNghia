import React, { Component } from 'react'
import { connect } from 'react-redux';

class GioHangRedux extends Component {




    render() {
        let { gioHang } = this.props;
        console.log('props', this.props)
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá bán</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {gioHang.map((spGH, index) => {
                        return <tr key={index}>
                            <td>{spGH.maSP}</td>
                            <td><img src={spGH.hinhAnh} width={50} alt="..." /></td>
                            <td>{spGH.tenSP}</td>
                            <td>{spGH.giaBan}</td>
                            <td>
                                <button className="btn btn-primary mr-2" onClick={() => {
                                    this.props.tangGiamSoLuong(spGH.maSP, 1)
                                }}>+</button>
                                {spGH.soLuong}
                                <button className="btn btn-primary ml-2" onClick={() => {
                                    this.props.tangGiamSoLuong(spGH.maSP, -1)
                                }}>-</button>

                            </td>
                            <td>{spGH.soLuong * spGH.giaBan}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => {
                                    this.props.xoaGioHang(spGH.maSP);
                                }}>Xoá</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}
//Đưa dữ liệu lên redux định nghĩa mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSPClick) => {
            console.log('maSPClick', maSPClick)
            const action = {
                type: 'XOA_GIO_HANG',
                maSP: maSPClick
            }
            //Dùng hàm dispatch để đưa dữ liệu lên reducer
            dispatch(action);
        },
        tangGiamSoLuong: (maSPClick, soLuong) => {
            console.log(maSPClick,soLuong)
            const action = {
                type:'TANG_GIAM_SO_LUONG',
                maSP:maSPClick,
                soLuong
            }
            //Dùng hàm dispatch  gửi dữ liệu lên reducer
            dispatch(action)
        }
    }
}
//Viết àm kết nối với redux
const mapStateToProps = (rootReducer) => {
    //Muốn lấy state nào từ redux về component sẽ lấy rootReducer . state đó
    return {
        gioHang: rootReducer.stateGioHang,

    }
}
//Sinh ra 1 component có kết nối với redux
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux)