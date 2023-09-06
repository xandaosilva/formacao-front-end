import { useState } from "react";

const useCountdown = (date) => {
    const [second, setSecond] = useState();
    const [minute, setMinute] = useState();
    const [hour, setHour] = useState();
    const [day, setDay] = useState();

    const countdown = () => {
        const countDate = new Date(date).getTime();
        const now = new Date().getTime();
        const interval = countDate - now;
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const secondNumber = Math.floor((interval%minute)/second);
        const minuteNumber = Math.floor((interval%hour)/minute);
        const hourNumber = Math.floor((interval%day)/hour);
        const dayNumber = Math.floor(interval/day);

        setSecond(secondNumber);
        setMinute(minuteNumber);
        setHour(hourNumber);
        setDay(dayNumber);
    }

    setInterval(countdown, 1000);

    return [day, hour, minute, second];
}

export default useCountdown;
