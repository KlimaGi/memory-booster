/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { GlobalStyle } from "./assets/styles/base";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AdminPage } from "./components/AdminPage";
import { UserPage } from "./components/UserPage";
import { LoginPage } from "./components/LoginPage";

const store = {};

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Global
            styles={css`
              div {
                ${GlobalStyle}
              }
            `}
          ></Global>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </>
      </BrowserRouter>
    </Provider>
  );
};
