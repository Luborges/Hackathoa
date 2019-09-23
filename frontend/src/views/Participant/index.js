import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Calendar from "../../components/Calendar";
import { CreateButton } from "../Administrator/admin-style";

import {
  Aside,
  Container, 
  Box,
  Button,
  EventBox,
  FileImage,
  FileInput,
  LowBox,
  TextName,
  MiddleBox,
  InternalBox,
  RightBox,
  TitleItem,
  Downline,
  Text,
  Fotoperfil,
  Section,
} from "./styles";

const Participant = ({ match }) => {
  const [participante, setParticipante] = useState('');
   const [fotoperfil, setFotoperfil] = useState('');

  const createEvent = async () => {
    const newEvent = {
      participante,
      fotoperfil
    };
  }

  const setEventDate = (date) => {
    console.log(date);
  }

  //console.log(match.params.eventId)

  return (
    <>
      <Header />
      <div>
        <Container>
          <h1>Participant</h1>
        </Container>
        <Box>
          <span style={{ margin: "1% 5% 0%" }}>
          </span>
        </Box>
        <Box style={{ justifyContent: "center", marginLeft: "55px" }}>
          <Aside>
            <EventBox>
              {fotoperfil ? (
                <Fotoperfil src={window.URL.createObjectURL(fotoperfil)} />
              ) : (
                <FileImage>YOUR PICTURE</FileImage>
              )
              }
              <FileInput 
                type="file" 
                onChange={evt => setFotoperfil(...evt.target.files)} />
              <LowBox>
                Participant
                <TextName 
                  placeholder={"Your name"} 
                  value={participante}
                  onChange={evt => setParticipante(evt.target.value)} />
                <EventBox style={{justifyContent: "flex-start", padding: "2%"}}>
                  Your specialties:
                </EventBox>
                <Button
                  value={"Add Skill"}
                  type="button"
                />
              </LowBox>
            </EventBox>
          </Aside>
          <MiddleBox>
            <InternalBox>
              <TitleItem> Hackathons </TitleItem>
              <p>SEARCH HACKATHON</p>
              <Downline />
            </InternalBox>

            <InternalBox>
              <TitleItem> Your team </TitleItem>
              <p>SEARCH MEMBERS</p>
              <Downline />
            </InternalBox>

            <InternalBox>
              <TitleItem> Mentoring </TitleItem>
              <p>SEARCH MENTOR</p>
              <Downline />
            </InternalBox>
          </MiddleBox>
          <RightBox>
            <InternalBox>
              <TitleItem>Next events</TitleItem>
              <Calendar startOpen={true} removeEdit={true}
              setDate={setEventDate} text='See important event dates'/>
            </InternalBox>
          </RightBox>
        </Box>
        <Section>
          <CreateButton
            type="button"
            onClick={() => createEvent()}
            value={"SAVE"} />
        </Section>
      </div>  
    </>
  );
};

/*const SkillComponet = ({ text }) => {
  return (
    <Skill>
      {text} <Add>+</Add>
    </Skill>
  );
};*/

export default Participant;