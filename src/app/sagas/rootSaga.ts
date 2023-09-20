import { all } from "redux-saga/effects";
import { watchFetchPokemon } from "./pokemonSaga";

export default function* rootSaga() {
  yield all([watchFetchPokemon()]);
}
