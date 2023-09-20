/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // add classes background color and shadow color with tailwind colors depending on the pokemon type
    // switch (pokemonType) {
    //   case "grass":
    //     shadowColor = "shadow-grass";
    //     backgroundColor = "bg-grass";
    //     break;
    //   case "fire":
    //     shadowColor = "shadow-fire";
    //     backgroundColor = "bg-fire";
    //     break;
    //   case "water":
    //     shadowColor = "shadow-water";
    //     backgroundColor = "bg-water";
    //     break;
    //   case "bug":
    //     shadowColor = "shadow-bug";
    //     backgroundColor = "bg-bug";
    //     break;
    //   case "normal":
    //     shadowColor = "shadow-normal";
    //     backgroundColor = "bg-normal";
    //     break;
    //   case "poison":
    //     shadowColor = "shadow-poison";
    //     backgroundColor = "bg-poison";
    //     break;
    //   case "electric":
    //     shadowColor = "shadow-electric";
    //     backgroundColor = "bg-electric";
    //     break;
    //   case "ground":
    //     shadowColor = "shadow-ground";
    //     backgroundColor = "bg-ground";
    //     break;
    //   case "fairy":
    //     shadowColor = "shadow-fairy";
    //     backgroundColor = "bg-fairy";
    //     break;
    //   case "fighting":
    //     shadowColor = "shadow-fighting";
    //     backgroundColor = "bg-fighting";
    //     break;
    //   case "psychic":
    //     shadowColor = "shadow-psychic";
    //     backgroundColor = "bg-psychic";
    //     break;
    //   case "rock":
    //     shadowColor = "shadow-rock";
    //     backgroundColor = "bg-rock";
    //     break;
    //   case "ghost":
    //     shadowColor = "shadow-ghost";
    //     backgroundColor = "bg-ghost";
    //     break;
    //   case "ice":
    //     shadowColor = "shadow-ice";
    //     backgroundColor = "bg-ice";
    //     break;
    //   case "dragon":
    //     shadowColor = "shadow-dragon";
    //     backgroundColor = "bg-dragon";
    //     break;
    //   case "dark":
    //     shadowColor = "shadow-dark";
    //     backgroundColor = "bg-dark";
    //     break;
    //   case "steel":
    //     shadowColor = "shadow-steel";
    //     backgroundColor = "bg-steel";
    //     break;
    //   default:
    //     shadowColor = "shadow-normal";
    //     backgroundColor = "bg-normal";
    // }
    extend: {
      colors: {
        grass: "#48D0B0",
        fire: "#FB6C6C",
        water: "#609FB5",
        bug: "#C3CE75",
        normal: "#C2C2A1",
        poison: "#7C538C",
        electric: "#FFD86F",
        ground: "#B1736C",
        fairy: "#f469a9",
        fighting: "#d6b591",
        psychic: "#9B7FA6",
        rock: "#a6aab6",
        ghost: "#735797",
        ice: "#7FCCEC",
        dragon: "#F9BE00",
        dark: "#333",
        steel: "#CCCCDE",
      },
    },
  },
  plugins: [],
};
