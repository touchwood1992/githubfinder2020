import React, { useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import GithubContext from "../../../contexts/github/githubContext";
import UserDetailInfo from "./UserDetailInfo/UserDetailInfo";
import UserRepos from "./UserRepos/UserRepos";
function UserDetail(props) {
  const githubContext = useContext(GithubContext);

  const { getUserDetail, getUserRepos } = githubContext;

  useEffect(() => {
    getUserDetail(props.match.params.id);
    getUserRepos(props.match.params.id);
  }, []);

  return (
    <Container>
      <UserDetailInfo />
      <UserRepos />
    </Container>
  );
}

export default UserDetail;
