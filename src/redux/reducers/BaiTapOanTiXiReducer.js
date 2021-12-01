/* eslint-disable no-fallthrough */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/GameOanTuTi/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/GameOanTuTi/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/GameOanTuTi/bao.png", datCuoc: true },
  ],
  ketQua: "I'm iron man, i love you 3000!!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/GameOanTuTi/keo.png", datCuoc: false },
};
const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      //reset mang:biến tất cả thành false
      let mangCuocUpdate = [...state.mangDatCuoc];
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        //tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do người dùng truyền vào
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      //   console.log("mangCuocUpdate", mangCuocUpdate);
      //   //tìm ra maCuoc để change trạng thái đặt cược ứng với mã cược đó
      //   let index = mangCuocUpdate.findIndex((qc) => qc.ma === action.maCuoc);
      //   console.log("index", index);
      //   if (index !== -1) {
      //     mangCuocUpdate[index].datCuoc = true;
      //   }
      //setState của mangCuoc =>render lại giao diện
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;

      console.log("random", action);
      return { ...state };
    }
    case "END_GAME":
      {
        let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
        let computer = state.computer;
        switch (player.ma) {
          case "keo":
            if (computer.ma === "keo") {
              state.ketQua = "hòa nhau!!!";
            } else if (computer.ma === "bua") {
              state.ketQua = "thua sml!!!";
            } else {
              state.soBanThang += 1;
              state.ketQua = "I'm iron man, i love you 3000!!!";
            }
            break;
          case "bua":
            if (computer.ma === "keo") {
              state.soBanThang += 1;
              state.ketQua = "I'm iron man, i love you 3000!!!";
            } else if (computer.ma === "bua") {
              state.ketQua = "hòa nhau!!!";
            } else {
              state.ketQua = "thua sml!!!";
            }
            break;
          case "bao":
            if (computer.ma === "keo") {
              state.ketQua = "thua sml!!!";
            } else if (computer.ma === "bua") {
              state.soBanThang += 1;
              state.ketQua = "I'm iron man, i love you 3000!!!";
            } else {
              state.ketQua = "hòa nhau!!!";
            }
            break;
          default:
            state.ketQua = "I'm iron man, i love you 3000!!!";
            break;
        }
      }
      state.soBanChoi += 1;
      return { ...state };
    default:
      return { ...state };
  }
};
export default BaiTapOanTuXiReducer;
