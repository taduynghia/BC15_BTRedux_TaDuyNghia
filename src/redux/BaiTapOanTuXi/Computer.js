import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()}{
      0% {top:-50px}
      25% {top:100px}
      50% {top:-50px}
      75% {top:100px}
      100% {top:0px}
    }`;
    return (
      <div className="text-center playerGame">
        <style>{keyframe}</style>
        <div className="theThink" style={{ position: "relative" }}>
          <img
            className="mt-2"
            style={
              ({ transform: "rotate(120deg)" },
              {
                position: "absolute",
                animation: `randomItem${Date.now()} 0.1s`,
                left: "25%",
              })
            }
            width={75}
            height={75}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer}
          ></img>
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/GameOanTuTi/playerComputer.png"
          style={{ width: 150, height: 150 }}
          alt="./img/GameOanTuTi/playerComputer.png"
        ></img>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    computer: state.BaiTapOanTuXiReducer.computer,
  };
};
export default connect(mapStateToProps)(Computer);
