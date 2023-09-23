import {
  runSaga,
  // Saga
} from "redux-saga";
import axios from "axios";
import { fetchPokemonList } from "../../app/sagas/pokemonSaga"; // Import the saga you want to test
import {
  fetchPokemonSuccess,
  fetchPokemonFailure,
} from "../../app/reducers/PokemonSlice";

// Mock axios.get to return a resolved promise with data
jest.mock("axios");

describe("fetchPokemonList Saga", () => {
  it("should dispatch success action when data is fetched successfully", async () => {
    const dummyData = {
      data: {
        results: [
          { name: "Pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
          { name: "Charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
        ],
        next: "https://pokeapi.co/api/v2/pokemon?offset=25&limit=25",
      },
    };

    // Mock axios.get to return the dummyData
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(
      dummyData
    );

    const dispatched: any[] = [];

    // Run the saga
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchPokemonList
    );

    // Expect fetchPokemonSuccess action to be dispatched with the dummyData
    expect(dispatched).toContainEqual(
      fetchPokemonSuccess(dummyData.data.results)
    );
  });

  it("should dispatch failure action when data fetching fails", async () => {
    const errorMessage = "An error occurred.";

    // Mock axios.get to throw an error
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(
      new Error(errorMessage)
    );

    const dispatched: any[] = [];

    // Run the saga
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchPokemonList
    );

    // Expect fetchPokemonFailure action to be dispatched with the error message
    expect(dispatched).toContainEqual(fetchPokemonFailure(errorMessage));
  });
});
