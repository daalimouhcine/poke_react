import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={PokemonList} />
        <Route path='/pokemon/:id' component={PokemonDetailModal} />
      </Switch>
    </Router>
  );
}

export default App;
