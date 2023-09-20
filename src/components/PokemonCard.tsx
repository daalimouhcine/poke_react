import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }: any) => {
  return (
    <div>
      <Link to={`/pokemon/${pokemon.name}`}>
        <h3>{pokemon.name}</h3>
      </Link>
    </div>
  );
};

export default PokemonCard;
