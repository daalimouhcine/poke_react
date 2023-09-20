import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonStart } from "./PokemonSlice";
import { useEffect } from "react";
import PokemonCard from "../../components/PokemonCard";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state: any) => state.pokemon.data);
  const loading = useSelector((state: any) => state.pokemon.loading);

  useEffect(() => {
    // call action creator to fetch data from API
    dispatch(fetchPokemonStart());
  }, []);

  // Check if pokemonData is defined
  if (loading) return <div>loading...</div>;

  return (
    <div>
      <button>Pokemon List</button>
      {/* Check if pokemonData is defined before accessing its properties */}
      {pokemonData ? (
        <div className='flex gap-5 flex-wrap justify-evenly p-5'>
          {pokemonData.map((pokemon: any) => (
            <PokemonCard key={pokemon.name} apiLink={pokemon.url} />
          ))}
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default PokemonList;
