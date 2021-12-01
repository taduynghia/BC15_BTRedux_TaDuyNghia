/* eslint-disable no-unused-vars */

import { DAT_GHE, HUY_GHE } from "./types/BaiTapBookingTicketType";

const stateDefault = {
  danhSachGheDangDat: [
    //{soGhe:1,giá:1000}
  ],
};

const BaiTapBookingTicketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        //khi người dùng click Ghế đang đặt đã có trong mảng=>remove đi

        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        //khi người dùng click Ghế đang đặt chưa có trong mảng=> push vào mảng
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      //cập nhật lại state=> giao diện render lại
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    case HUY_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe
      );
      if (index !== -1) {
        //khi người dùng click Ghế đang đặt đã có trong mảng=>remove đi

        danhSachGheDangDatUpdate.splice(index, 1);
      }
      //cập nhật lại state=> giao diện render lại
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default BaiTapBookingTicketReducer;
