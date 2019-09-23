import styled from "styled-components";

export const Aside = styled.div`
  border: 1px solid #D60000;
  height: 500px;
  width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-flow: wrap;
  padding: 0% 10%;
  `;

export const Button = styled.input`
  width: 200px;
  height: 35px;
  border: 1px solid red;
  border-radius: 30px;
  background-color: #D60000;
  color: #fff;
  margin: 10px;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  padding: 2% 14% 0%;
`;

export const Downline = styled.hr`
    position: absolute;
    width: 320px;
    margin-top: 10px;
`;

export const EventBox = styled.div`
  flex: 1;
  margin: 2%;
  margin-left: 0%;
  padding: 0% 5%;
`;

export const EventTypeText = styled.span`
  width: 160px;
  color: #D60000;
  font-size: 0.7em;
`;

export const FileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 190px;
  background-color: #D60000;
  color: #fff;
  font-family: 'Archivo Black';
  border-radius: 100px;
  margin-left: 20px;
`;

export const Fotoperfil = styled.img`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 180px;
  height: 190px;
  background-color: #D60000;
  color: #fff;
  font-family: 'Archivo Black';
  margin-left: 20px;
  border-radius: 100px;
`;

export const FileInput = styled.input`
  position: absolute;
  width: 180px;
  height: 190px;
  margin-top: -190px;
  opacity: 0;
  cursor: pointer;
  border-radius: 100px;
`;

export const InternalBox = styled.div`
    margin-left: 41px;
    margin-bottom: 90px;
`;

export const LowBox = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin-top: 30px;
  width: 158px;
  padding: 10px;
`;

export const MiddleBox = styled.div`
  flex: 2;
  margin: 2%;
  margin-left: 0%;
  padding: 0% 5%;
`;

export const RightBox = styled.div`
  flex: 3;
  margin: 1%;
  padding: 0% 1%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0% 10%;
`;

export const Text = styled.div`
  display: inline-flex;
  width: 200px;
  color: #a9a9a9;
  padding: 5px 10px 0px 10px;
`;

export const TextName = styled.textarea`
  display: block;
  width: 160px;
  height: 70px;
  font-size: 1.5em;
  resize: none;
  border: 0;
`;

export const Title = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
`;

export const TitleItem = styled.label`
    color: #424242;
`;