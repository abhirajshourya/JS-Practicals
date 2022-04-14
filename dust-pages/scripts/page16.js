let jsonObj = {
    name:"Direwxlf",
    age:24,
    data: "Dev",
    hovy: "Gaming"
}
console.log(jsonObj)

let jsonObjstr = JSON.stringify(jsonObj);
console.log(jsonObjstr)

jsonObjstr = jsonObjstr.replace("Direwxlf","ForReal")
console.log(jsonObjstr)

newobj = JSON.parse(jsonObjstr)
console.log(newobj)
