import styled from "styled-components";

export const Button = styled.button`
  text-align: center;
  background: ${(props) => props.theme.colors.green};
  border-radius: 5px;
  padding: 5px;
  margin: 0 auto;
  cursor: pointer;
`;
