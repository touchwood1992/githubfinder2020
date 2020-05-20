let githubConfigObj;
if (process.env.NODE_ENV === "production") {
  githubConfigObj = {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_SECRET,
  };
} else {
  githubConfigObj = {
    GITHUB_CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.REACT_APP_SECRET,
  };
}
export default githubConfigObj;
