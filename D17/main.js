function updateClock(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    let hourDegree = ((hours / 12) * 360) + 90;
    let minuteDegree = ((minutes / 60) * 360) + 90;
    let secondDegree = ((seconds / 60) * 360) + 90;

    document.getElementById("hour").style.transform = `rotate(${hourDegree}deg)`;
    document.getElementById("minute").style.transform = `rotate(${minuteDegree}deg)`;
    document.getElementById("second").style.transform = `rotate(${secondDegree}deg)`;
}

setInterval(updateClock, 1000)