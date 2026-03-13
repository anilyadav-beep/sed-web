const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        isLoggedIn: false,
      };
    case 'BAD_LOGIN':
      return {
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default reducer;
