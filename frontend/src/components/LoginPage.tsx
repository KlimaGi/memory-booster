/** @jsxImportSource @emotion/react */
import Login from "./Login";
import { UseIcon } from "../services/useIcon";
import bigLogo from "../assets/icons/bigLogo.svg";

export const LoginPage = () => (
  <div>
    <UseIcon icon={bigLogo} name="memory booster logo" />
    <Login />
  </div>
);
