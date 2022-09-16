import Main from './Main';
import Movies from './Movies';
import SavedMovies from './SavedMovies';
import Register from './Register';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/movies" element={<Movies />} />
      <Route exact path="/saved-movies" element={<SavedMovies />} />
      <Route exact path="/signup" element={<Register />} />
      <Route exact path="/signin" element={<Login />} />
    </Routes>
  );
}

export default App;
