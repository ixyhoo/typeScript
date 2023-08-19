//variable
let num1 = 24;
let num2:number;

let numOrString: number | string;

//array 

let array = ["chien", "chat", "poisson"]

array [0] = "chien";

let tabl: (number | boolean)[] = [];

tabl.push(24);
tabl.push(true);


//object
interface Player {
    id:number,
    name:string,
    jersey:number
}
const zidane:Player = {
    id: 0,
    name: "zidane",
    jersey: 10
};

//les classes
class Singer {
    id: number;
    name: string;
    alive: boolean

    constructor(id: number, name: string, alive: boolean) {
        this.id = id;
        this.name = name;
        this.alive = alive
    }
}

const prince = new Singer(0, "prince", false);
console.log(prince);

