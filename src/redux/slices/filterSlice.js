import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: 'rating',
  category: 0,
  searchValue: '',
  currentPage:1,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action){
      state.category = action.payload;
      console.log('category ', state.category);
    },
    setSort(state, action){
      state.sort = action.payload;
      console.log('sort ', state.sort);
    },
    setSearchValue(state, action){
      state.searchValue = action.payload;
      console.log('searchValue ', state.searchValue);
    },
    setCurrentPage(state, action){
      state.currentPage = action.payload;
      console.log('pageCount ', state.currentPage);
    }, 
    setFilters(state, action){
      state.sort=action.payload.sort;
      state.category=+action.payload.category;
      state.currentPage=+action.payload.currentPage;
    }
  }
});

export const selectFilter=state=>state.filter;
export const selectSort=state=>state.filter.sort;

export const {setCategory, setSort, setSearchValue, setCurrentPage, setFilters}=filterSlice.actions;

export default filterSlice.reducer;
