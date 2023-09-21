import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import pokemonReducer from "../../features/pokemon/PokemonSlice";
import modalReducer from "../../features/modal/ModalSlice";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    modal: modalReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
