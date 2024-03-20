import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maxOrder: 0,
  orderId: 0,
  orders: [],
  orderDelivered: 0,
};

export const orderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    addNewOrder: (state, action) => {
      const date = new Date();
      let time = date.getTime();
      const newObj = {
        ...action.payload,
        stageTime: time,
        timestamp: time,
        order: state.orderId + 1,
        stages: 0,
      };
      state.orders.push(newObj);
      state.orderId += 1;
      state.maxOrder += 1;
    },
    nextStage: (state, action) => {
      const newArr = state.orders.map((item, i) => {
        const date = new Date();
        let time = date.getTime();
        return item.order === action?.payload?.orderId
          ? {
              ...item,
              stageTime: time,
              stages: item?.stages + 1,
            }
          : item;
      });
      state.orders = newArr;
      if(action?.payload?.currentStage===2){
        state.orderDelivered +=1
        state.maxOrder -=1
      }
    },
    cancel: (state, action) => {
      const newArr = state.orders.filter((item) => {
        return item.order !== action?.payload?.orderId
         
      });
      state.orders = newArr;
      state.maxOrder -=1
    },
  },
});

export const { addNewOrder, nextStage ,cancel} = orderSlice.actions;

export default orderSlice.reducer;
