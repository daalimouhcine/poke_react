import { all } from "redux-saga/effects";
import { watchFetchPokemon, watchFetchMorePokemon } from "./pokemonSaga";

export default function* rootSaga() {
  yield all([watchFetchPokemon(), watchFetchMorePokemon()]);
}
