import styled from "@emotion/styled";
import {
  lightopasity,
  light,
  purplegrey,
  bluegrey,
  bluegreyopasity,
  red,
} from "../theme/colors";
import { fontSize, fontFamilyZilla } from "../theme/base";

export const Form = styled.form`
  margin: 0;
  padding: 2rem;
  width: 100%;
  position: relative;
`;

export const InputContainer = styled.div`
  margin-top: 1.2rem;
  width: 100%;
  display: flex;
`;

export const Input = styled.input`
  border-radius: 2px;
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
  margin: 0 1rem;
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
