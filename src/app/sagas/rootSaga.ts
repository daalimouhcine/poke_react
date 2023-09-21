import { all } from "redux-saga/effects";
import { watchFetchPokemon, watchFetchMorePokemon } from "./pokemonSaga";
import { watchFetchPokemonDetail } from "./modalSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPokemon(),
    watchFetchMorePokemon(),
    watchFetchPokemonDetail(),
  ]);
}
