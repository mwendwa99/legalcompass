import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
// import interactionPlugin from "@fullcalendar/in/teraction"; // a plugin!
// get events from redux store

export default function Calendar({ events }) {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      weekends={true}
      events={events}
      dateClick={(info) => {
        alert("clicked " + info.dateStr);
      }}
      onClick={(info) => {
        alert("clicked " + info.dateStr);
      }}
    />
  );
}
