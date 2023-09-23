export interface PokemonState {
  data: Pokemon[];
  loading: boolean;
  error: string | null;
}
export interface Pokemon {
  name: string;
  url: string;
}
export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
export type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export interface HeldItem {
  item: {
    name: string;
    url: string;
  };
}

export interface Move {
  move: {
    name: string;
    url: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
}

export interface PokemonSprite {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: {
    "official-artwork": {
      front_default: string;
      front_shiny: string;
    };
  };
}

export type PokemonDetail = {
  id: number;
  name: string;
  order: number;
  abilities: Ability[];
  base_experience: number;
  forms: Pokemon[];
  height: number;
  weight: number;
  held_items: HeldItem[];
  is_default: boolean;
  moves: Move[];
  sprites: PokemonSprite;
  stats: PokemonStat[];
  types: Type[];
};
