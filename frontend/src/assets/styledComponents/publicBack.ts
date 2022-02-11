import styled from "@emotion/styled";
import { Center } from "../theme/base";
import { lightopasity, bluegrey } from "../theme/colors";

export const BackDiv = styled.div`
  background: url(images/faraway.jpg);
  background-color: ${bluegrey};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  ${Center};
`;

export const CenterDiv = styled.div`
  margin: 0 auto;
  padding: 0;
  ${Center};
  height: 100%;
  min-width: 30%;
  border-radius: 2px;
  background: ${lightopasity};
`;

export const LogoDiv = styled.div`
  margin-bottom: 1.4rem;
`;
