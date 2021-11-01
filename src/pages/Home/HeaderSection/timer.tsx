import React from 'react';
import { useTimer } from 'react-timer-hook';

function Timer({ startDate, endDate }) {
    const current = new Date()
    let expiryTimestamp = startDate;
    let timeStatus = 'Going Live in'
    if (current.getTime() > startDate.getTime()) {
        expiryTimestamp = endDate
        timeStatus = 'Ends in'
    }
    const {
        seconds,
        minutes,
        hours,
        days,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (
        <>
            {timeStatus}:&nbsp;
            {days ? `${days}d ` : ''}
            {hours ? `${hours}h ` : ''}
            {minutes ? `${minutes}m ` : ''}
            {seconds ? `${seconds}s ` : ''}
        </>
    );
}

export default Timer;
