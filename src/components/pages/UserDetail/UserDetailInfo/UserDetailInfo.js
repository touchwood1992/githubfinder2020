import React, { useContext } from "react";
import GithubContext from "../../../../contexts/github/githubContext";
import { Row, Col, Spinner, Badge } from "react-bootstrap";
import { Alert } from "react-bootstrap";
const UserDetailInfo = () => {
  const githubContext = useContext(GithubContext);
  const {
    loading: { userDetailLoading },
    userDetail,
    error: { userDetailerror },
  } = githubContext;
  if (userDetailLoading) {
    return (
      <Spinner animation="grow" className="d-block mx-auto mt-2"></Spinner>
    );
  }
  return (
    <>
      {userDetailerror && (
        <Alert variant={userDetailerror.type}>{userDetailerror.msg}</Alert>
      )}
      {userDetail && (
        <Row>
          <Col md={4}>
            <img src={userDetail.avatar_url} alt="" className="img-fluid" />
          </Col>
          <Col md={8}>
            <p>
              <strong>Bio:</strong> {userDetail.bio}
            </p>
            <p>
              <strong>Company:</strong>
              {userDetail.company}
            </p>
            <p>
              <strong>Website: </strong>
              {userDetail.blog}
            </p>
            <p>
              <strong>Location: </strong>
              {userDetail.location}
            </p>
            <p>
              <Badge variant="primary" className=" p-2 mr-1">
                Followers : {userDetail.followers}
              </Badge>
              <Badge variant="secondary" className="p-2 mr-1">
                Following : {userDetail.following}
              </Badge>
              <Badge variant="success" className=" p-2 mr-1">
                Gists : {userDetail.public_gists}
              </Badge>
              <Badge variant="dark" className="p-2">
                Repos : {userDetail.public_repos}
              </Badge>
            </p>
          </Col>
        </Row>
      )}
    </>
  );
};

export default UserDetailInfo;
