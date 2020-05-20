import React from "react";
import { Container } from "react-bootstrap";

import SearchBox from "./SearchBox/SearchBox";
import GithubUserList from "./GithubUserList/GithubUserList";
function Home() {
  console.log("Home loaded now please ");

  return (
    <Container>
      <h1 className="main-title">Github Finder</h1>
      <SearchBox />
      <GithubUserList />
    </Container>
  );
}

export default Home;
