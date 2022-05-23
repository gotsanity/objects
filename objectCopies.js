let user = {name: "jesse", age: 40};

// console.log(user.age);
// console.log(user["age"]);

// for (var key in user) { // object is not sorted
//     console.log(key);
//     console.log(user[key]);
// }

let course = {
    "teacher": "jesse",
    room: "virtual",
    students: [
        "Student1",
        "Student2",
        "Student3"
    ],
    description: "Introduction to JS",
    book: {
        name: "http://javascript.info",
        isSite: true
    },
    "is full": false,
    numStudents: function() {
        return this.students.length;
    }
}

course.students.push("tom");
console.log(course.numStudents());

// console.log(course.book.name);
// console.log(course.students[1]);

// console.log(course.numStudents());

// what happens when we copy an object...?

let course2 = course;

course.room = "Wash101";
console.log(course.room);
console.log(course2.room);

console.log(course == course2);
console.log(course === course2);

let a = {};
let b = {};

console.log(a == b);

let clone = {};

// for (let key in course) {
//     clone[key] = course[key];
// }

Object.assign(clone, course);

clone.teacher = "new guy";
console.log(course.teacher)
console.log(clone);

console.log(course == clone);

console.log("------------------------------------")

// course, course2 (copy not a clone), clone (different object)

course = null;
course2 = null;
clone = null;

console.log(course);
console.log(course2);
console.log(clone);
