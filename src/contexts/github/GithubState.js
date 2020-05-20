import React, { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import githubConfigObj from "../../config/githubConfig";
import axios from "axios";
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

const GithubState = (props) => {
  //=======================INITIAL STATE WHEN APP IS LOADED=======================
  const initialState = {
    users: [],
    loading: {
      userSearchloading: false,
      userDetailLoading: false,
      userReposLoading: false,
    },
    userDetail: null,
    userRepos: [],
    error: {
      userSearcherror: null,
      userDetailerror: null,
      userReposerror: null,
    },
    searchValue: "",
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // =======================Private methods=======================
  const setLoading = (type) => {
    return {
      type: SET_LOADING,
      payload: type,
    };
  };
  const removeLoading = (type) => {
    return {
      type: REMOVE_LOADING,
      payload: type,
    };
  };
  const setError = (errorType, er) => {
    return {
      type: SET_ERROR,
      payload: { errorType, er },
    };
  };
  const removeError = (errorType) => {
    return {
      type: REMOVE_ERROR,
      payload: errorType,
    };
  };

  //=======================Public methods=======================
  const searchUsers = async (searchText) => {
    try {
      dispatch(setLoading("userSearchloading"));

      const githubResponse = await axios.get(
        `https://api.github.com/search/users?q=${searchText}`,
        {
          headers: {
            Authorization: `Basic ${btoa(
              `${githubConfigObj.GITHUB_CLIENT_ID}:${githubConfigObj.GITHUB_CLIENT_SECRET}`
            )}`,
          },
        }
      );
      dispatch({
        type: SEARCH_USERS,
        payload: { items: githubResponse.data.items, searchValue: searchText },
      });
    } catch (error) {
      dispatch(
        setError("userSearcherror", { msg: error.message, type: "danger" })
      );
      dispatch({
        type: RESET_USERS,
      });
      setTimeout(() => {
        dispatch(removeError("userSearcherror"));
      }, 3000);
    }
  };

  const resetUsers = () => {
    dispatch({
      type: RESET_USERS,
    });
  };

  const getUserDetail = async (uname) => {
    try {
      dispatch(setLoading("userDetailLoading"));

      const udetail = await axios.get(`https://api.github.com/users/${uname}`, {
        headers: {
          Authorization: `Basic ${btoa(
            `${githubConfigObj.GITHUB_CLIENT_ID}:${githubConfigObj.GITHUB_CLIENT_SECRET}`
          )}`,
        },
      });
      dispatch({ type: USER_DETAIL, payload: udetail.data });
    } catch (error) {
      dispatch(removeLoading("userDetailLoading"));

      dispatch(
        setError("userDetailerror", { msg: error.message, type: "danger" })
      );

      setTimeout(() => {
        dispatch(removeError("userDetailerror"));
      }, 3000);
    }
  };
  const getUserRepos = async (uname) => {
    try {
      dispatch(setLoading("userReposLoading"));
      const userRepos = await axios.get(
        `https://api.github.com/users/${uname}/repos`,
        {
          headers: {
            Authorization: `Basic ${btoa(
              `${githubConfigObj.GITHUB_CLIENT_ID}:${githubConfigObj.GITHUB_CLIENT_SECRET}`
            )}`,
          },
        }
      );

      dispatch({ type: USER_REPOS, payload: userRepos.data });
    } catch (error) {
      dispatch(removeLoading("userReposLoading"));

      dispatch(
        setError("userReposerror", { msg: error.message, type: "danger" })
      );

      setTimeout(() => {
        dispatch(removeError("userReposerror"));
      }, 3000);
    }
  };

  return (
    <>
      {console.log("Environment", process.env.NODE_ENV)}
      {console.log("GITHUB CLIENT ID", githubConfigObj.GITHUB_CLIENT_ID)}
      {console.log("GITGUB SECRET", githubConfigObj.GITHUB_CLIENT_SECRET)}
      <GithubContext.Provider
        value={{
          users: state.users,
          userDetail: state.userDetail,
          userRepos: state.userRepos,
          error: state.error,
          loading: state.loading,
          searchValue: state.searchValue,
          searchUsers,
          resetUsers,
          getUserDetail,
          getUserRepos,
        }}
      >
        {props.children}
      </GithubContext.Provider>
    </>
  );
};
export default GithubState;
