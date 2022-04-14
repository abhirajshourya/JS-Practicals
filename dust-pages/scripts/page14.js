let sum = (a,b) =>{
    a+b;
}

sum = (a,b) => a+b;

let half = (a) => a/2;

let myfunc = () => {
    greet.innerHTML = "GREAT"
}
setTimeout(() => {
    
    myfunc()
    
}, 1500);


let list = document.getElementsByTagName('li')
let i = 0
Array.from(list).forEach((x)=>{
    x.innerHTML = `List ${i}`;
    i++;
})