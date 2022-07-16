import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGitHub from "./hooks/github-hooks";


const App = () => {
  const { gitHubState } = useGitHub();
  return (
    <Layout>
      {gitHubState.hasUser ? (
        <>
          {gitHubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : ( <NoSearch /> )}
    </Layout>
  );
};

export default App;
