/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./gioHangReducer";
import BaiTapGameXucXacReducer from "./BaiTapXucXacReducer";
import BaiTapOanTuXiReducer from "./BaiTapOanTiXiReducer";
import BaiTapBookingTicketReducer from "./BaiTapBookingTicketReducer";

const rootReducer = combineReducers({
  //Nơi chứa toàn bộ state của ứng dụng (Thay vì đặt dưới this.state của component)
  stateGioHang: gioHangReducer, //state giỏ hàng
  BaiTapGameXucXacReducer,
  BaiTapOanTuXiReducer,
  BaiTapBookingTicketReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
