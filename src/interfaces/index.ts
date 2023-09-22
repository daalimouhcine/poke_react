export interface PokemonState {
  data: any[];
  loading: boolean;
  error: string | null;
}
export interface Pokemon {
  name: string;
  url: string;
}
export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
}

// Props
export interface PokemonCardProps {
  apiLink: string;
}


