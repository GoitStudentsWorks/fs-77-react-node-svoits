import { forwardRef, useState } from 'react';

import { StyledCalendarIcon } from '../../components/StyledDatepicker/StyledDataPicker.styled';
import { CalendarGlobalStyles, Button } from './StyledDataPicker.styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function StyledDatepicker({ value, setFieldValue }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [placeholder, setPlaceholder] = useState('dd/mm/yyyy');
  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <Button onClick={onClick}>
        {value ? value : placeholder}
        <StyledCalendarIcon/>
      </Button>
    );
  });

  return (
    <>
      <DatePicker
        customInput={<CustomInput />}
        selected={value}
        onChange={(date) => {
          setFieldValue('dateOfBirth', date);
          setPlaceholder(date ? '' : 'dd/mm/yyyy');
        }}
        dateFormat={'dd-MM-yyyy'}
        maxDate={new Date()}
        // showYearDropdown
        // scrollableMonthYearDropdown
        placeholderText={placeholder}
        calendarStartDay={1}
        // formatWeekDay={(day) => day.substr(0, 1)}
      />{' '}
      <CalendarGlobalStyles />
    </>
  );
}

// import React from "react";
// import DateView from "react-datepicker";
// import "react-datepicker/dist/react-datepicker-cssmodules.css";
// import { Field } from "formik";
// export default function DatePicker(props) {
//   const {name, ...rest} = props
//   return (
//     <div>
//       <Field name={name}>
//         {
//           ({form, field}) => {
//             const { setFieldValue } = form
//             const { value } = field
//             return <DateView id={name} {...field} {...rest} selected={value} onChange={val=>{setFieldValue(name,val)}}/>
//           }
//         }
// </Field>

//     </div>
//   )
// }
