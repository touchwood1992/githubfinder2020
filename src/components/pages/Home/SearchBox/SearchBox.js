import React, {
  Fragment,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";
import GithubContext from "../../../../contexts/github/githubContext";
import { Alert } from "react-bootstrap";
let searchTime;

function SearchBox() {
  const umountReference = useRef(null);
  const githubContext = useContext(GithubContext);
  const {
    searchUsers,
    resetUsers,
    error: { userSearcherror },
    searchValue,
  } = githubContext;
  const [state, setState] = useState(searchValue);

  useEffect(() => {
    umountReference.current = true;
    return () => {
      umountReference.current = false;
      clearTimeout(searchTime);
    };
  }, []);

  const changeSearchValue = (e) => {
    setState(e.target.value);

    clearTimeout(searchTime);
    searchTime = setTimeout(
      (value) => {
        if (value.trim() !== "") {
          searchUsers(value)
            .then((v) => {
              if (umountReference.current) {
                setState("");
              }
            })
            .catch();
        } else {
          resetUsers();
          setState("");
        }
      },
      1000,
      e.target.value
    );
  };

  return (
    <Fragment>
      {console.log("Search Form is here")}
      {userSearcherror && (
        <Alert variant={userSearcherror.type}>{userSearcherror.msg}</Alert>
      )}
      <input
        type="text"
        name="searchVal"
        id=""
        className="form-control"
        value={state}
        onChange={changeSearchValue}
        placeholder="Search with Github username"
        autoComplete="off"
      />
    </Fragment>
  );
}

export default SearchBox;
