import './App.css';
import { Provider } from "react-redux"
import store from "./store/index"
import { BrowserRouter, NavLink, Switch, Route, Redirect } from "react-router-dom"
import { PokemonList } from './containers/PokemonList';
import { Pokemon } from './containers/Pokemon';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <nav>
            <NavLink to="/">Search</NavLink>
          </nav>
          <Switch>
            <Route path="/" exact component={PokemonList} />
            <Route path="/pokemon/:pokemon" exact component={Pokemon} />
            <Redirect to={"/"} />

          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
