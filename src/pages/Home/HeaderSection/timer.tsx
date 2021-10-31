import React from 'react';
import { useTimer } from 'react-timer-hook';

function Timer({ epochDeadlineTimestamp }) {
    const expiryTimestamp = new Date(0); // The 0 there is the key, which sets the date to the epoch
    expiryTimestamp.setUTCSeconds(epochDeadlineTimestamp);
    const {
        seconds,
        minutes,
        hours,
        days,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (
        <>
            {days ? `${days}d ` : ''}
            {hours ? `${hours}h ` : ''}
            {minutes ? `${minutes}m ` : ''}
            {seconds ? `${seconds}s ` : ''}
        </>
    );
}

export default Timer;
