import axios from "axios";

const BASE_URL = "https://api.example.com/pokemon";

export async function fetchPokemonList() {
  try {
    const response = await axios.get(`${BASE_URL}/list`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchPokemonDetails(id: number) {
  try {
    const response = await axios.get(`${BASE_URL}/details/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
