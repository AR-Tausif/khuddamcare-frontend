import React from 'react'

const DateCustomizingFromISOTime = ({date}) => {
  
const dateObj = new Date(date); // Parse the ISO datetime string

// Format the date as "DD Month YYYY"
const options = { day: "2-digit", month: "long", year: "numeric" };
const formattedDate = dateObj.toLocaleDateString("en-GB", options);

  return (
        <span className='ml-3'>{formattedDate}</span>
  )
}

export default DateCustomizingFromISOTime