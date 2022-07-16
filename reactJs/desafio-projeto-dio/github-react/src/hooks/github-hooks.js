import { useContext } from "react";
import {GitHubContext} from "../providers/github-providers";

//get data from provider methods
const useGitHub = ()=> {
  const {gitHubState, getUser, getUserRepos, getUserStarred} = useContext(
    GitHubContext
  );
  return {gitHubState, getUser, getUserRepos, getUserStarred};
};

export default useGitHub;
