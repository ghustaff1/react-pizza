import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus',
  async (url, thunkAPI) => {
    const {data} = await axios.get(url);

    return data;
  }
)

const initialState = {
  items: [],
  status: 'loading', // loading | success | error
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    }
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading'
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      console.log(action)
      console.log('success')
      state.items = action.payload
      state.status = 'success'
    },
    [fetchPizzas.rejected]: (state, action) => {
      console.log('error')
      console.log(action)
      state.status = 'error'
      state.items = [];
    },
  }
});

export const selectPizzaData=state=>state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;