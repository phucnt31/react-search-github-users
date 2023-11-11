import React from "react";
import loadingImage from "../images/preloader.gif";
import { Info, Repos, User, Search, Navbar } from "../components";
import { useGitHubContext } from "../context/context";

const Dashboard = () => {
  const { isLoading } = useGitHubContext();

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className="loading-img" alt="loading" />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
