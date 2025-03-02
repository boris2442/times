function clock(){
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    // console.log(hours, minutes, seconds)
    if(hours< 10){
        hours = '0' + hours;
    }else{
        hours = hours;
    }
    if(minutes< 10){
        minutes = '0' + minutes;
    } else{
        minutes = minutes;
    }
    if(seconds< 10){
        seconds = '0' + seconds;
    } else{
        seconds = seconds;
    }
    // document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;

    let times=hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').innerHTML = times;
    setTimeout(clock, 1000); // Call the clock function again after 1 second
}
clock();