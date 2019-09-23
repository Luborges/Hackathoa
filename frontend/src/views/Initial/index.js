import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import {
  Container,
  Card,
  Combo,
  HeaderStyle,
  Msg,
  Online,
  CreateParty,
  ItemEvent,
  ItemLogo,
  ItemTitle,
  ItemDate,
  ListEvent,
  ItemDescription
} from "./styles";
import api from "../../api";
import moment from 'moment';

export default function Initial({ history }) {
  const [events, setEvents] = useState([])

  const listEvents = async () => {
    try {
      const events = await api.get('/events')
      setEvents(events.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { listEvents() }, []);

  return (
    <Container>
      <HeaderStyle>
        <Header />
      </HeaderStyle>
      {
        events.length || <Msg
          position={""}
          size={"1.8em"}
          align={"center"}
          weight={"bold"}
          top={"10%"}
        >
            Welcome, where do we start?
        </Msg>
      }

      <Combo>
        <Card onClick={() => history.push("/administrator")}>
          <Online>Online/presential</Online>
          <CreateParty>
            Create <br />
            Hackathon
          </CreateParty>
          <Msg size={"0.8em"} position={""} align={"left"} color={"#ff0000"}>
            Welcome, where do we start?
          </Msg>
        </Card>
        <Card onClick={() => history.push("/participant")}>
          <Online>Online/presential</Online>
          <CreateParty>Participate in Hackathon</CreateParty>
          <Msg size={"0.8em"} position={""} align={"left"} color={"#ff0000"}>
            Welcome, where do we start?
          </Msg>
        </Card>
      </Combo>
      <ListEvent>
        {
          events && events.map((event) =>
            <ItemEvent onClick={() => history.push(`/participant/${event._id}`)} {...event}>
              <ItemLogo />
              <ItemDescription>
                <ItemTitle>{event.name}</ItemTitle>
                <ItemDate>{event.name}</ItemDate>
              </ItemDescription>
            </ItemEvent>
          )
        }
      </ListEvent>
    </Container>
  );
}
