const clock = document.querySelector("h2#clock");

function chrisClock(){
    const chris = new Date("2023-12-25");
    const today = new Date();

    const day = chris - today;

    const dDay = Math.floor(day/(1000*60*60*24));
    const dHour = Math.floor((day/(1000*60*60))%24);
    const dMin = Math.floor((day/(1000*60))%60);
    const dSec = Math.floor((day/1000)%60);

    clock.innerText = `${dDay}d ${dHour}h ${dMin}m ${dSec}s`;
}

setInterval(chrisClock, 1000);