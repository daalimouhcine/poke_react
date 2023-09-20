import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonStart } from "./PokemonSlice";
import { useEffect } from "react";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state: any) => state.pokemon.data);
  const loading = useSelector((state: any) => state.pokemon.loading);

  useEffect(() => {
    // call action
    dispatch(fetchPokemonStart());
  }, []);

  // Check if pokemonData is defined
  if (loading) return <div>loading...</div>;

  return (
    <div>
      <button>Pokemon List</button>
      {/* Check if pokemonData is defined before accessing its properties */}
      {pokemonData ? (
        <pre>{JSON.stringify(pokemonData, null, 2)}</pre>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default PokemonList;
