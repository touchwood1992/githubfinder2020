import {
  SET_LOADING,
  REMOVE_LOADING,
  SET_ERROR,
  REMOVE_ERROR,
  SEARCH_USERS,
  RESET_USERS,
  USER_DETAIL,
  USER_REPOS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: { ...state.loading, [action.payload]: true },
      };
    case REMOVE_LOADING:
      return {
        ...state,
        loading: { ...state.loading, [action.payload]: false },
      };
    case SET_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          [action.payload.errorType]: action.payload.er,
        },
      };

    case REMOVE_ERROR:
      return {
        ...state,
        error: { ...state.error, [action.payload]: null },
      };

    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload.items,
        searchValue: action.payload.searchValue,
        loading: { ...state.loading, userSearchloading: false },
      };

    case RESET_USERS:
      return {
        ...state,
        users: [],
        searchValue: "",
        loading: { ...state.loading, userSearchloading: false },
      };

    case USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
        loading: { ...state.loading, userDetailLoading: false },
      };

    case USER_REPOS:
      return {
        ...state,
        userRepos: action.payload,
        loading: { ...state.loading, userReposLoading: false },
      };

    default:
      return state;
  }
};
