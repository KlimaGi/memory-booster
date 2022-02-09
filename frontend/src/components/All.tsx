/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import { UseIcon } from "../services/useIcon";
import bigLogo from "../assets/icons/bigLogo.svg";

export const All = () => {
  const navigate = useNavigate();
  return (
    <div>
      <UseIcon icon={bigLogo} name="memory booster logo" />
      <button onClick={() => navigate("login")}>Login</button>
      <button onClick={() => navigate("signin")}>Sign In</button>
    </div>
  );
};
