// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   category:0,
//   sort:'rating',
//   searchValue:'',
// }

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState,
//   reducers: {
//     setCategory: (state, i)=>{
//       state.category=i.payload;
//       console.log('category ', state.category);
//     },
//     setSort:(state, sortValue)=>{
//       state.sort=sortValue.payload;
//       console.log('sort ', state.sort);
//     },
//     setSearchValue:(state, searchValue)=>{
//       state.searchValue=searchValue.payload;
//       console.log('searchValue ', state.searchValue);
//     }
//   },
// });

// export const {setCategory, setSort, setSearchValue}=filterSlice.actions;

// export default filterSlice.reducer;

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
    setCategory(state, id){
      state.category = id.payload;
      console.log('category ', state.category);
    },
    setSort(state, sortValue){
      state.sort = sortValue.payload;
      console.log('sort ', state.sort);
    },
    setSearchValue(state, searchValue){
      state.searchValue = searchValue.payload;
      console.log('searchValue ', state.searchValue);
    },
    setCurrentPage(state, currentPage){
      state.currentPage = currentPage.payload;
      console.log('pageCount ', state.currentPage);
    }
  }
});

export const {setCategory, setSort, setSearchValue, setCurrentPage}=filterSlice.actions;

export default filterSlice.reducer;
