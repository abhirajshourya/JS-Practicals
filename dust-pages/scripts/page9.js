// let i = 0;
// for(i=0; i<10; i++){
//     console.log(i);
// }

let names = ['Adam','Jocker','Lockhart','Harry Potter'];
let objdata = {
    name: 'Direwxlf',
    age: 24,
    "data 1": "Dev",
    "data 2": "Data Scientist",
    "data 3": "Gamer"
};

//for-loop
console.log("-----------for----------")

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log("hello " + element);
}

//for-each loop
console.log("-----------for-each----------")
names.forEach(element => {
    console.log(element)
});

//for-of
console.log("-----------for-of----------")
for (const iterator of names) {
    console.log(iterator)
}

//for-in
console.log("-----------for-in----------")
for (const key in objdata) {
    if (Object.hasOwnProperty.call(objdata, key)) {
        const element = objdata[key];
        console.log(key + ': ' + element)
    }
}
console.log("-----------while----------")
let i = 0;
while (i<5) {
    console.log(i);
    i++;
}


console.log("----------do-while----------")
i = 0;
do {
    console.log(i);
    i++;
} while (i<5);

console.log("-----------end----------")
