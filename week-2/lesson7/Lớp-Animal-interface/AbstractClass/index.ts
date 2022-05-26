import {Tiger} from "./Tiger";
import {Chicken} from "./chicken";
import {Apple} from "./Fruits/Apple";
import {Orange} from "./Fruits/Orange";

let animal = [];
animal[0]= new Tiger();
animal[2]= new Chicken();
animal.forEach((itemt,index) =>{
    console.log(itemt.makeSound())
    if(itemt instanceof Chicken){
        console.log(itemt.howToEat())

    }
})
console.log("----fruits----")
let fruits = [];
fruits[0]= new Apple();
fruits[1]= new Orange();
fruits.forEach(itemt =>{
    console.log(itemt.howToEat())
})