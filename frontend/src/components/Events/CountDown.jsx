import React, { useEffect, useState } from 'react'

const CountDown = ({ data }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timeLeft);
    },)

    function calculateTimeLeft() {

        // today date + 3 days
        const evDate = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString();

        // const difference = +new Date(evDate) - +new Date();
        const difference = +new Date(data.Finish_Date) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            }
        }
        return timeLeft;
    }

    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval]) {
            return null;
        }

        return (
            <span className="text-[25px] text-[#475ad2]">
                {timeLeft[interval]}   {interval}{" "}
            </span>
        )
    })

    return (
        <div>
            {timerComponents.length ? timerComponents :
                <span className="text-[red] text-[25px]">Time's Up</span>
            }
        </div>
    )
}









export default CountDown