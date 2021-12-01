/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from "react";
import { connect } from "react-redux";
class Player extends Component {
  render() {
    console.log("props", this.props.mangDatCuoc);
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            className="mt-2"
            style={{ transform: "rotate(120deg)" }}
            width={75}
            height={75}
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            alt={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
          ></img>
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/GameOanTuTi/player.png"
          style={{ width: 150, height: 150 }}
          alt="./img/GameOanTuTi/player.png"
        ></img>
        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            //Xét giá trị đặt cược thêm viền cho item được chọn
            let border = {};
            if (item.datCuoc) {
              border = { border: "3px solid orange" };
            }
            return (
              <div key={index} className="col-4">
                <button
                  style={border}
                  className="btnItem"
                  onClick={() => {
                    this.props.datCuoc(item.ma);
                  }}
                >
                  <img
                    style={{ width: 50, height: 50 }}
                    src={item.hinhAnh}
                    alt={item.hinhAnh}
                  ></img>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
