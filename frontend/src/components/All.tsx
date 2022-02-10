/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import { UseIcon } from "../services/useIcon";
import bigLogo from "../assets/icons/bigLogo.svg";
import {
  BackDiv,
  CenterDiv,
  LogoDiv,
} from "../assets/styledComponents/publicBack";

export const All = () => {
  const navigate = useNavigate();
  return (
    <BackDiv>
      <CenterDiv>
        <LogoDiv>
          <UseIcon icon={bigLogo} name="memory booster logo" />
        </LogoDiv>
        <div>
          <button onClick={() => navigate("login")}>Login</button>
          <button onClick={() => navigate("signin")}>Sign In</button>
        </div>
      </CenterDiv>
    </BackDiv>
  );
};
