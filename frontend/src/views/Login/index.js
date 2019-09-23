import React, { useState, useEffect } from "react";
import api from "../../api";
import { setToken } from "../../auth";
import {
  Container,
  Box,
  Input,
  Button,
  Form,
  Title,
  Body,
  Tabs,
  LoginScreen,
  Register,
  Logo,
  BoxImg,
  Error,
  Success
} from "./login-style";

const Login = ({ history }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activate, setActivate] = useState(true);
  const [hidePass, setHidePass] = useState(false);
  const [testEmail, setTestEmail] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const verifyEmail = value => {
    if (emailRex.test(value)) {
      setTestEmail(true);
      return true;
    }
    setTestEmail(false);
    return false;
  };

  const enter = async e => {
    e.preventDefault();
    if (!testEmail) {
      setError("E-mail not valid");
      return false;
    }
    if (!activate) {
      try {
        const response = await api.post("/users/create", {
          name,
          username,
          password
        });
        setSuccess(true);
      } catch (error) {
        setError(error.response.data.error);
      }
    } else {
      try {
        const response = await api.post("/users/login", { username, password });
        localStorage.setItem("auth", response.data.token);
        history.push("/initial");
      } catch (error) {
        setError(error.response.data.error);
      }
    }
  };

  return (
    <Body>
      <Container>
        <BoxImg>
          <Logo src={"logo-hackatoa.png"} />
          <Title>Hackathoa</Title>
        </BoxImg>
        <Box>
          <Tabs>
            <LoginScreen
              style={{ backgroundColor: !activate ? "#cecece" : "#fff" }}
              onClick={() => {
                setActivate(true);
                setHidePass(false);
                setError("");
                setSuccess(false);
              }}
            >
              LOGIN
            </LoginScreen>
            <Register
              style={{ backgroundColor: activate ? "#cecece" : "#fff" }}
              onClick={() => {
                setActivate(false);
                setHidePass(false);
                setError("");
                setSuccess(false);
              }}
            >
              REGISTER
            </Register>
          </Tabs>
          {error ? <Error>{error}</Error> : null}
          {success ? (
            <Success>{"User successfully registered!"}</Success>
          ) : null}
          {activate ? (
            <Form onSubmit={() => enter()} autoComplete="off">
              <i
                style={{
                  position: "absolute",
                  marginTop: 35,
                  fontSize: 22,
                  marginLeft: 15,
                  color: "#cecece"
                }}
                className="fa fa-user icon"
              ></i>
              <Input
                borderColor={testEmail}
                type="email"
                name={"username"}
                value={username}
                onChange={evt => {
                  setUsername(evt.target.value);
                  verifyEmail(evt.target.value);
                }}
                placeholder={"Username"}
                autoComplete="off"
              />
              <i
                style={{
                  position: "absolute",
                  marginTop: 110,
                  fontSize: 22,
                  marginLeft: 15,
                  color: "#cecece"
                }}
                className="fa fa-lock icon"
              ></i>
              <Input
                borderColor={true}
                type={hidePass ? "text" : "password"}
                value={password}
                onChange={evt => setPassword(evt.target.value)}
                placeholder={"Password"}
              />
              <Button type="submit" value="Login" onClick={e => enter(e)} />
            </Form>
          ) : (
            <Form onSubmit={() => enter()} autoComplete="new-password">
              <i
                style={{
                  position: "absolute",
                  marginTop: 35,
                  fontSize: 22,
                  marginLeft: 15,
                  color: "#cecece"
                }}
                className="fa fa-user icon"
              ></i>
              <Input
                borderColor={true}
                type="text"
                value={name}
                onChange={evt => setName(evt.target.value)}
                placeholder="Name"
                autoComplete="off"
              />
              <i
                style={{
                  position: "absolute",
                  marginTop: 110,
                  fontSize: 22,
                  marginLeft: 15,
                  color: "#cecece"
                }}
                className="fa fa-envelope-square icon"
              ></i>
              <Input
                borderColor={testEmail}
                type="email"
                value={username}
                onChange={evt => {
                  setUsername(evt.target.value);
                  verifyEmail(evt.target.value);
                }}
                placeholder="E-mail"
                autoComplete="new-email"
              />
              <i
                style={{
                  position: "absolute",
                  marginTop: 184,
                  fontSize: 22,
                  marginLeft: 15,
                  color: !hidePass ? "#cecece" : "#000",
                  cursor: "pointer"
                }}
                onClick={() => setHidePass(!hidePass)}
                className="fa fa-lock icon"
              ></i>
              <Input
                borderColor={true}
                type={hidePass ? "text" : "password"}
                value={password}
                onChange={evt => setPassword(evt.target.value)}
                placeholder="Password"
                autoComplete="new-password"
              />
              <Button type="submit" value="REGISTER" onClick={e => enter(e)} />
            </Form>
          )}
        </Box>
      </Container>
    </Body>
  );
};

export default Login;
