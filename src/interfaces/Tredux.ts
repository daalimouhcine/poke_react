import { Pokemon, PokemonDetail } from ".";

export interface PokemonSliceState {
  pokemon: {
    data: Pokemon[]; 
    loading: boolean;
    error: string | null;
  };
}

export interface ModalSliceState {
  modal: {
    pokemonDetail: PokemonDetail; // Replace PokemonDetailType with the actual type for your data
    loading: boolean;
    isOpen: boolean;
  };
}


interface FetchPokemonDetailStartAction {
  type: string;
  payload: string;
}

export interface PokemonResponse {
  next: string;
  results: Pokemon[];
}
