import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice += action.payload.price;
    },
    minusItem(state,action){
      const findItem = state.items.find(obj => obj.id === action.payload);
      if(findItem){
        findItem.count--;
        if(findItem.count<0){
          state.items.splice(state.items.indexOf(findItem), 1)
        }
      }
    },
    removeItem(state, action) {
      state.items=state.items.filter(obj => obj.id !== action.payload);

    },
    clearItems(state, action) {
      state.items = [];
      state.totalPrice=0;
    }
  }
});

export const { addItem, minusItem,removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;