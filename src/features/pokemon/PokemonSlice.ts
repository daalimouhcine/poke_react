import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
  data: any[]; // You can define a proper type here based on the API response
  loading: boolean;
  error: string | null;
}

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
  },
});

export const { fetchPokemonStart, fetchPokemonSuccess, fetchPokemonFailure } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
