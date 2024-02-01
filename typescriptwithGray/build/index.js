"use strict";
// letrial types
// it is like the constant variable which you can just use a specific value, and you can assign many values
// and choose between them as you need, and the variable will never accept a value out of the range
let player1;
let myName;
myName = "Mazen";
let add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
// logMsg(add(2, 5));
const subtract = function (a, b) {
    return a - b;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
const multiplay = (m, i) => {
    return m * i;
};
// logMsg(multiplay(4, 3));
const addAll = (a, b, c) => {
    if (c)
        return a + b + c;
    return a + b;
};
// logMsg(addAll(2, 5, 1));
const sumNumbers = (...nums) => {
    return nums.reduce((previous, current) => previous + current);
};
// logMsg(sumNumbers(2, 3, 2)); // 7
const createError = (errorMsg) => {
    throw new Error(errorMsg);
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const stringOrNumber = (value) => {
    if (!isNumber(value))
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError("This should never be happen!");
};
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b; // convert it to string
};
let myVal = addOrConcat(2, 5, 'concat'); // will concat them as string
// Be careful becuse TS will accept this and think that there is no problems here
// but completly the opposite becuse is returned string
// let ErrorVal: number = addOrConcat(2, 5, 'concat') as number; // will sum them as numbers
let nextVal = addOrConcat(2, 5, 'add'); // will sum them as numbers
// console.log(myVal);
// console.log(nextVal);
// let post: [number, string, boolean] = [1, "post one", true];
// console.log("before the updating: ", post);
// post = [2, "post two", false];
// console.log("After the updating: ", post);
// post.push(7);
// console.log("After adding new element but with valid type: ", post);
// to distruct a variable from an array use this approach, if it object use the {};
// const [id, postTitle, publishedState] = post;
// const [id, , publishedState] = post;
// enum Kids {
//   five = 25,
//   seven = 20,
//   ten = 15
// }
// enum level {
//   kid = Kids.ten,
//   easy = 9,
//   meduim = 7,
//   hard = 3
// }
// let lvl: string = "Easy";
// if (lvl === "Easy") {
//   console.log(`The Level is ${lvl} and the number of seconds is: ${level.easy}`);
// }
// let myImg = document.getElementById("MyImg") as HTMLImageElement;
// console.log(myImg.src);
// let data: any = 1000;
// console.log((data as number));
// type A = {
//   one: string,
//   two: number,
//   three: boolean
// }
// type B = A & {
//   four: number
// }
// const getActions = (buttons: B) => {
//   console.log(`Hello, ${buttons.one}`);
//   console.log(`your number: , ${buttons.two}`);
//   console.log(`have a team: , ${buttons.three}`);
//   console.log(`scoored goal: , ${buttons.four}`);
// }
// getActions({ one: "mazen", two: 7, three: true, four: 860 });
// let myObj: {
//   username: string,
//   age: number,
//   hire?: boolean,
//   skills: {
//     one: string,
//     two: string,
//     three: string,
//     four: string
//   }
// } = {
//   username: 'mazen',
//   age: 18,
//   // hire: true,
//   skills: {
//     one: "HTML",
//     two: "CSS",
//     three: "JS",
//     four: "React"
//   }
// }
// console.log(myObj.skills.four);
// interface obj {
//   name: string;
//   age: number;
//   country: string;
//   sayHello(): string;
//   sayWelcome: () => string;
//   doubleNumber(num: number): number
// }
// let user: obj = {
//   name: "mazen",
//   age: 18,
//   country: "EG",
//   sayHello() {
//     return `Hello, ${this.name}`
//   },
//   sayWelcome() {
//     return `Welcome, ${user.name}`
//   },
//   doubleNumber(n) {
//     return n * 2;
//   }
// }
// console.log(user.sayHello()); // hello, mazen
// console.log(user.sayWelcome()); // welcome, mazen
// console.log(user.doubleNumber(100)); // 200
// interface User {
//   id: number;
//   username: string;
//   country: string
// }
// interface Moderator {
//   role: string
// }
// interface Admin extends User, Moderator {
//   protect: boolean
// }
// let user: Admin = {
//   id: 1,
//   username: 'mazen',
//   country: "EG",
//   role: "Admin",
//   protect: true
// }
// Write Your Code Here
// type n = number;
// Do Not Edit Here
// let myData: n;
// myData = 1000; // No Problem Here
// myData = +true; // No Problem Here
// Write Your Code Here
// type mix = number | boolean;
// Do Not Edit Here
// let myInfo: mix;
// myInfo = 1000; // No Problem Here
// myInfo = true; // No Problem Here
// Write Your Code Here
// interface Info {
//   theName: string;
//   theAge: number;
// }
// interface Full extends Info {
//   country: string
// }
// Do Not Edit Here
// function showInfo(data: Info) {
//   console.log(`The Name Is ${data.theName}`);
//   console.log(`The Age Is ${data.theAge}`);
// }
// console.log(showInfo({ theName: "Elzero", theAge: 40 }));
// function showFullInfo(data: Full) {
//   console.log(`The Name Is ${data.theName}`);
//   console.log(`The Age Is ${data.theAge}`);
//   console.log(`The Country Is ${data.country}`);
// }
// console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
// function yesOrNo(val: number): boolean {
//   return val > 10;
// }
// Do Not Edit Here
// console.log(yesOrNo("100")); // Error
// console.log(yesOrNo(30)); // True
// console.log(yesOrNo(8)); // False
// type custom = boolean;
// function isHeOld(age: number): custom {
//   return age > 40;
// }
// Do Not Edit Here
// console.log(isHeOld("100")); // Error
// console.log(isHeOld(45)); // "Yes"
// console.log(isHeOld(30)); // "No"
// let secondPost: [number, string, boolean];
// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
// secondPost = [100, "Title", true]; // Good
// post.push("Elzero"); // Error => Cant Add
// Create Destructuring Here
// const [id, title, state] = secondPost;
// Do Not Edit Here
// console.log(id); // 100
// console.log(title); // "Title"
// console.log(state); // true
// Create Enums + Function Here
// const getNumber = (num: number) => {
//   return Game.Hard - num;
// }
// enum Game {
//   Easy = 100,
//   Medium = Easy - 20,
//   Hard = Medium - (Easy / 2),
//   Insane = getNumber(10),
// }
/**
 * getNumber(num: number): number {
  return (this.Hard - num);
}
 */
// Output
// console.log(Game.Easy); // 100
// console.log(Game.Medium); // 80
// console.log(Game.Hard); // 30
// console.log(Game.Insane); // 20
// const user: {
//   username: string,
//   age: number | string,
//   website?: string,
//   skills: {
//     frontEnd: (string)[],
//     backEnd: (string | number)[]
//   }
// } = {
//   username: "Elzero",
//   age: 40,
//   website: "Elzero.org",
//   skills: {
//     frontEnd: ["HTML", "CSS", "JS"],
//     backEnd: ["PHP", "Python"]
//   }
// }
// We Need To Remove Error From This Edits
// user.username = "Osama";
// user.age = "40";
// user.skills.backEnd.push(100);
// class User {
//   msg: () => string;
//   constructor(private _name: string, protected salary: number, public readonly address: string) {
//     this.msg = function () {
//       return `Hello, ${this._name}, your salary is ${this.salary}`
//     }
//   }
//   sayMsg() {
//     return `Hello, ${this._name}, your salary is ${this.salary}`;
//   }
//   get getUserName(): string {
//     return `Hello, ${this._name}`;
//   }
//   // A 'set' accessor cannot have a return type annotation.
//   set updateUserName(newName: string){
//     this._name = newName;
//   }
// }
// let userOne = new User("CR7", 200_000_000, "ALNassar");
// console.log(userOne.getUserName);
// userOne.updateUserName = "Ronaldo";
// console.log(userOne.sayMsg());
// console.log(userOne.msg());
class User {
    static getCount() {
        console.log(`${this.count} Objects Created`);
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.msg = function () {
            return `Hello, ${this.name}, you are ${this.age} years old`;
        };
        User.count++; // because it is a static value, which means that is not accessable by the instances objects
        // it is owened by the class itself, there is NO another class or instance object can access it.
    }
}
User.count = 0;
let userOne = new User("mazen", 20);
let userTwo = new User("Israa", 21);
let userThree = new User("Aya", 21);
User.getCount(); // 3 Objects Created
// for (let i = 3; i < 100; i++) {
//   if(i % 2 !== 0 )
// }
