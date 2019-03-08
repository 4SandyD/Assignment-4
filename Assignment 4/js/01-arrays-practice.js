/*eslint-env browser*/
// jshint esversion: 6

//STEP 1
// myFaveMovies = ["Some Like It Hot", "North by Northwest", "Rear Window", "La Dolce Vita", "Fanny and Alexander"];
// window.console.log(myFaveMovies[1]);


//STEP 2
// var movies = new Array(5);
// movies[0] = "Some Like It Hot";
// movies[1] = "North by Northwest";
// movies[2] = "Rear Window";
// movies[3] = "La Dolce Vita";
// movies[4] = "Fanny and Alexander";
// window.console.log(movies[0]);


//STEP 3
// var movies = new Array(5);
// movies[0] = "Some Like It Hot";
// movies[1] = "North by Northwest";
// movies[2] = "Rear Window";
// movies[3] = "La Dolce Vita";
// movies[4] = "Fanny and Alexander";
// window.console.log(movies[0]);

// movies.push("Johnny English");
// window.console.log(movies.length);


//STEP 4
// var movies = ["Some Like It Hot", "North by Northwest", "Rear Window", "La Dolce Vita", "Fanny and Alexander"];

// delete movies[0];
// window.console.log(movies);


//STEP 5
// var movies = ["Some Like It Hot", "North by Northwest", "Rear Window", "La Dolce Vita", "Fanny and Alexander", "Johnny English", "The 39 Steps"];

// for (var i = 0; i < movies.length; i++) {
//   window.console.log(movies[i]);
// }


//STEP 6
// var movies = ["Some Like It Hot", "North by Northwest", "Rear Window", "La Dolce Vita", "Fanny and Alexander", "Johnny English", "The 39 Steps"];
// var movieString = "";

// for (var i in movies) {
//   movieString += movies[i] + "\n";
// }
// window.console.log(movieString);


//STEP 7
// var movies = ["Some Like It Hot", "North by Northwest", "Rear Window", "La Dolce Vita", "Fanny and Alexander", "Johnny English", "The 39 Steps"];
// movies.sort();
// var movieString = "";

// for (var i in movies) {
//   movieString += movies[i] + "\n";
// }
// window.console.log(movieString);


//STEP 8
// var movies = ["Some Like It Hot", "North by Northwest", "Rear Window", "La Dolce Vita", "Fanny and Alexander", "Johnny English", "The 39 Steps"];

// var leastFavMovies = ["Citizen Kane", "The Exorcist", "Water Boy"];

// window.console.log("Movies I like:");
// window.console.log("");
// for (var i = 0; i < 3; i++) {
//   window.console.log(movies[i]);
// }
// window.console.log("...");
// window.console.log("");
// window.console.log("Movies I regret watching:");
// window.console.log("");
// for (var i = 0; i < 3; i++) {
//   window.console.log(leastFavMovies[i]);
// }
// window.console.log("...");


//STEP 9
// var movies = ["Some Like It Hot", "North by Northwest", "Rear Window", "La Dolce Vita", "Fanny and Alexander", "Johnny English", "The 39 Steps"];

// var leastFavMovies = ["Citizen Kane", "The Exorcist", "Water Boy"];

// var moviesConcat = movies.concat(leastFavMovies);
// moviesConcat.sort();
// window.console.log(moviesConcat.reverse());


//STEP 10
// var movies = ["Some Like It Hot", "North by Northwest", "Rear Window", "La Dolce Vita", "Fanny and Alexander", "Johnny English", "The 39 Steps"];

// var leastFavMovies = ["Citizen Kane", "The Exorcist", "Water Boy"];

// var moviesConcat = movies.concat(leastFavMovies);
// moviesConcat.sort();
// moviesConcat.reverse();
// var moviesConcatSlice = moviesConcat.slice(0, 9);
// window.console.log(moviesConcatSlice);


//STEP 11
// var movies = ["Some Like It Hot", "North by Northwest", "Rear Window", "La Dolce Vita", "Fanny and Alexander", "Johnny English", "The 39 Steps"];

// var leastFavMovies = ["Citizen Kane", "The Exorcist", "Water Boy"];

// var moviesConcat = movies.concat(leastFavMovies);
// moviesConcat.sort();
// moviesConcat.reverse();
// var moviesConcatSplice = moviesConcat.splice(0, 1);
// window.console.log(moviesConcatSplice);


//STEP 12
// var movies = ["Some Like It Hot", "North by Northwest", "Rear Window", "La Dolce Vita", "Fanny and Alexander", "Johnny English", "The 39 Steps"];

// var leastFavMovies = ["Citizen Kane", "The Exorcist", "Water Boy"];

// var moviesConcat = movies.concat(leastFavMovies);

// window.console.log(moviesConcat.indexOf("Citizen Kane"));
// window.console.log(moviesConcat.indexOf("The Exorcist"));
// window.console.log(moviesConcat.indexOf("Water Boy"));

// moviesConcat.splice(7, 3);
// window.console.log(moviesConcat);

// moviesConcat.splice(7, 0, "Reds", "Life with Father", "Emma Bovary");
// window.console.log(moviesConcat);


