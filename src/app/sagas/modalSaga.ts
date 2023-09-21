import { put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";
import {
  fetchPokemonDetailSuccess,
  fetchPokemonDetailFailure,
} from "../../features/modal/ModalSlice";

function* fetchPokemonDetail(action: any): Generator<any, void, any> {
  try {
    const pokemonDetail = yield call(() => axios.get(action.payload));
    // console.log(pokemonDetail.data);
    yield put(fetchPokemonDetailSuccess(pokemonDetail.data));
  } catch (error: any) {
    yield put(fetchPokemonDetailFailure(error));
  }
}

export function* watchFetchPokemonDetail() {
  yield takeLatest("modal/fetchPokemonDetailStart", fetchPokemonDetail);
}
