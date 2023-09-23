import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState } from "../../interfaces/modal";

const initialState: ModalState = {
  pokemonDetail: null,
  loading: false,
  error: null,
  selectedPokemon: null,
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    fetchPokemonDetailStart(state, action: PayloadAction<string>) {
      state.selectedPokemon = action.payload;
      state.loading = true;
      state.error = null;
    },
    fetchPokemonDetailSuccess(state, action: PayloadAction<any>) {
      state.pokemonDetail = action.payload;
      state.loading = false;
      state.isOpen = true;
      state.error = null;
    },
    fetchPokemonDetailFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    closeModal(state) {
      state.pokemonDetail = null;
      state.loading = false;
      state.isOpen = false;
      state.error = null;
      state.selectedPokemon = null;
    },
  },
});

export const {
  fetchPokemonDetailStart,
  fetchPokemonDetailSuccess,
  fetchPokemonDetailFailure,
  closeModal,
} = modalSlice.actions;


export default modalSlice.reducer;
