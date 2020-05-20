import React from "react";
import PropTypes from "prop-types";
import { Badge } from "react-bootstrap";
const UserRepoItem = ({ repo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div>
        <a href={repo.svn_url} target="_blank" rel="noopener noreferrer">
          {repo.svn_url}
        </a>
      </div>
      <div>
        <Badge variant="danger" className="p-2 mr-1 mb-2">
          Forks : {repo.forks}
        </Badge>
        <Badge variant="dark" className="p-2">
          watchers : {repo.watchers}
        </Badge>
      </div>
    </li>
  );
};

UserRepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default UserRepoItem;
