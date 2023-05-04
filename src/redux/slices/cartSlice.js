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
      state.totalPrice=state.items.reduce(((sum, obj)=>sum+obj.price), 0);
    },
    clearItems(state, action) {
      state.items = [];
      state.totalPrice=0;
    }
  }
});

export const selectCart=state=>state.cart;
export const selectCartItemById=id=>state=>state.cart.items.find(obj=>obj.id===id)

export const { addItem, minusItem,removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;