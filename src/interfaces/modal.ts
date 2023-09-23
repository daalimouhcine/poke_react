import { PokemonDetail } from ".";

export interface ModalState {
  pokemonDetail: PokemonDetail | null;
  loading: boolean;
  error: string | null;
  selectedPokemon: string | null;
  isOpen: boolean;
}
