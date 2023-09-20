import { put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";
import {
  fetchPokemonSuccess,
  fetchPokemonFailure,
  fetchMorePokemonSuccess,
  fetchMorePokemonFailure,
} from "../../features/pokemon/PokemonSlice";

const BASE_URL = "https://pokeapi.co/api/v2";
let NEXT_URL = "";

function* fetchPokemonList(): Generator<any, void, any> {
  try {
    const pokemonList = yield call(() =>
      axios.get(`${BASE_URL}/pokemon?limit=100`)
    );
    NEXT_URL = pokemonList.data.next;
    yield put(fetchPokemonSuccess(pokemonList.data.results));
  } catch (error: any) {
    yield put(fetchPokemonFailure(error));
  }
}
function* fetchMorePokemonList(): Generator<any, void, any> {
  try {
    const pokemonList = yield call(() => axios.get(NEXT_URL));
    NEXT_URL = pokemonList.data.next;
    yield put(fetchMorePokemonSuccess(pokemonList.data.results));
  } catch (error: any) {
    yield put(fetchMorePokemonFailure(error));
  }
}

export function* watchFetchPokemon() {
  yield takeLatest("pokemon/fetchPokemonStart", fetchPokemonList);
}
export function* watchFetchMorePokemon() {
  yield takeLatest("pokemon/fetchMorePokemonStart", fetchMorePokemonList);
}
