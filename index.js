setInterval(() => {
    d = new Date();
    hourTime = d.getHours();
    minTime = d.getMinutes();
    secTime = d.getSeconds();
    hourRotation = 30 * hourTime + minTime/2; 
    minRotation = 6 * minTime;
    secRotation = 6 * secTime;

    hour.style.transform = `rotate(${hourRotation}Deg)`;
    minute.style.transform = `rotate(${minRotation}Deg)`;
    second.style.transform = `rotate(${secRotation}Deg)`;
}, 1000);