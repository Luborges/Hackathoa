import React, { useState, useRef, useEffect } from "react";
import Header from "../../components/Header";
import CircularBox from "../../components/Checkbox/CircularBox";
import api from "../../api";
import Calendar from "../../components/Calendar";

import {
  Container,
  Box,
  Button,
  ButtonBox,
  EventBox,
  LowBox,
  TextName,
  EventTypeText,
  FileInput,
  FileImage,
  MiddleBox,
  RightBox,
  TitleItem,
  TextArea,
  InternalBox,
  Downline,
  FileInputText,
  FileInputData,
  CreateButton,
  FileType,
  Text,
  UploadLabel,
  Logo
} from "./admin-style";

const Administrator = () => {
  const [logo, setLogo] = useState("");
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("");
  const [theme, setTheme] = useState("");
  const [prize, setPrize] = useState("");
  const [rules, setRules] = useState("");
  const [startSubscription, setStartSubscription] = useState(null);
  const [endSubscription, setEndSubscription] = useState(null);
  const [faq, setFaq] = useState("");

  const createEvent = async () => {
    const newEvent = {
      logo,
      name,
      eventType,
      theme,
      prize,
      rules,
      startSubscription,
      endSubscription,
      faq
    };
    await api.post("/event/create", newEvent); //const response = 
  };

  const setSubscriptionDate = (dates) => {
    setStartSubscription(new Date(Math.min.apply(null, dates)));
    setEndSubscription(new Date(Math.max.apply(null, dates)));
  }

  const setEventDate = (date) => {
    console.log(date);
  }

  return(
    <>
      <Header />
      <div>
        <Container>
          <h1>Create hackathon</h1>
        </Container>
        <ButtonBox style={{ justifyContent: "flex-start" }}>
          <Button
            value={"online"}
            style={{
              opacity: "online" === eventType ? "1" : "0.5"
            }}
            type="button"
            onClick={evt => setEventType("online")}/>
          <Button
            value={"presential"}
            style={{
              opacity: "presential" === eventType ? "1" : "0.5"
            }}
            type="button"
            onClick={evt => setEventType("presential")}/>
        </ButtonBox>
        <Box>
          <span style={{ margin: "1% 5% 0%" }}>
            click on the fields to edit
          </span>
        </Box>
        <Box style={{ justifyContent: "center" }}>
          <EventBox>
            {logo ? (
              <Logo src={window.URL.createObjectURL(logo)} />
            ) : (
              <FileImage>LOGO</FileImage>
            )}
            <FileInput
              type="file"
              onChange={evt => setLogo(...evt.target.files)}/>
            <LowBox>
              <EventTypeText>{eventType || "Event type"}</EventTypeText>
              <TextName
                placeholder={"Event name"}
                value={name}
                onChange={evt => setName(evt.target.value)}/>
              <EventBox style={{ justifyContent: "flex-start", padding: "2%" }}>
                Event duration:
              </EventBox>
              <Calendar startOpen={false}
                setDate={setEventDate} text='Set important event dates'/>
            </LowBox>
          </EventBox>
          <MiddleBox>
            <CircularBox checked={theme ? true : false}/>
            <InternalBox>
              <TitleItem>Theme</TitleItem>
              <TextArea
                placeholder={"event description"}
                value={theme}
                onChange={evt => setTheme(evt.target.value)}/>
              <Downline style={{ marginTop: "18px" }}/>
            </InternalBox>
            <CircularBox checked={rules ? true : false}/>
            <InternalBox>
              <TitleItem>Rules</TitleItem>
              <FileInputData
                type="file"
                onChange={evt => setRules(...evt.target.files)}/>
              <FileInputText>file</FileInputText>
              <UploadLabel
                style={{
                  width: "80px",
                  display: "inline-flex"
                }}>
                UPLOAD
              </UploadLabel>
              <FileType>PDF/JPG</FileType>
              <Downline />
            </InternalBox>
            <CircularBox checked={faq ? true : false}/>
            <InternalBox>
              <TitleItem>FAQ</TitleItem>
              <FileInputData
                type="file"
                style={{ marginLeft: "-33px" }}
                onChange={evt => setFaq(...evt.target.files)}/>
              <FileInputText>file</FileInputText>
              <UploadLabel
                style={{
                  width: "80px",
                  display: "inline-flex"
                }}>
                UPLOAD
              </UploadLabel>
              <FileType>PDF/JPG</FileType>
              <Downline />
            </InternalBox>
          </MiddleBox>
          <RightBox>
            <CircularBox checked={prize ? true : false}/>
            <InternalBox>
              <TitleItem>Prize</TitleItem>
              <TextArea
                placeholder={"prize description"}
                value={prize}
                onChange={evt => setPrize(evt.target.value)}/>
              <Downline style={{ marginTop: "18px" }}/>
            </InternalBox>
            <CircularBox checked={startSubscription && endSubscription ? true : false}/>
            <InternalBox>
              <TitleItem>Subscriptions</TitleItem>
              <div>
                <Text>set the subscription period to this event</Text>
                <Calendar startOpen={false}
                  dates={[startSubscription, endSubscription]}
                  setDate={setSubscriptionDate} text='Set the start and end date for the event'/>
              </div>
              <Downline />
            </InternalBox>
            <CreateButton
              type="button"
              onClick={() => createEvent()}
              value={"CREATE EVENT"}/>
          </RightBox>
        </Box>
      </div>
    </>
  );
};

export default Administrator;