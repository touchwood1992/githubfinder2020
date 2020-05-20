import React, { Fragment, useContext } from "react";
import GithubUserListItem from "./GithubUserListItem/GithubUserListItem";
import GithubContext from "../../../../contexts/github/githubContext";
import { Row, Spinner, Alert } from "react-bootstrap";
const GithubUserList = () => {
  const githubContext = useContext(GithubContext);
  const { users, searchValue, loading } = githubContext;

  if (loading.userSearchloading) {
    return (
      <Spinner animation="grow" className="d-block mx-auto mt-2"></Spinner>
    );
  }
  let userHtml;
  if (users.length > 0) {
    userHtml = users.map((u) => <GithubUserListItem key={u.id} user={u} />);
  } else if (searchValue !== "") {
    userHtml = (
      <div className="col-md-12 mt-3">
        <Alert variant="danger" className="text-center">
          No User Found
        </Alert>
      </div>
    );
  } else {
    userHtml = "";
  }
  return (
    <Fragment>
      {console.log("GITHUB USER LIST IS HERE")}

      {searchValue !== "" && (
        <h3 className="text-uppercase pt-2 mt-3">
          Search Result For : {searchValue}
        </h3>
      )}

      <Row>{userHtml}</Row>
    </Fragment>
  );
};

export default GithubUserList;
