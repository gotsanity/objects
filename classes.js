// class User {
//     // this is whats fired when we call a new User(blah) call;
//     constructor(name, age) {
//         this._name = name;
//         this.age = age;
//     }

//     sayHi() {
//         console.log(this.name + " says hi!");
//     }

//     get name() {
//         return this._name;
//     }

//     get age() {
//         return this._age;
//     }

//     set age(value) { // clamp our value between 1 and 100
//         if (value <= 0) {
//             value = 1;
//         }

//         if (value > 100) {
//             value = 100;
//         }

//         this._age = value;
//     }
// }

// let person = new User("Jesse", 40);
// person.sayHi();
// console.log(person.name + " is " + person.age + " years old.");


// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} runs with a speed of ${this.speed}`);
//     }

//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} stands still.`);
//     }
// }

// class Rabbit extends Animal {

//     constructor(name, earLength) {
//         super(name);
//         this.earLength = earLength;
//     }

//     hide() {
//         console.log(`${this.name} hides.`);
//     }

//     stop() {
//         super.stop();
//         this.hide();
//     }
// }

// let player = new Rabbit("Bunny", 10);
// player.run(25);
// player.stop();
// console.log(player.earLength);

class User {
    static counter = 0;

    constructor(name) {
        User.counter++;
        this.name = name;
    }
}

class Validator {
    static HasLength(len, value) {
        return value.length >= len;
    }

    static IsInRange(min, max, value) {
        if (value < min || value > max) {
            return false;
        }
        return true;
    }
}

let users = [];

for (let i = 0; i < 10; i++) {
    users.push(new User(`User#${i}`));
    console.log(Validator.IsInRange(3, 8, i));
}

console.log(User.counter);

console.log(Validator.HasLength(4, "sam"));

if (Validator.HasLength(5, "same")) {
    console.log("Jesse is valid");
} else {
    console.log("please try again")
}