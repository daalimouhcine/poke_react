import { put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";
import {
  fetchPokemonSuccess,
  fetchPokemonFailure,
} from "../../features/pokemon/PokemonSlice";

const BASE_URL = "https://pokeapi.co/api/v2";

function* fetchPokemonList(): Generator<any, void, any> {
  console.log("pokemon saga");
  try {
    const pokemonList = yield call(() =>
      axios.get(`${BASE_URL}/pokemon?limit=10`)
    );
    yield put(fetchPokemonSuccess(pokemonList.data.results));
  } catch (error: any) {
    yield put(fetchPokemonFailure(error));
  }
}

export function* watchFetchPokemon() {
  yield takeLatest("pokemon/fetchPokemonStart", fetchPokemonList);
}
