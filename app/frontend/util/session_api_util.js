export const signup = ({user}) => { // AJAX request to create a new user
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {user}
  });
};

export const login = (user) => { // AJAX request to create a new session (login)
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {user}
  });
};

export const logout = () => { // AJAX request to delete a new session (logout)
  return $.ajax({
    method: 'DELETE',
    url: 'api/session'
  });
};
