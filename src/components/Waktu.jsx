import  { useEffect, useState } from 'react'

function Waktu() {
    const targetDate = new Date("2026-07-07T00:00:00").getTime();
  
       // Set initial state for the countdown
       const [timeLeft, setTimeLeft] = useState({
         days: 0,
         hours: 0,
         minutes: 0,
         seconds: 0
       });
     
       useEffect(() => {
         const interval = setInterval(() => {
           const now = new Date().getTime();
           const distance = targetDate - now;
     
           if (distance < 0) {
             clearInterval(interval);
             setTimeLeft({
               days: 0,
               hours: 0,
               minutes: 0,
               seconds: 0
             });
           } else {
             // Calculate the time remaining
             setTimeLeft({
               days: Math.floor(distance / (1000 * 60 * 60 * 24)),
               hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
               minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
               seconds: Math.floor((distance % (1000 * 60)) / 1000)
             });
           }
         }, 1000);
     
         return () => clearInterval(interval);
       }, [targetDate]);
    
  return (
    <>
   {/* Header */}
   <div className="text-center mb-8">
    <h1 className="font-bold
            mt-2
            text-xl
            sm:text-2xl
            md:text-4xl
            lg:text-5xl  text-white  dark:text-gold">We’re Getting Married</h1>
    <p className="text-sm text-white mt-2 font-Montserrat ">Jl.Kp.Halimun RT003 RW 004  </p>
    <p className="text-md text-white mt-2 font-Montserrat dark:text-darkgold">07 JULI 2026</p>
  </div>
  

  
  {/* Countdown */}
  <div className="flex justify-center mb-8">
    <div className=" bg-red-500 py-2 px-4 mx-2 rounded-xl text-white text-xl font-semibold">
    {timeLeft.days}<br /> H
    </div>
    <div className=" bg-red-500 py-2 px-4 mx-2 rounded-xl text-white text-xl font-semibold">
    {timeLeft.hours} <br /> D
    </div>
    <div className=" bg-red-500 py-2 px-4 mx-2 rounded-xl text-white text-xl font-semibold">
    {timeLeft.minutes} <br /> M
    </div>
    <div className=" bg-red-500 py-2 px-4 mx-2 rounded-xl text-white text-xl font-semibold">
    {timeLeft.seconds} <br /> S
    </div>
  </div>

    </>
  )
}

export default Waktu
