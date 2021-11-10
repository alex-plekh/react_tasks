import React, { useEffect, useState} from 'react';


export function  Clocks() {
    let localTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(localTime);
    const [timerOn, setTimerOn] = useState(true)

    useEffect(() => {
        let count;
        if (timerOn) {
            count = setInterval(() => {
                setTime(localTime);
            }, 1000);
        }
        return () => {
            clearInterval(count);
        }

    }, [localTime,timerOn])

    let startBtn = () => {
        setTimerOn(true);
        setTime(time);
    }

    let stopBtn = () => setTimerOn(false);

    return (
        <div>
            <p className="App-clock">Время: {time}.</p>
            <button onClick={startBtn}>START</button>
            <button onClick={stopBtn}>STOP</button>
        </div>
    );

}

export default Clocks;