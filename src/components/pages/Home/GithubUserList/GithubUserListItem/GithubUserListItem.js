import React from "react";
import { Col, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GithubUserListItem = ({ user }) => {
  const { login, avatar_url } = user;
  return (
    <Col className="mt-3 col-6 col-sm-4 col-md-3">
      <Card>
        <Card.Body>
          <img
            src={avatar_url}
            alt={login}
            className="rounded-circle img-fluid"
          />
          <div className="text-center mt-2">
            <strong>{login}</strong>
          </div>
          <Link
            to={`user/${login}`}
            className="btn btn-danger d-block mx-auto mt-2"
          >
            View Profile
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

GithubUserListItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default GithubUserListItem;
