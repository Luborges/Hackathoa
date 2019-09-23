import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  /*background-color: #EEEEEE;*/
  background-image: URL("cadastro@2x.jpg");
`;

export const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 450px;
  justify-content: center;
  align-items: center;
  /*background-color: #EEEEEE;*/
  background-image: URL("cadastro@2x.jpg");
`;

export const Box = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1.5px 0 0 rgba(0, 0, 0, 0.1);
  width: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
`;

export const Input = styled.input`
  height: 36px;
  font-size: 1em;
  border: 0;
  color: "black";
  margin: 10px;
  outline: 0;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
  color: #000;
  font-family: Roboto, sans-serif;
  padding: 2px;
  padding-left: 28px;
  margin-top: 25px;
  border: none;
  border-bottom: 1px solid ${props => (props.borderColor ? "#cecece" : "red")};
  background-color: #fff;
`;

export const Button = styled.input`
  background-color: #00e4ff;
  margin: 10px;
  border: none;
  text-transform: uppercase;
  /* font-weight: bold; */
  padding: 8px;
  outline: 0;
  font-size: 1.5em;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 10%;
  letter-spacing: 1px;
  font-family: Archivo black;
  &:focus {
    background-color: #00e4f0;
    transition: 0.9s;
  }
`;

export const Title = styled.h2`
  color: #000;
  text-align: center;
  text-transform: uppercase;
  font-size: 2em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Tabs = styled.div`
  width: 100%;
  display: flex;
`;

export const LoginScreen = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
`;

export const Register = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Error = styled.div`
  /* width: 100%; */
  border-radius: 8px;
  padding: 8px;
  margin: 12px;
  margin-bottom: 0px;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  text-align: center;
`;

export const Success = styled.div`
  /* width: 100%; */
  border-radius: 8px;
  padding: 8px;
  margin: 12px;
  margin-bottom: 0px;
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
  text-align: center;
`;
