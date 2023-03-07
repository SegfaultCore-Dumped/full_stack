export const SET_USER_LOGGED_IN = 'SET_USER_LOGGED_IN';
export const SET_USER_LOGGED_OUT = 'SET_USER_LOGGED_OUT';
export const SET_USER_FIRST_LOGIN = 'SET_USER_FIRST_LOGIN';

export const setUserLoggedIn = () => (dispatch) => {
  dispatch({
    type: SET_USER_LOGGED_IN,
    payload: true,
  });
};

export const setUserLoggedOut = () => (dispatch) => {
  dispatch({
    type: SET_USER_LOGGED_OUT,
    payload: false,
  });
};
