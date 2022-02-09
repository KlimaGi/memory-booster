/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { GlobalStyle } from "./assets/styles/base";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { All } from "./components/All";
import { AdminPage } from "./components/AdminPage";
import { UserPage } from "./components/UserPage";
import Login from "./components/Login";
import SignIn from "./components/SignIn";

const store = {};

export const App = () => {
  return (
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
          <Route path="/" element={<All />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};
