import React, { useState, useEffect } from "react";
import MultipleDatePicker from "react-multiple-datepicker";
import { CalendarLabel, CalendarDiv, ContainerCalendar, TextDiv } from "./styles";

const Calendar = ({setDateSubmit, setDateSelect, dates, text, startOpen, removeEdit}) => {
  const calendarRef = React.useRef();
  const [calendarSub, setCalendarSub] = useState("");

  useEffect(() => {
    if (startOpen){
      setCalendarSub(true);
    }
  }, [startOpen]);

  useEffect(() => {
    if (removeEdit){
      //
    }
  }, [removeEdit]);

  useEffect(() => {
    if (calendarSub){
      calendarRef.current.style.opacity = "1";
      calendarRef.current.children[0].children[0].style.opacity = "0";
      calendarRef.current.children[0].children[0].style.opacity = "0";
      calendarRef.current.children[0].children[0].click();
      if (calendarRef.current.children[0].children[1].childNodes[1]){
        calendarRef.current.children[0].children[1].removeChild(calendarRef.current.children[0].children[1].childNodes[1]);
      }
      calendarRef.current.children[0].children[1].style.position = 'absolute';
      calendarRef.current.children[0].children[1].style.left = 'unset';
      calendarRef.current.children[0].children[1].style.top = 'unset';
      calendarRef.current.children[0].children[1].style.width = 'unset';
      calendarRef.current.children[0].children[1].style.height = 'unset';
      calendarRef.current.children[0].children[1].style.padding = 'unset';
    }
  }, [calendarSub]);

  const calendarValues = (date) => {
    if (setDateSubmit){
      setDateSubmit(date);
    }
    setCalendarSub(!calendarSub);
  }

  const calendarSelect = (date) => {
    if (setDateSelect){
      setDateSelect(date);
    }
  }

  return(
    <ContainerCalendar>
      <CalendarDiv ref={calendarRef}>
        <MultipleDatePicker select={dates && dates.lenght>0 ? dates : null}
          onSelect={date => calendarSelect(date)}
          onSubmit={date => calendarValues(date)} />
      </CalendarDiv>
      { calendarSub && !startOpen && <TextDiv>{text}</TextDiv>}
      <CalendarLabel onClick={() => setCalendarSub(!calendarSub)}>
        CALENDAR
      </CalendarLabel>
    </ContainerCalendar>
  );
};

export default Calendar;