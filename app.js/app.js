function startClock() {
    let clock = document.getElementById('clock');
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    clock.textContent = hours + ':' + minutes + ':' + seconds + ' ' + amPm;
    setTimeout(startClock, 1000);
}

document.addEventListener('DOMContentLoaded', startClock);
