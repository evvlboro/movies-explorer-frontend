import Main from './Main';
import Movies from './Movies';
import SavedMovies from './SavedMovies';
import Register from './Register';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/movies">
        <Movies />
      </Route>
      <Route exact path="/saved-movies">
        <SavedMovies />
      </Route>
      <Route exact path="/signup">
        <Register />
      </Route>
    </Switch>
  );
}

export default App;
