const myObj = {
    name: "David",
    age: 19,
};

for (let i of Object.values(myObj)){ //No puedo saber su 'key', es un dato puro
    console.log(i);
};