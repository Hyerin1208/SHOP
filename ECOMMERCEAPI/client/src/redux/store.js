// 모든 컴포넌트와 페이지에서 store를 사용
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
