import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalID: null,
  modalState: false,
  card: [],
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalID = action.payload.data;
    },
    closeModal: (state) => {
      state.modalID = null;
    },
    addCard: (state, action) => {
      state.card = [...state.card, ...action.payload];
    },
    delCard: (state) => {
      state.card = [];
    },
    login: (state) => {
      state.modalState = true;
    },
    logout: (state) => {
      state.modalState = false;
      state.card = [];
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { delCard, login, logout, addCard, openModal, closeModal } =
  modalSlice.actions;
