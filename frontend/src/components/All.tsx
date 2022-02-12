/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import { UseIcon } from "../services/useIcon";
import bigLogo from "../assets/icons/bigLogo.svg";
import { BackDiv, CenterDiv } from "../assets/styledComponents/publicBack";
import { Button, DivButton } from "../assets/styledComponents/Buttons";

export const All = () => {
  const navigate = useNavigate();
  return (
    <BackDiv>
      <CenterDiv>
        <div>
          <UseIcon icon={bigLogo} name="memory booster logo" />
        </div>
        <DivButton>
          <Button onClick={() => navigate("login")}>Log in</Button>
          <Button onClick={() => navigate("signin")}>Sign in</Button>
        </DivButton>
      </CenterDiv>
    </BackDiv>
  );
};
