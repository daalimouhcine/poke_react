import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonStart, fetchMorePokemonStart } from "./PokemonSlice";
import { useEffect } from "react";
import PokemonCard from "../../components/PokemonCard";
import SkeletonCard from "../../components/skeletonCard";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state: any) => state.pokemon.data);
  const loading = useSelector((state: any) => state.pokemon.loading);

  useEffect(() => {
    // call action creator to fetch data from API
    dispatch(fetchPokemonStart());
  }, []);

  const handleLoadMore = () => {
    // call action creator to fetch more data from API
    dispatch(fetchMorePokemonStart());
  };

  return (
    <div>
      <img
        className='w-fit mx-auto h-32'
        src='/pokemon_logo.png'
        alt='pokemon logo'
      />
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
      {/* <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleLoadMore}>
        Load More
      </button> */}
       {/* <SkeletonCard /> */}
    </div>
  );
};

export default PokemonList;
