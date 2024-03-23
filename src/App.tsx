import React from "react";
import { ThemeProvider } from "styled-components";
import MainLayout from "./layouts/MainLayout/MainLayout";
import * as theme from "./theme";
import * as Styled from "./app.styled";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { WrapPage, WrapBody } from "./App.styled";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyles />
      <MainLayout>
        <WrapPage>
          <Header />
          <WrapBody>
            <TaskList />
          </WrapBody>
        </WrapPage>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
