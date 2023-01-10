import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
// import interactionPlugin from "@fullcalendar/in/teraction"; // a plugin!

export default function Calendar({ date }) {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      weekends={true}
      events={[
        { title: "event 1", date: date, backgroundColor: "red" },
        { title: "event 2", date: "2023-01-11" },
      ]}
      dateClick={(info) => {
        alert("clicked " + info.dateStr);
      }}
      onClick={(info) => {
        alert("clicked " + info.dateStr);
      }}
    />
  );
}
