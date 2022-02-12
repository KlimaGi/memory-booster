import styled from "@emotion/styled";
import {
  lightopasity,
  light,
  purplegrey,
  bluegrey,
  bluegreyopasity,
  red,
} from "../theme/colors";
import { fontSize, fontFamilyZilla, Center } from "../theme/base";

export const Form = styled.form`
  margin: 0;
  padding: 0;
  min-width: 80%;
  position: relative;
`;

export const InputContainer = styled.div`
  margin: 1.2rem 0.5rem 0;
  border-radius: 2px;
  display: flex;
  background-color: ${light};
`;

export const Input = styled.input`
  background-color: ${light};
  color: ${purplegrey};
  font-weight: lighter;
  border-style: none;
  padding: 1.2rem 0.5rem;
  margin: 0 0.5rem;
  width: 100%;
  font-size: ${fontSize};
  font-family: ${fontFamilyZilla};
  letter-spacing: 1px;
  font-weight: lighter;
  align-self: flex-end;
  position: relative;
  :focus {
    color: ${bluegrey};
    outline: none;
  }
  :: placeholder {
    color: ${bluegreyopasity};
    outline: none;
    font-size: ${fontSize};
    letter-spacing: 1px;
    font-weight: lighter;
  }
`;

export const InputIcon = styled.i`
  margin: 1rem;
  ${Center};
`;

export const FieldError = styled.div`
  font-size: 16px;
  color: ${red};
  letter-spacing: 1px;
  font-family: ${fontFamilyZilla};
  padding: 0.1rem 1rem;
  position: absolute;
  index-z: 1;
`;
