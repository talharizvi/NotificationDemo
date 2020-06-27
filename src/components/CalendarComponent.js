import React, { Component } from 'react';
import { Calendar} from 'react-native-calendars';
export default CalendarComponent = (props) => {

    const { showCalendar, onDayPress, markedDates, minDate, maxDate, theme, styleCalendar, onMonthChange } = props;

    if (!showCalendar) return null;

    return <Calendar
        theme={theme}
        minDate={minDate}
        maxDate={maxDate}
        style={styleCalendar}
        onDayPress={onDayPress}
        markedDates={markedDates}
        onMonthChange={
            onMonthChange ?
                (month) => { onMonthChange(month) }
                :
                (month) => { console.log(month) }
        }
        hideExtraDays={true}
    />;

}