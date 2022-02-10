import styled from "@emotion/styled";
import { fontSize, fontFamilyZilla } from "../theme/base";
import { light, purplegrey, dark } from "../theme/colors";

export const Button = styled.button`
  background-color: ${purplegrey};
  color: ${light};
  border-radius: 2px;
  border-style: none;
  font-size: ${fontSize};
  font-family: ${fontFamilyZilla};
  letter-spacing: 1px;
  width: 47%;
  cursor: pointer;
  padding: 1rem;
  margin: 0 0.2rem;
  :hover {
    background-color: ${dark};
  }
  :focus {
    background-color: ${dark};
  }
`;

export const DivButton = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;