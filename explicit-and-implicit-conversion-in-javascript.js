/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
result = Number(result);//Code was set as a string, converted to Number.
console.log("The result is: " + result);

let isValid = Boolean("True");//False was typed in as a string, which makes it truthy. Replaced false with true. 
let isInvalid = Boolean("");//Added a false option to increase code.
if (isInvalid) {
  console.log("This is not valid!");
}
if (isValid) {
    console.log("This is valid!");
}

let age = Number("25");//Age is set as a string and not a number. Value will condense into 255 and not add properly. 
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

//Simple Number code
let hits = Number(200);
let atbats = (654);
let battingAverage = (hits / atbats);
console.log(battingAverage);

//Setting numbers as strings and then converting them to numbers for simple addition
let goals = "25";
goals = Number("25");
let assists = "39";
assists = Number("39");
let points = goals + assists;
let player = "Robert Thomas";
let currentSeason = player + " scored " + goals + " goals and recorded " + assists + " assists for " + points + " points.";
console.log(currentSeason);