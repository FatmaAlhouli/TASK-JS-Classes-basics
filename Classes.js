/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 *
 * 2. Add the constructor that initializes all properties
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 *
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021),
 *   and returns the age of the person
 *
 * after you are done with the class, create at least 3 objects of type Person.
 * print every person's name using the method printName of each object
 * print out the sum of their ages using calculateAge() method
 */
class Person {
  // continue the code here
//firstname = "Fatma";
//lastname= "Alhouli";
//gender = "Female";
//birthdayyear = "1985";

  constructor (firstname , lastname , gender , birthdayyear) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender ;
    this.birthdayyear = birthdayyear;

 }

}

introduceSelf() {
  console.log(`Hi! I'm ${this.firstname}`);
}

const Information = new Person ("Fatma", "Alhouli","Female","1985");
const Information1 = new Person ("Aisha", "Malallah","Female","2005");
const Information3 = new Person ("Nourah", "Malallah","Female","2005");
console.log (Information.firstname + " " + Information.lastname);
const age = 2023 - Information.birthdayyear;
console.log (Information1.firstname + " " + Information.lastname);
const age1 = 2023 - Information1.birthdayyear ; 
console.log (Information2.firstname + " " + Information.lastname);
console.log (age);




/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array,
 *  you should not pass it in the constructor method, and just initialize it with empty array.
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], 
 *      then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  // continue the code here
  //title = "Captin Phlepes";
 // duration = "150";
 // genre = "100";
rating = [];

  constructor (title , duration , genre ) {
    this.title = title;
    this.duration = duration;;
    this.genre = [];
    console.log ()
  }
rate (rating)
{
  if (rating > 0 && rating < 10) {
    this.rating.push(rating);
  } else {
    console.log("Invalid rating. Rating should be greater than 0 and less than 10.");
  }
  
}
averageRating() {
    let sum = 0; 
      array.forEach(item => {
      sum += item;
    });
      console.log(sum); 
    return sum;
  }
}


 



 


/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

// write the class here
class  Actor {
  Person ;
  Movies [] ;

}