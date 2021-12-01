const stateDefault = {
  taiXiu: true, //là true:Tài (1->11),false:Xỉu (>12) //Bạn CHọn
  mangXucXac: [
    { ma: 6, hinhAnh: "./img/gameXucXac/6.png" },
    { ma: 6, hinhAnh: "./img/gameXucXac/1.png" },
    { ma: 6, hinhAnh: "./img/gameXucXac/1.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};
// export const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
//   switch (action.type) {
//     default:
//       return { ...state };
//   }
// };

const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC":
      state.taiXiu = action.taiXiu;
      return { ...state };
    case "PLAY_GAME": {
      //Bước 1: Xử lý random xúc xắc
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        //mỗi lần lặp random ra ra số Ngẫu Nhiên từ 1-->6
        let soNgauNhien = Math.floor(Math.random() * 6 + 1);
        //Tạo ra 1 đối tượng xúc xắc ngẫu nhiên từ số ngẫu nhiên
        let xucXacNgauNhien = {
          ma: soNgauNhien,
          hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`,
        };
        //Push vào mảng xúc xắc ngẫu nhiên
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      //Gắn state mangXucXac=mangXucXacNgauNhien
      state.mangXucXac = mangXucXacNgauNhien;
      //xử lý tổng bản chơi
      state.tongSoBanChoi += 1;
      //xử lý số bàn thắng
      let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXac, index) => {
        return (tongDiem += xucXac.ma);
      }, 0);
      //xét điều kiện để người dùng thắng game
      if (
        (tongSoDiem > 11 && state.taiXiu === true) ||
        (tongSoDiem <= 11 && state.taiXiu === false)
      ) {
        state.soBanThang += 1;
      }
      return { ...state };
    }

    default:
      return { ...state };
  }
};
export default BaiTapGameXucXacReducer;
