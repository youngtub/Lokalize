import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
// import './node_modules/react-infinite-calendar/styles.css';
import './calendar.css';

var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
 
// Render the Calendar 
function Calendar (props) {
  return (  
    <InfiniteCalendar
      width={400}
      height={600}
      selected={today}
      disabledDays={[0,6]}
      minDate={lastWeek}
      theme={{
        accentColor: '#2d4575',
        floatingNav: {
          background: 'rgba(56, 87, 138, 0.94)',
          chevron: '#c4ebed',
          color: '#a7afaf',
        },
        headerColor: '#448AFF',
        selectionColor: '#559FFF',
        textColor: {
          active: '#FFF',
          default: '#333',
        },
        todayColor: '#cdea0e',
        weekdayColor: '#0eea69'
      }}
      displayOptions={{
        layout: 'landscape',
        showOverlay: false,
        shouldHeaderAnimate: false
      }}
    />
  )
}

export default Calendar;
