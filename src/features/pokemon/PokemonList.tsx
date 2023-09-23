import { useDispatch, useSelector } from "react-redux";
import {
  fetchPokemonStart,
  fetchMorePokemonStart,
} from "../../app/reducers/PokemonSlice";
import { useEffect } from "react";
import PokemonCard from "../../components/card/PokemonCard";
import SkeletonCard from "../../components/card/SkeletonCard";
import PokemonDetailModal from "../../components/modal/PokemonDetailModal";
import { Pokemon } from "../../interfaces";
import { PokemonSliceState } from "../../interfaces/Tredux";

const PokemonList = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(
    (state: PokemonSliceState) => state.pokemon
  );

  useEffect(() => {
    // call action creator to fetch data from API
    dispatch(fetchPokemonStart());
  }, []);

  useEffect(() => {
    const listener = () => {
      // get current scroll progress
      const scrollProgress =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      if (scrollProgress > 98 && !loading) {
        dispatch(fetchMorePokemonStart());
      }
    };

    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [data]);

  return (
    <div>
      <PokemonDetailModal />
      <img
        className='w-fit mx-auto h-32'
        src='/pokemon_logo.png'
        alt='pokemon logo'
      />
      {/* Check if pokemonData is defined before accessing its properties */}
      <div className='flex gap-5 flex-wrap justify-evenly p-5'>
        {data ? (
          data.map((pokemon: Pokemon) => (
            <PokemonCard key={pokemon.name} apiLink={pokemon.url} />
          ))
        ) : (
          <div>No data available</div>
        )}
        {loading && <SkeletonCard />}
      </div>
    </div>
  );
};

export default PokemonList;
