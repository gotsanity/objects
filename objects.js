// object constructor
let user = new Object();

user.name = "jesse";
user.age = 40;

console.log(user);


// object literal
let person = {name: "Jesse",age: 40};

console.log(person);

console.log(person.name);
console.log(person["name"]);
console.log(person.nonexistant);

let arr = [
    { name: "jesse", age: 40 },
    { name: "sarah", prof: "student"}
]

// send to display: name, prof
// jesse, undefined
// sarah, student

let complexObject = { 
    name: "jesse",
    "is teacher": true,
    alsoIsATeacher: true
};

console.log(complexObject);
console.log(complexObject["is teacher"]);

let course = {
    teacher: "Jesse",
    description: "Introduction to JavaScript",
    students: [
        "Student1",
        "Student2"
    ],
    bookInfo: {
        name: "Http://Javascript.info",
        source: "internet",
        isFree: true
    },
    isEnrolled: function (person) {
        return this.students.findIndex(elem => elem == person);
    }
}

console.log(course);
console.log(course.isEnrolled("Student1"));




// shorthand way of creating objects (similar to a class constructor)

function makeObj(n, a) {
    return {
        name: n,
        age: a
    }
}

let newUser = makeObj("jesse", 40);
console.log(newUser);

// for let return 
let obj = {
    for: 1,
    let: 2
}

// if you need to check if a property of an object exists
console.log("for" in obj);
console.log("toast" in obj);

let key = "for";
console.log(key in obj);


for (key in course) {
    console.log("key", key); // this is the name of the key
    console.log("value", course[key]); // this is the value of the key
}
