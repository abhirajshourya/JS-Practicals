let now = new Date();
console.log(now)

let dt = new Date(0);
console.log(dt)

let newDate = new Date('2029-09-23')
console.log(newDate)

// let newDate = new Date('year, month, date, hours, minutes, seconds, milliseconds');
newDate = new Date(2030, 4, 5, 6, 2, 3, 43)
console.log(newDate)

console.log("Year ", now.getFullYear())
console.log("Month ", now.getMonth())
console.log("Date ", now.getDate())
console.log("Hours ", now.getHours())
console.log("Minutes ", now.getMinutes())
console.log("Seconds ", now.getSeconds())

newDate.setDate(32)
console.log(newDate)

setInterval(() => {
    let nowDate = new Date();
    time.innerHTML = nowDate;

}, 1000);