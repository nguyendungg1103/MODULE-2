import {Animals} from "./Animal";
import {Edible} from "../InterfaceClass/Edible";

export class Chicken extends Animals implements Edible{
    makeSound() {
        return "chicken : cluck-cluck"
    }
    howToEat(): string {
        return "could be fried"
    }
}
