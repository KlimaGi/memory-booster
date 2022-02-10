import styled from "@emotion/styled";
import { Center } from "../theme/base";

export const BackDiv = styled.div`
  background: url(images/faraway.jpg);
  background-color: #8aadb1d7;
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
  min-width: 35%;
  border-radius: 2px;
`;

export const LogoDiv = styled.div`
  margin-bottom: 1.4rem;
`;
