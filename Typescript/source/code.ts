  
let greetings: string = "Daksh"
let myNum: number = 6

console.log(greetings) 
// number 

let userId: number = 334.56 // bad practice
let userId2 = 334.56 // good practice
//boolean

let isLoggedIn: boolean = false

//any
// let hero  , no assigned variable type 
let hero: string

function getHero(){
    return "thor"
    // can return any type if not mentioned , not a good practice  
}

hero = getHero()

function render(document: string){
    console.log(document);
}

let numbers: number[];

numbers = []

numbers.forEach(n => {
    console.log(n)
});


// tuple
let user: [number, string];
user = [1,"Daksh"];
    
user[0].toString() // all number functions
//gap
user.push(1);


//enums

const small = 1;
const medium = 2;
const large = 3;

//Pascal case

const enum Size {Small = 1, Medium, Large}
let mySize: Size = Size.Medium;
console.log(mySize);

//function 
function func(param: number): void{
    console.log(param);
}

func(69);

//by default js returns undefined datatype

// using ? mark to make it optional to give but then an undefined is taken , for that we use || operator to set a value
function calculateTax(income: number, taxYear?: number):number{
    if((taxYear || 2022) < 2022) return income * 1.2;
    return income * 1.3;
}

//default value given 
function calculateTax2(income: number, taxYear = 2022):number{
    if(taxYear < 2022) return income * 1.2;
    return income * 1.3;
}
calculateTax2(10_000)


//objects 

let employee: {
    readonly id:number,
    name: string,
    retire: (date:Date)=>void
} = {id: 1,
     name: 'Daksh',
     retire: (date:Date)=>{
        console.log(date);
     }
    };


// advanced types
// dry -> dont repeat yourself

type Employee = {
    readonly id:number,
    name: string,
    retire: (date: Date) => void
}

let employee2: Employee = {
    id:1,
    name: 'Dg',
    retire:(date:Date)=>{
        console.log(date);
    }
}

//union types
function kgToLbs(weight: number | string):number{
    if(typeof weight === 'number')
        return weight*2.2;
    else
        return parseInt(weight)*2.2;
}

//intersection types

type Draggable = {
    drag: () => void
}
type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

//Literal types
//exact, specific value
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';


//Nullable types
function greet(name:string | null | undefined){
    if(name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}

greet(null); 


//Optional Chaining 

type Customer = {
    birthday: Date
};

function getCustomer(id:number):Customer|null| undefined{
    return id == 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(0);
if(customer != null && customer != undefined)
    console.log(customer.birthday);

//Optional Property Access Operator
console.log(customer?.birthday)

kgToLbs(100);
kgToLbs('10kg');
export {}