// let ampm = document.getElementById('ampm');
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");


// }if(hr>12){
//     hr = hr - 12
//     ampm.innerHTML = 'PM'

setInterval(()=>{
    let currentTime = new Date();

hours.innerHTML =(currentTime.getHours()<10?"0":"") + currentTime.getHours();
minutes.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
seconds.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
})

