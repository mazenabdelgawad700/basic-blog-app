/**
 * Object.assign(targetObject, suorce1, suorce2, {prop:"value"} ,....);
 * we use it to take the attributes from any objects and put it inside our target obj;
 * -- this key word point to the instance object that i create from my constructor function;
 */

// we use cosntructor to create many objects with the same porperties and we can modify it as we need

// function Phone (serial) {
//   this.serial = serial;
// }

// const Iphone1 = new Phone(1234);
// const Iphone2 = new Phone(5678);
// const Iphone3 = new Phone(1654);
// const Iphone4 = Phone(7984);

// console.log(Iphone1.serial);
// console.log(Iphone2.serial);
// console.log(Iphone3.serial);
// console.log(window.serial);

// console.log(Iphone1 instanceof Phone);
// console.log(Iphone2 instanceof Phone);
// console.log(Iphone3 instanceof Phone);
// console.log(Iphone4 instanceof Phone);
"=================================================================================";
// function User(name, email, age, showEmail) {
//   this.name = name;
//   this.email = email;
//   this.age = age;
//   this.updateName = (newName) => {
//     return this.age >= 18
//       ? (this.name = `you can change your name and the new name is: ${newName}`)
//       : "You are not allowed to change your name";
//   };
//   this.showEmail = () =>
//     showEmail ? `Email is: ${this.email}` : "you can not see the email";
// }

// const user1 = new User("mazen", "mazen@gmai.com", 12, false);
// console.log(user1.name);
// user1.updateName("RONALDO");
// console.log(user1.updateName("RONALDO"));
// // console.log(user1.name);
// console.log(user1.showEmail());

// let num1 = new Number(1);
// let num2 = new Number(2);

// console.log(typeof(num1))
// console.log(Number(num2))
"========================================================================";

// let string = "123";
// String.prototype.zFill = function (width) {
//   console.log(this);
//   let result = this;
//   while(result.length < width) {
//     result = `0${result}`;
//   }
//   return result.toString();
// }

// console.log("12".zFill(6));

// console.log("test");
"========================================================================";
class User {
  // we use the static property and static methods when we will use it only for the class,
  // not for drived objects
  static counter = 0;

  constructor(name, email) {
    this.name = name;
    this.email = email;
    // we won't write this.counter; because it will not be accessed by the instanced objects
    User.counter++;
  }
  sayHello() {
    return `Hello, ${this.name}`;
  }
  // We can not access this method by the instanced objects 
  static objcetsCount = () => {
    if (this.counter === 0) {
      return "No users created yet";
    } else if (this.counter === 1) {
      return `${this.counter} object has been created`;
    } else {
      return `${this.counter} objects have been created`;
    }
  };
  jsutMsg() {
    return 'from parent class';
  }
}

class Admin extends User {
  constructor (name, email) {
    super(name, email);
  }
  adminMsg() {
    return `You Are Admin`;
  } 
  // we write it with the same name to override it
  jsutMsg() {
    return "from dirived class";
  }

}

let admin1 = new Admin("mazen", "m@cr7.com");
// console.log(admin1.jsutMsg());

"==================================================================="

const myObject = {
  a: 1,
  b: 2,
}

Object.defineProperty(myObject, "c", {
  /**
   * the first 3 properties are true by default;
   * but if you will create the property by this method and did not determine each prop state 
   * it will be false by default;
   * we can not access them except this way 
   * let's go throw each one of them and explain it:-
   * 1 - writable => it detremine if we can cahnge the value or not 
   * 2 - enumerable => we use it if we loop throw the properties of the object and we do not 
   * need it to be showen
   * 3 - configurable => detremine the valdation of deleting the property or not, and the ability to
   * redifine it;
   * 4 - value => where we store the value of our property.
   * 
  */
  writable: false,
  enumerable: false,
  configurable: false,
  value: 7,
} )

"========================================================================"
/**
 * it is the same of definePorperty but it takes an object of properties and each property take the
 * dependencies which we have talk about them, and if you use this way and did not define this dependencies
 * it will be false by default;
 */
Object.defineProperties(myObject, {
  a: {
    value: 1,
  },
  b: {
    value: 2,
  },
  f: {
    value: 3,
  },
  g: {
    value: 4,
  },
});