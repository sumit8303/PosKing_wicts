import React, { useState, useEffect } from 'react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    
    const daysArray = [];
    for (let i = 0; i < firstDay; i++) {
      daysArray.push('');
    }
    for (let i = 1; i <= days; i++) {
      daysArray.push(i);
    }
    setDaysInMonth(daysArray);
  }, [currentDate]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className=" m-1 rounded-md	bg-white  shadow-md border-2 border-success  m-auto md:w-80 w-auto  text-center ">
      <div className="header flex justify-between  p-2  bg-success text-white gap-5 ">
        <button onClick={handlePrevMonth}  >Prev</button>
        <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <div className="days-of-week grid my-1 grid-cols-7 gap-5">
        {daysOfWeek.map(day => (
          <div key={day} className="day  w-fit text-red-500">
            {day}
          </div>
        ))}
      </div>
      <div className="days grid grid-cols-7 gap-5">
        {daysInMonth.map((day, index) => (
          <div key={index} className="day ">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
