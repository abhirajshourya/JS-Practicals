let main = document.getElementById('main');
console.log(main);

let nav = document.getElementById('nav');
console.log(nav)

let container = document.getElementsByClassName('container')
console.log(container)

let sel = document.querySelector('.container li');
console.log("Selector: ", sel)



let selall = document.querySelectorAll('.container li');
console.log("SelectorAll: ", selall)

for (let index = 0; index < 5; index++) {
    const element = 5;
    selall[index].innerHTML = "Manipulated"
}