import React, { useState, useEffect } from 'react';

const TiempoHasta = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  // Calculate the time remaining until December 2nd at 11 AM
  const calculateTimeLeft = () => {
    const currentDate = new Date();
    const targetDate = new Date(currentDate.getFullYear(), 11, 2, 11, 0, 0); // December is month 11 (0-indexed), 11 AM
    if (currentDate > targetDate) {
      targetDate.setFullYear(currentDate.getFullYear() + 1);
    }
    const timeDifference = targetDate - currentDate;
    return timeDifference;
  };

  useEffect(() => {
    // Update the time remaining every second
    const timer = setInterval(() => {
      const timeRemaining = calculateTimeLeft();
      setTimeLeft(timeRemaining);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Convert the time difference to days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div>
      <h1 id='counter'>{days} días, <br /> {hours} horas,<br /> {minutes} minutos,<br /> {seconds} segundos</h1>
    </div>
  );
};

export default TiempoHasta;
