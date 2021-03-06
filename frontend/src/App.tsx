/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { GlobalStyle } from "./assets/theme/base";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { All } from "./components/All";
import { AdminPage } from "./components/AdminPage";
import { UserPage } from "./components/UserPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const store = {};

export const App = () => {
  return (
    <BrowserRouter>
      <>
        <Global
          styles={css`
            body {
              ${GlobalStyle}
            }
          `}
        ></Global>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/signin" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};
