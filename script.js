setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const hrotation = 30 * hour + minute / 2;
    const mrotation = 6 * minute;
    const srotation = 6 * second;

    document.getElementById("hours").style.transform = `rotate(${hrotation}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${mrotation}deg)`;
    document.getElementById("seconds").style.transform = `rotate(${srotation}deg)`;
}, 1000);