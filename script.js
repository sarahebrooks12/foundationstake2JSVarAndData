// // alert("Hello World")

// var myName = "Dwayne The Rock Johnson";

// var myName;

// myName = "Dwayne The Rock Johnson";

// myName = "The Rock";

// console.log(myName)

// // In your JavaScript file, instantiate and assign the following variables with information about yourself:
// // firstName should hold a string of your first name
// // lastName should hold a string of your last name
// // age should hold a number of your age
// // likesTravel should hold a boolean representing whether or not you like to travel
// // Log each variable to the console.

// var firstName = "Sarah";
// var lastName = "Brooks";
// var age = 30;
// var likesTravel = false;
// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(likesTravel)

// // In your JavaScript file, instantiate and assign a variable called movieArray. This variable should hold an array of your favorite movie titles. (Don't go overboard- two or three is fine).
// // Log each movie in the array to the console.

// var movieArray = ["Star Wars: The Last Jedi", "The Little Mermaid", "Cinderella (2015)"]

// console.log(movieArray[0])
// console.log(movieArray[1])
// console.log(movieArray[2])

// // Instead of storing the data from your first lightning exercise in separate variables, store them in an object. Your object should have a property of firstName, lastName, age, likesToTravel. It should also have a property called favoriteMovies, which should hold the array of your favorite movies you created in the last lightning exercise.

// var sarahObject = {
//     firstName: "Sarah",
//     lastName: "Brooks",
//     age: 30,
//     likesTravel: false,
//     movieArray: ["Star Wars: The Last Jedi", "The Little Mermaid", "Cinderella (2015)"]
// }
// console.log(sarahObject)

// In your JavaScript file, instantiate and assign the following variables with information about the current weather:
// temperature should hold a number representing the current temperature in Fahrenheit
// conditions should hold a string about the current weather conditions (i.e. "cloudy", "sunny", etc).
// sunriseTime should hold a string representing what time the sun rose this morning
// sunsetTime should hold a string representing what time the sun will set this evening
// Log each variable to the console.
// Use string template literals to combine these variables into a sentence about the weather. (Example: "It's currently sunny and 55 degrees. The sun rose this morning at 7:34 AM and will set at 5:09 PM.")

var temperature = 58;
var conditions = "cloudy";
var sunriseTime = "6:50am";
var sunsetTime = "8:08pm";

console.log(temperature)
console.log(conditions)
console.log(sunriseTime)
console.log(sunsetTime)
// "It's currently sunny and 55 degrees. The sun rose this morning at 7:34 AM and will set at 5:09 PM."
console.log(`It is currently ${conditions} and ${temperature} degrees. The sun rose this morning at ${sunriseTime} and will set at ${sunsetTime}.`)

// In your JavaScript file, copy and paste the following array:

var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 
// Print the first high temperature to the console.
// Print the last low temperature to the console.
// What is the average high temperature from the data set?
// What is the average low temperature from the data set?

console.log(highTemperatures[0])
console.log(lowTemperatures[5])

// In your JavaScript file, create an object that represents the current weather. Your can reuse your data from the first exercise. Your object should have the following properties:

var weatherObject = {
    temperature: 58,
    conditions: "cloudy",
}
console.log(weatherObject.temperature)
console.log(`It is ${weatherObject.temperature} degrees F and ${weatherObject.conditions}.`)
// Log the current temperature to the console.

// Use string template literals to log a sentence about the weather console. (Example: "It's 64 degrees F and sunny.")

var todaysWeather = {
    temperature: {
      high: 65,
      low: 38
    },
    conditions: "cloudy",
    astronomy: {
      sunrise: "6:50 AM",
      sunset: "8:08 PM"
    }
  }
console.log(todaysWeather.temperature.high)
console.log(todaysWeather.temperature.low)
console.log(todaysWeather.conditions)
console.log(todaysWeather.astronomy.sunrise)
console.log(todaysWeather.astronomy.sunset)
console.log(`Today's high was ${todaysWeather.temperature.high} with a low of ${todaysWeather.temperature.low}. It was ${todaysWeather.conditions} today. Sunrise was at ${todaysWeather.astronomy.sunrise} and sunset was at ${todaysWeather.astronomy.sunset}.`)
//   Log today's high temperature to the console.
// Log today's low temperature to the console.
// Log today's conditions to the console.
// Log today's sunrise time to the console.
// Use string template literals to create a more detailed description of today's weather.

var weatherForecast = [
    {
     day: "Today",
     temperature: {
       high: 55,
       low: 32
     },
     conditions: "sunny",
     astronomy: {
       sunrise: "7:43 AM",
       sunset: "5:09 PM"
     }
    },
    {
     day: "Saturday",
     temperature: {
       high: 50,
       low: 29
      },
     conditions: "cloudy",
     astronomy: {
       sunrise: "7:44 AM",
       sunset: "5:08 PM"
     }
    },
    {
     day: "Sunday",
     temperature: {
       high: 47,
       low: 35
      },
     conditions: "chance of rain",
     astronomy: {
       sunrise: "7:45 AM",
       sunset: "5:07 PM"
     }
    }
   ]
//    Log today's weather conditions to the console.
console.log(weatherForecast[0].conditions)
//    Log Saturday's high temperature to the console.
console.log(weatherForecast[1].temperature.high)
//    Log Saturday's sunrise time to the console.
console.log(weatherForecast[1].astronomy.sunrise)
//    Log Sunday's conditions to the console.
console.log(weatherForecast[2].conditions)
//    Log Sunday's sunset time to the console.
console.log(weatherForecast[2].astronomy.sunset)
//    Use string template literals to build few sentences about the weather forecast for Sunday. (Example: "The high on Sunday will be 47 and the low will be 35. We're predicting a chance of rain. The sun will rise at 7:45 AM and set at 5:07 PM.")