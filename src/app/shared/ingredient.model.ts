// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }

// ! The above code can be rewritten as the one below to give the same logic, but shorter code.

export class Ingredient {
    constructor (public name: string, public amount: number){  }
}