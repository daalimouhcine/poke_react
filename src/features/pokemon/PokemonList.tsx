import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonStart, fetchMorePokemonStart } from "./PokemonSlice";
import { useEffect } from "react";
import PokemonCard from "../../components/PokemonCard";
import SkeletonCard from "../../components/skeletonCard";
import InfiniteScroll from "react-infinite-scroll-component";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state: any) => state.pokemon.data);

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
        <InfiniteScroll
          dataLength={pokemonData.length}
          next={handleLoadMore}
          hasMore={true}
          loader={<SkeletonCard />}
          scrollableTarget='scrollableDiv'
          className='flex gap-5 flex-wrap justify-evenly p-5'>
          {pokemonData.map((pokemon: any) => (
            <PokemonCard key={pokemon.name} apiLink={pokemon.url} />
          ))}
        </InfiniteScroll>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default PokemonList;
