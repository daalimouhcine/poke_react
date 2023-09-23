import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonState } from "../../interfaces";

const initialState: PokemonState = {
  data: [],
  loading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    fetchPokemonStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPokemonSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchPokemonFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchMorePokemonStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMorePokemonSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.data = [...state.data, ...action.payload];
    },
    fetchMorePokemonFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    }
  },
});

export const { fetchPokemonStart, fetchPokemonSuccess, fetchPokemonFailure, fetchMorePokemonStart, fetchMorePokemonSuccess, fetchMorePokemonFailure} =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
