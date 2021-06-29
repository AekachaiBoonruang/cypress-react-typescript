import styled from "styled-components";

interface FieldProps {
  placeHolder: string;
  type: string;
}
export const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: Quicksand, arial, sans-serif;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const InputField: React.FC<FieldProps> = (props) => {
  return (
    <CardInput placeholder={props.placeHolder} type={props.type} required />
  );
}
