import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import UserRepoItem from "./UserRepoItem/UserRepoItem";
import GithubContext from "../../../../contexts/github/githubContext";
import { Alert } from "react-bootstrap";
const UserRepos = () => {
  const githubContext = useContext(GithubContext);
  const {
    loading: { userReposLoading },
    userRepos,
    error: { userReposerror },
  } = githubContext;
  if (userReposLoading) {
    return (
      <Spinner animation="grow" className="d-block mx-auto mt-2"></Spinner>
    );
  }
  return (
    <>
      {userReposerror && (
        <Alert variant={userReposerror.type}>{userReposerror.msg}</Alert>
      )}
      <h4 className="pt-2 pb-2 text-uppercase	">All Your repos</h4>
      <ul className="list-group mb-2">
        {userRepos.map((r) => (
          <UserRepoItem key={r.id} repo={r}></UserRepoItem>
        ))}
        {userRepos.length === 0 ? (
          <li className="list-group-item">No repos Found.</li>
        ) : (
          ""
        )}
      </ul>
    </>
  );
};

export default UserRepos;
