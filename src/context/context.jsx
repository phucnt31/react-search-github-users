import React, { useState, useEffect, createContext, useContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  return (
    <GitHubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export const useGitHubContext = () => useContext(GitHubContext);
