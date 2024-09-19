import React, { useEffect, useState } from 'react'

export default function Clock({ targetDate}) {

    const [timeRemaining, setTimeRemaining] = useState({ days:0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval);
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeRemaining({ days, hours, minutes, seconds });
            }
        }, 1000)});   
        
        const formatWithLeadingZero = (num) => String(num).padStart(2, '0');

  return (
    <div className='clockCont'>
        <div className="lineOne">
            <span>{formatWithLeadingZero(timeRemaining.days)}</span>
            <span>{formatWithLeadingZero(timeRemaining.hours)}</span>
            <span>{formatWithLeadingZero(timeRemaining.minutes)}</span>
            <span>{formatWithLeadingZero(timeRemaining.seconds)}</span>
        </div>
        <div className="lineTwo">
            <h6>DAYS</h6>
            <h6>Hours</h6>
            <h6>MINUTES</h6>
            <h6>SECONDS</h6>
        </div>
    </div>
  )
}