//STEP 13
// var employee1 = [];
// employee1["employeeID"] = "OS111";
// employee1["name"] = "Tim Tiny";
// employee1["title"] = "Paperclip Counter Specialist";
// employee1["department"] = "Office Supplies";
// employee1["currentEmployee"] = "yes";

// var employee2 = [];
// employee2["employeeID"] = "RA1622";
// employee2["name"] = "Bubbles LaBangle";
// employee2["title"] = "Receptionist";
// employee2["department"] = "Reception";
// employee2["currentEmployee"] = "yes";

// var employee = [];
// employee[0] = [];
// employee[0] ["employeeID"] = "OS111";
// employee[0] ["name"] = "Tim Tiny";
// employee[0] ["title"] = "Paperclip Counter Specialist";
// employee[0] ["department"] = "Office Supplies";
// employee[0] ["currentEmployee"] = "yes";

// employee.push(employee2);

// // TEST TO MAKE SURE ARRAY IS POPULATED PROPERLY
// //window.console.log(employee); 

// window.console.log(employee[1] ["name"]);


//STEP 14
// var employee2 = [];
// employee2["employeeID"] = "RA1622";
// employee2["name"] = "Bubbles LaBangle";
// employee2["title"] = "Receptionist";
// employee2["department"] = "Reception";
// employee2["currentEmployee"] = "yes";

// var employee = [];
// employee[0] = [];
// employee[0] ["employeeID"] = "OS111";
// employee[0] ["name"] = "Tim Tiny";
// employee[0] ["title"] = "Paperclip Counter Specialist";
// employee[0] ["department"] = "Office Supplies";
// employee[0] ["currentEmployee"] = "yes";

// employee.push(employee2);

// // TEST TO MAKE SURE ARRAY IS POPULATED PROPERLY
// window.console.log(employee);

// // PRINT OUT NAMES OF BOTH EMPLOYEES

// for (var i = 0; i < employee.length; i++) {
//   window.console.log(employee[i]["name"]);
// }


//STEP 15
// var employee2 = [];
// employee2["employeeID"] = "RA1622";
// employee2["name"] = "Bubbles LaBangle";
// employee2["title"] = "Receptionist";
// employee2["department"] = "Reception";
// employee2["currentEmployee"] = true;

// var employee = [];
// employee[0] = [];
// employee[0] ["employeeID"] = "OS111";
// employee[0] ["name"] = "Tim Tiny";
// employee[0] ["title"] = "Paperclip Counter Specialist";
// employee[0] ["department"] = "Office Supplies";
// employee[0] ["currentEmployee"] = true;

// employee.push(employee2);
 
// var employee3 = [];
// employee3["employeeID"] = "M9585";
// employee3["name"] = "Clarence Cleenupp";
// employee3["title"] = "Janitor";
// employee3["department"] = "Maintenance";
// employee3["currentEmployee"] = false;

// employee.push(employee3);

// // TEST TO MAKE SURE ARRAY IS POPULATED PROPERLY
// window.console.log(employee);

// // SHOW ALL CURRENT EMPLOYEES
// for (var i = 0; i < employee.length; i++) {
//   if (employee[i]["currentEmployee"] === true) {
//     window.console.log(employee[i]["name"]); 
//   } 
// } 


// STEP 16
//  var movies = [["Some Like It Hot",1], ["North by Northwest",2], ["Rear Window",3], ["La Dolce Vita",4], ["Fanny and Alexander",5]]; 

// // TEST TO MAKE SURE ARRAY IS POPULATED PROPERLY
//  window.console.log(movies);

// // USING .FILTER
// var movieNames = movies.filter(function(value) {
//   if (value === 'string') {
//     return true;
//   }
// });
// window.console.log(movieNames);

// window.console.log("I don't know why this code is not working!");




//STEP 17
// var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

// var showEmployee = function(name) {
//   console.log("Employees: \n" );
//   console.log("");
//   for (var i = 0; i < name.length; i++) {
//     console.log(name[i] + "\n");
//   }
// }; 
// showEmployee(employees); 


//STEP 18
// var testData = [58, "abcd", true, null, false, 0];
// console.log(testData);

// var testOut = testData.filter(function(value) {
//   if (value > 0) {
//     return true;
//   }
//   if (typeof value === 'string') {
//     return true;
//   }
// });
// console.log(testOut);


//STEP 19
// var myClothes = ["blouse", "skirt", "pants", "shoes", "jacket", "coat", "vest",  "tunic", "sweater", "boots"];

// Array.prototype.random = function (length) {
//   return this[Math.floor((Math.random()*length))];
// };

// var chosenClothes = myClothes.random(myClothes.length);
// console.log(chosenClothes);



//STEP 20
// var myNums = [75, 15, 735, 95, 74, 585, 100, 25, 14, 98, 432];
// // window.console.log(myNums); //display original array

// var myBigNum = myNums.sort(function(num1, num2) {
//   if (num1 > num2) {
//     return -1;
//   }
//   else {
//     return 1;
//   }
// });
// window.console.log("The largest number in this array is: " + myBigNum[0]);






