import { put, takeLatest, call } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  fetchPokemonSuccess,
  fetchPokemonFailure,
  fetchMorePokemonSuccess,
  fetchMorePokemonFailure,
} from "../reducers/PokemonSlice";
import { PokemonResponse } from "../../interfaces/Tredux";

const BASE_URL = "https://pokeapi.co/api/v2";
let NEXT_URL = "";

export function* fetchPokemonList(): Generator<any, void, any> {
  try {
    const pokemonList: AxiosResponse<PokemonResponse> = yield call(() =>
      axios.get(`${BASE_URL}/pokemon?limit=25`)
    );
    NEXT_URL = pokemonList.data.next;
    yield put(fetchPokemonSuccess(pokemonList.data.results));
  } catch (error: unknown) {
    if (typeof error === "string") {
      yield put(fetchPokemonFailure(error));
    } else {
      yield put(fetchPokemonFailure("An error occurred."));
    }
  }
}
export function* fetchMorePokemonList(): Generator<any, void, any> {
  try {
    const pokemonList: AxiosResponse<PokemonResponse> = yield call(() =>
      axios.get(NEXT_URL)
    );
    NEXT_URL = pokemonList.data.next;
    yield put(fetchMorePokemonSuccess(pokemonList.data.results));
  } catch (error: unknown) {
    if (typeof error === "string") {
      yield put(fetchMorePokemonFailure(error));
    } else {
      yield put(fetchMorePokemonFailure("An error occurred."));
    }
  }
}

export function* watchFetchPokemon() {
  yield takeLatest("pokemon/fetchPokemonStart", fetchPokemonList);
}
export function* watchFetchMorePokemon() {
  yield takeLatest("pokemon/fetchMorePokemonStart", fetchMorePokemonList);
}
