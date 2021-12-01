import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../reducers/actions/BaiTapBookingTicketActions";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div>
          <button className="gheDuocChon mt-5 text-light "></button>
          <span className="text-light ml-3" style={{ fontSize: "20px" }}>
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon mt-2 text-light "></button>
          <span className="text-light ml-3" style={{ fontSize: "20px" }}>
            Ghế đang chọn
          </span>
          <br />
          <button
            className="ghe mt-2 text-light"
            style={{ marginLeft: "0px" }}
          ></button>
          <span className="text-light ml-3" style={{ fontSize: "20px" }}>
            Ghế chưa đặt
          </span>
          <br />
        </div>
        <div className="mt-5">
          <table className="table" border="2">
            <thead className="text-light" style={{ fontSize: "30px" }}>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning" style={{ fontSize: "20px" }}>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="text-light" style={{ fontSize: "30px" }}>
              <tr>
                <td></td>
                <td>Tổng tiền</td>
                <td>
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapBookingTicketReducer.danhSachGheDangDat,
  };
};
export default connect(mapStateToProps)(ThongTinDatGhe);
