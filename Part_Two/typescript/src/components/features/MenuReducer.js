import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    removeItem: (state, action) => {
      state.menu = state.menu.filter((item) => {
        return item.title !== action.payload;
      });
    },
    addItem: (state, action) => {
      const item = state.menu.find((item) => {
        return item.title === action.payload.title;
      });
      if (item) {
        alert("item already exists");
      } else {
        state.menu.push(action.payload);
        alert("item added to menu");
      }
    },
  },
});

export const menuActions = { ...menuSlice.actions };

export default menuSlice.reducer;
