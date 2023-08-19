"use strict";
//variable
let num1 = 24;
let num2;
let numOrString;
//array 
let array = ["chien", "chat", "poisson"];
array[0] = "chien";
let tabl = [];
tabl.push(24);
tabl.push(true);
const zidane = {
    id: 0,
    name: "zidane",
    jersey: 10
};
//les classes
class Singer {
    constructor(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}
const prince = new Singer(0, "prince", false);
console.log(prince);
