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
  // requests, loading
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // error
  const [error, setError] = useState({ show: false, msg: "" });

  // search user
  const searchGithubUser = async (user) => {
    setError({ show: false, msg: "" });
    try {
      setIsLoading(true);
      const resp = await axios.get(`${rootUrl}/users/${user}`);
      if (resp) {
        setGithubUser(resp.data);
        const { login, followers_url } = resp.data;
        // repos
        const respRepos = await axios.get(
          `${rootUrl}/users/${login}/repos?per_page=100`
        );
        // followers
        const respFollowers = await axios.get(`${followers_url}?per_page=100`);
        // Wait for all promise to finish
        const [repos, followers] = await Promise.allSettled([
          respRepos,
          respFollowers,
        ]);
        if (repos.status === "fulfilled") setRepos(repos.value.data);
        if (followers.status === "fulfilled")
          setFollowers(followers.value.data);
      } else {
        setError({ show: true, msg: "there is no user with that username" });
      }
    } catch (error) {
      console.log(error);
    }
    checkRequests();
    setIsLoading(false);
  };

  // check rate
  const checkRequests = async () => {
    try {
      const resp = await axios.get(`${rootUrl}/rate_limit`);
      let {
        rate: { remaining },
      } = resp.data;
      setRequests(remaining);
      if (remaining === 0) {
        setError({
          show: true,
          msg: "sorry, you have exceeded your hourly rate limit!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkRequests();
  }, []);

  return (
    <GitHubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        isLoading,
        searchGithubUser,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export const useGitHubContext = () => useContext(GitHubContext);
