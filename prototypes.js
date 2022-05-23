// prototypes are all about sharing common code

let animal  = {
    name: "Animal",
    eats: true,
    walk() {
        console.log("The animal is moving");
    },
    sayHello() {
        console.log(this.name + " says hello!");
    }
};

let mammal = {
    name: "Mammal",
    hasFur: true
};

let rabbit = {
    name: "Rabbit",
    __proto__: mammal,
    jump() {
        console.log("The rabbit is jumping!");
    },
    //overwrite the animal walk method
    walk() {
        console.log("The rabbit hops away.");
    }
}

mammal.__proto__ = animal;
//rabbit.__proto__ = mammal;

// console.log(mammal);
// console.log(new Object());

console.log("can an animal eat?", animal.eats);
console.log("does a mammal eat?", mammal.eats);
console.log("does a mammal have fur?", mammal.hasFur);
console.log("does a animal have fur?", animal.hasFur);

mammal.walk();
rabbit.jump();
rabbit.walk();

animal.sayHello();
mammal.sayHello();
rabbit.sayHello();

// will only show your own keys
console.log(Object.keys(rabbit));

// will show all keys in the inheritance chain
for(let prop in rabbit) {
    console.log(prop);
}