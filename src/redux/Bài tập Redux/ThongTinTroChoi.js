import React, { Component } from "react";
import { connect } from "react-redux";
class ThongTinTroChoi extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="display-4">
          BẠN CHỌN:
          <span className="text-danger">
            {this.props.taiXiu ? "TÀI" : "XỈU"}
          </span>
        </div>
        <div className="display-4">
          SỐ BÀN THẮNG:
          <span className="text-success"> {this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          TỔNG SỐ BÀN CHƠI:
          <span className="text-primary"> {this.props.tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    taiXiu: state.BaiTapGameXucXacReducer.taiXiu,
    soBanThang: state.BaiTapGameXucXacReducer.soBanThang,
    tongSoBanChoi: state.BaiTapGameXucXacReducer.tongSoBanChoi,
  };
};
export default connect(mapStateToProps)(ThongTinTroChoi);
