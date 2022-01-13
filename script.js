// var myVar;
// console.log(myVar);

// var colors = ["red", "blue", "green"];
// colors.push("purple"); //adding purple to "colors"
// console.log(colors);
// console.log(colors.length);

// var cars = ["toyota", "volkswagen", "mercedes", "nissan", "bmw"];
// console.log(cars[0]);
// console.log(cars.length);

// for (var i = 0; i < cars.length; i++) {
//   console.log(i);
//   console.log(cars[i]);
// }

// var selectedNumber = 60;
// // 3+ => 10 // true
// // 30 <= 50 // false
// // ok the messege will show
// if (selectedNumber >= 10 && selectedNumber <= 50) {
//   console.log("The selected number is within range.");
// }

// var dayOfTheWeek = "Tuesday";
// // "Monday" === "Monday" // true
// // "Monday" === "Tuesday" // false

// //true                        OR false
// if (dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday") {
//   console.log("It's not the weekend");
// }

// var stringFour = "4";
// var numberFour = 4;
// if (stringFour === numberFour) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }
// if (stringFour == numberFour) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

//lesson task 1
// var animals = ["cow", "bird", "mouse"];
// console.log(animals.length);
// for (var i = 0; i < animals.length; i++) {
//   console.log(i);
// }

//lesson task 2
//== is almost alike, === is exact
//"6" === 6 will be false/ not equal
//"6" == 6 will be true/equal

// var stringFour = "4";
// var numberFour = 4;
// if (stringFour !== numberFour) {
//   console.log("not equal");
// } else {
//   console.log("equal");
// }
// if (stringFour != numberFour) {
//   console.log("not equal");
// } else {
//   console.log("equal");
// }
// var someVar;

//Objects and arrays of objects:
//arrays
// var planets = [
//   "earth",
//   "mars",
//   ["sander", "heshanm", "lisa"],
//   ["bmw", "volvo"],
// ];
// console.log(planets[1]); //mars
// console.log(planets[2][0]); //sander
// console.log(planets[3][1]); //volvo

// var mobile = {
//   name: "iphone 11",
//   color: "green",
//   age: 2,
//   storage: 64,
// };
// console.log(mobile);
// console.log(mobile.name);
// console.log(mobile.age);
// // alert(mobile.name);

//Objects
// var mobilePhones = [
//   {
//     name: "iphone 11",
//     color: "green",
//     storage: 64,
//   },
//   {
//     name: "samsung 3",
//     color: "blue",
//     storage: 128,
//   },
//   {
//     name: "nokia 3301",
//     color: "red",
//     storage: 16,
//   },
//   {
//     name: "motorola razor flip",
//     color: "black",
//     storage: 256,
//   },
// ];
// console.log(mobilePhones);

// for (var i = 0; i < mobilePhones.length; i++) {
//   console.log(mobilePhones[1]);
// }

// lesson task 3
// var people = [
//   {
//     name: "sander",
//     age: 27,
//   },
// ];
// for (var i = 0; i < people.length; i++) {
//   console.log(people[i].age);
//   console.log(people[i].name);
// }

//MA
// function boolean_test(val) {
//   if (typeof val == "boolean") {
//     console.log(val);
//   } else {
//     console.log("Please pass a boolean value in");
//   }
// }

// boolean_test("morendin");

// function myTest() {
//   const loc = "foo";
//   console.log(loc);
// }
// myTest();

// myTest();

//functions:
// function logWord() {
//   console.log("Hello world");
// }
// logWord(); //"log hello world"

// var name = "Sander";
// console.log(name); //"log Sander"

// logWord(); //"log hello world"

// logWord(); //"log hello world"

// function logWord(name, age) {
//   console.log("my name is " + name + " and my age is: " + age);
// }

// logWord("Sander", 27);

// function someName(name) {
//   console.log(name);
// }

// someName("Sander");

// function printLikeCounter(likeCounter) {
//   console.log(likeCounter + " Likes");
// }

// printLikeCounter(100);

// printLikeCounter(39);

// printLikeCounter(40);

//return:
// function getNumberOfLikes(numberOfLikes) {
//   return numberOfLikes + " likes";
// }

// var totalNumberOfLikes = getNumberOfLikes(40);
// console.log(totalNumberOfLikes);

function getSum(num1, num2) {
  console.log(num1 + num2);
}
getSum(12, 13);

function getMultiply(num1, num2) {
  console.log(num1 * num2);
}
getMultiply(11, 12);

function getName(firstName, secondName) {
  console.log(firstName + " " + secondName);
}

getName("Sander", "Smedbøl");
