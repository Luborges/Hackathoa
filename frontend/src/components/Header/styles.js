import styled from "styled-components";

export const HeaderTop = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: red;
  cursor: pointer;
`;

export const Title = styled.span`
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.4em;
  margin: 10px;
  font-family: "Archivo Black";
`;

export const Logo = styled.img.attrs({
  src: props => props.src
})`
  width: 35px;
  height: 35px;
  margin: 10px;
`;