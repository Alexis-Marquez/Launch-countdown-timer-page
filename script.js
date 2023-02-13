let deadline = new Date("Jan 5, 2024 15:37:25").getTime();
function a(){
    let now = new Date().getTime();
    let t = deadline - now;
    let seconds2 = document.querySelector('#seconds');
    let min = document.querySelector('#minutes');
    let hour = document.querySelector('#hours');
    let day = document.querySelector('#days');
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    seconds2.textContent = ''+seconds
    min.textContent = ''+minutes;
    hour.textContent = ''+hours;
    day.textContent = ''+days;
}
let func = setInterval(a
    , 1000);

