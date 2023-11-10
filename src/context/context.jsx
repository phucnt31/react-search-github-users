import React, { useState, useEffect, createContext, useContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
  return <GitHubContext.Provider value={{}}>{children}</GitHubContext.Provider>;
};

export const useGitHubContext = () => useContext(GitHubContext);
