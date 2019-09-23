import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-image: url("cadastro@2x.jpg");
`;

export const HeaderStyle = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  width: 300px;
  background-color: #fff;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(206, 206, 206, 1);
  -moz-box-shadow: 0px 1px 5px 0px rgba(206, 206, 206, 1);
  box-shadow: 0px 1px 5px 0px rgba(206, 206, 206, 1);
  margin-top: auto;
  margin-bottom: auto;
  min-height: 100px;
  margin: 10px;
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  cursor: pointer;
`;

export const Combo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  padding: 15px;
  flex-flow: row wrap;
  margin-top: 50px;
`;

export const Msg = styled.div`
  position: ${props => props.position};
  width: 100%;
  text-align: ${props => props.align};
  color: ${props => props.color || "#000"};
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  font-family: Roboto, sans-serif;
  margin-top: ${props => props.top};
`;

export const Online = styled.span`
  font-size: 1em;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  color: #000;
`;
export const CreateParty = styled.div`
  margin-top: 10px;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  color: #000;
  font-size: 2em;
`;

export const ListEvent = styled.div`
  width: 400px;
  margin: 0 auto;
`

export const ItemTitle = styled.div`
  font-size: 18px;
`

export const ItemDate = styled.div`
  font-size: 12px;
`

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`

export const ItemLogo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(206, 206, 206, 1);
  -moz-box-shadow: 0px 1px 5px 0px rgba(206, 206, 206, 1);
  box-shadow: 0px 1px 5px 0px rgba(206, 206, 206, 1);
`

export const ItemEvent = styled.div`
  width: 100%;
  background-color: #fff;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(206, 206, 206, 1);
  -moz-box-shadow: 0px 1px 5px 0px rgba(206, 206, 206, 1);
  box-shadow: 0px 1px 5px 0px rgba(206, 206, 206, 1);
  opacity: ${({ old }) => old ? '.5' : '1'};
  display: flex;
  margin: 5px 0;
  padding: 10px;
  cursor: pointer;

  ${ItemLogo} {
    background-image: ${({ logo }) => `url(${logo})`};
  }


`