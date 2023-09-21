import { useDispatch } from "react-redux";
import { fetchPokemonDetailStart } from "../features/modal/ModalSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { PokemonCardProps } from "../interfaces";
import SkeletonCard from "./SkeletonCard";

const PokemonCard = ({ apiLink }: PokemonCardProps) => {
  const [pokemonData, setPokemonData] = useState<any | null>(null);
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    dispatch(fetchPokemonDetailStart(apiLink));
  };

  // Fetch Pokémon details from API
  const fetchPokemonDetails = async () => {
    try {
      const response = await axios.get(apiLink);
      setPokemonData(response.data);
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  };
  useEffect(() => {
    fetchPokemonDetails();
  }, [apiLink]);

  if (!pokemonData) {
    // a loading indicator here
    return <SkeletonCard />;
  }

  // setting background color and shadow color with tailwind colors depending on the pokemon type
  const pokemonType = pokemonData.types[0].type.name;
  let shadowColor = "";
  let backgroundColor = "";

  switch (pokemonType) {
    case "grass":
      shadowColor = "shadow-grass hover:shadow-grass ";
      backgroundColor = "bg-grass";
      break;
    case "fire":
      shadowColor = "shadow-fire hover:shadow-fire ";
      backgroundColor = "bg-fire";
      break;
    case "water":
      shadowColor = "shadow-water hover:shadow-water ";
      backgroundColor = "bg-water";
      break;
    case "bug":
      shadowColor = "shadow-bug hover:shadow-bug ";
      backgroundColor = "bg-bug";
      break;
    case "normal":
      shadowColor = "shadow-normal hover:shadow-normal ";
      backgroundColor = "bg-normal";
      break;
    case "poison":
      shadowColor = "shadow-poison hover:shadow-poison ";
      backgroundColor = "bg-poison";
      break;
    case "electric":
      shadowColor = "shadow-electric hover:shadow-electric ";
      backgroundColor = "bg-electric";
      break;
    case "ground":
      shadowColor = "shadow-ground hover:shadow-ground ";
      backgroundColor = "bg-ground";
      break;
    case "fairy":
      shadowColor = "shadow-fairy hover:shadow-fairy ";
      backgroundColor = "bg-fairy";
      break;
    case "fighting":
      shadowColor = "shadow-fighting hover:shadow-fighting ";
      backgroundColor = "bg-fighting";
      break;
    case "psychic":
      shadowColor = "shadow-psychic hover:shadow-psychic ";
      backgroundColor = "bg-psychic";
      break;
    case "rock":
      shadowColor = "shadow-rock hover:shadow-rock ";
      backgroundColor = "bg-rock";
      break;
    case "ghost":
      shadowColor = "shadow-ghost hover:shadow-ghost ";
      backgroundColor = "bg-ghost";
      break;
    case "ice":
      shadowColor = "shadow-ice hover:shadow-ice ";
      backgroundColor = "bg-ice";
      break;
    case "dragon":
      shadowColor = "shadow-dragon hover:shadow-dragon ";
      backgroundColor = "bg-dragon";
      break;
    case "dark":
      shadowColor = "shadow-dark hover:shadow-dark ";
      backgroundColor = "bg-dark";
      break;
    case "steel":
      shadowColor = "shadow-steel hover:shadow-steel ";
      backgroundColor = "bg-steel";
      break;
    default:
      shadowColor = "shadow-normal hover:shadow-normal ";
      backgroundColor = "bg-normal";
  }

  return (
    <div
      onClick={handleModalOpen}
      className={`w-56 relative flex justify-between p-4 pt-6 pb-2 rounded-2xl shadow-md hover:shadow-lg ${
        backgroundColor + " " + shadowColor
      }  transition duration-300 ease-in-out cursor-pointer`}>
      <h5 className='text-white/50 absolute top-1 right-3 z-0 text-3xl'>
        #
        {pokemonData.id < 10
          ? "00" + pokemonData.id
          : pokemonData.id < 100
          ? "0" + pokemonData.id
          : pokemonData.id}
      </h5>
      <div className='flex flex-col text-white gap-y-3'>
        <h2 className='font-bold text-lg drop-shadow-[1px_1px_3px_rgba(255,255,255,0.6)]'>
          {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
        </h2>
        <div className='flex flex-col gap-y-2'>
          {pokemonData.types.map((type: any) => (
            <div
              key={type.type.name}
              className='w-fit text-xs bg-white/30 px-3 py-1 rounded-full'>
              {type.type.name}
            </div>
          ))}
        </div>
      </div>
      <img
        src={pokemonData.sprites.other["official-artwork"].front_default}
        alt={pokemonData.name}
        className='z-10 w-28'
      />
    </div>
  );
};

export default PokemonCard;
