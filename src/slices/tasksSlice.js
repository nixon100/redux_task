import { createSlice } from "@reduxjs/toolkit";
import productsData from "../componenet/Products.json";
const initialState = {
  tasksList: productsData.products,
  total: 0,
};
const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTotalToList: (state, action) => {
      state.total = action.payload;
      //   console.log(action.payload);
    },
    addQty: (state, action) => {
      const a = state.tasksList.map((e) => ({ ...e, quantity: 1 }));
      state.tasksList = a;
      //   console.log(state.tasksList)
    },
    Minus: (state, action) => {
      const newItems = [...state.tasksList];
      if (newItems[action.payload].quantity > 1) {
        newItems[action.payload].quantity -= 1;
        newItems[action.payload].price =
          newItems[action.payload].quantity *
          productsData.products[action.payload].price;
      }
      state.tasksList = newItems;
    },
    Plus: (state, action) => {
      console.log(action.payload);
      const newItems = [...state.tasksList];
      newItems[action.payload].quantity += 1;
      newItems[action.payload].price =
        newItems[action.payload].quantity *
        productsData.products[action.payload].price;
      state.tasksList = newItems;
    },
    Remove: (state, action) => {
      const newItems = state.tasksList.filter((_, i) => i !== action.payload);
      state.tasksList = newItems;
    },
  },
});
export const { addTotalToList, addQty, Minus, Plus,Remove } = tasksSlice.actions;
export default tasksSlice.reducer;
