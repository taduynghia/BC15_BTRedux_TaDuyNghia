import React, { Component } from "react";
import "../font/BaiTapGameXucXac.css";
import ThongTinTroChoi from "./ThongTinTroChoi";
import XucXac from "./XucXac";
import { connect } from "react-redux";

class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div className="game ">
        <div className="title display-4 text-center mt-5">
          Bài Tập Game Xúc Xắc
        </div>
        <div className="row mt-5 text-center">
          <div className="col-5 ">
            <button
              className="btnGame"
              onClick={() => {
                this.props.datCuoc(true);
              }}
            >
              TÀI
            </button>
          </div>
          <div className="col-2">
            <XucXac />
          </div>
          <div className="col-5">
            <button
              className="btnGame"
              onClick={() => {
                this.props.datCuoc(false);
              }}
            >
              XỈU
            </button>
          </div>
        </div>
        <div className="thongTinTroChoi text-center">
          <ThongTinTroChoi />
          <button
            className="btn btn-success mt-5 p-2 display-4"
            onClick={() => {
              this.props.playGame();
            }}
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      //tạo action taiXiu
      let action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      //Gửi lên Reducer
      dispatch(action);
    },
    playGame: () => {
      //Gửi dữ liệu type PLAY_GAME lên reducer
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(BaiTapGameXucXac);
