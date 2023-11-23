import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import styled from "styled-components";

const App: React.FC = () => {
  return (
    <Layout>
      <Test>hello</Test>
    </Layout>
  );
};

export default App;

const Test = styled.div`
  width: 100%;
  height:100%;
`;
