// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";
import Layout from "./components/Layout";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Main from "./pages/Main";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" Component={Main} />
      </Routes>
    </Layout>
  );
};

export default App;
