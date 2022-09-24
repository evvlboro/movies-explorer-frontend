export const BASE_URL = 'http://localhost:4000';
// export const BASE_URL = 'api.movies.explorer.evvlboro.nomoredomains.sbs';

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, name })
  })
    .then(checkAnswer)
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(checkAnswer)
}

export const getMyUser = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(checkAnswer);
}

const checkAnswer = res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.statusText}`);
