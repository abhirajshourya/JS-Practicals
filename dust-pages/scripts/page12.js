function check(name){
    console.log("Checking...." + ' ' + name)
}

setTimeout(() => {
    check('THE TIMEOUT')
}, 2000);

timeOut = setTimeout(() => {
    check('THE TIMEOUT')
}, 3000);
console.log(timeOut); //id of setTimeOut Func

setTimeout(() => {
    clearTimeout(timeOut);
    console.log("Timout Cleared")
}, 2500);

//Interval
Interval = setInterval(() => {
    check('THE INTERVAL')
}, 1500);

setTimeout(() => {
    clearInterval(Interval);
    console.log("Interval Cleared")
}, 10000);


//Time Display using Interval
function displayTime() {
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}

setInterval(() => {
    displayTime()
}, 1000);