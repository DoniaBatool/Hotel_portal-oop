#! /usr/env/bin node

import inquirer from "inquirer";
import chalk from "chalk";


interface Hotel {
    fullName: string;
    passportNumber: number;
    origin: string;
    checkIn: string;
    checkOut: string;
   }
   
   class HotelRecord implements Hotel {
    fullName: string;
    passportNumber: number;
    origin: string;
    checkIn: string;
    checkOut: string;
   
    constructor(fullName: string, passportNumber: number, origin: string, checkIn: string, checkOut: string) {
    this.fullName = fullName;
    this.passportNumber = passportNumber;
    this.origin = origin;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
    }
   }
   
   let random1 = new HotelRecord("ALI AHMED", 123, "PAKISTAN", "12/02/2023", "22/02/2023");
   let random2 = new HotelRecord("ABBAS ALI", 456, "IRAQ", "07/04/2023", "15/04/2023");
   let random3 = new HotelRecord("HASSAN RAZA", 789, "SYRIA", "11/06/2023", "26/06/2023");
   let random4 = new HotelRecord("M.JAWWAD", 124, "LEBANON", "21/08/2023", "10/03/2023");
   let random5 = new HotelRecord("A.NAQI", 690, "KUWAIT", "05/03/2023", "14/03/2023");
   
   const finalArray: HotelRecord[] = [random1, random2, random3, random4, random5];
   
   async function myHotel(finalArray:HotelRecord[]) {
    console.log(finalArray);
    console.log(chalk.bold.green("Welcome To Hotel Portal"));
   
    const answers = await inquirer.prompt([
    {
    type: "input",
    name: "givenName",
    message: "Please Enter Your Name? "
    },
    {
    type: "input",
    name: "givenPassportNumber",
    message: "Enter Your Passport Number: ",
    validate: (input) => {
    const passNumber = parseInt(input, 10);
    if (isNaN(passNumber)) {
    return 'Please enter a valid passport number';
    }
    return true;
    }
    },
    {
    type: "input",
    name: "givenOrigin",
    message: "Enter The Country of Origin: "
    }
    ]);
   
    const { givenName, givenPassportNumber, givenOrigin } = answers;
    const passportNumber = parseInt(givenPassportNumber, 10);
   
    const match = finalArray.find(element =>
    element.fullName === givenName &&
    element.passportNumber === passportNumber &&
    element.origin === givenOrigin
    );
   
    if (match) {
    const response = await inquirer.prompt([
    {
    type: "list",
    name: "rating",
    message: "Please Rate Us According To Your Experience",
    choices: ["*", "**", "***", "****", "*****"]
    },
    {
    type: "checkbox",
    name: "review",
    message: "How Was Your Stay At The Hotel",
    choices: ["Excellent", "Good", "Average", "Bad"]
    }
    ])
    if(match===random1){
        console.log("TOURIST RECORD:\n")
        console.log(`Full Name: ${random1.fullName}\nOrigin: ${random1.origin}\nPassport Number: ${random1.passportNumber}\nCheckIn: ${random1.checkIn}\nCheckOut: ${random1.checkOut}\nRating: ${response.rating}\nReview : ${response.review}\n`);
        console.log(`Thank you Mr./Ms. ${answers.givenName} For Rating Us!`)
    }
    else if(match===random2){
        console.log("TOURIST RECORD:\n")
        console.log(`Full Name: ${random2.fullName}\nOrigin: ${random2.origin}\nPassport Number: ${random2.passportNumber}\nCheckIn: ${random2.checkIn}\nCheckOut: ${random2.checkOut}\nRating: ${response.rating}\nReview : ${response.review}\n`);
        console.log(`Thank you Mr./Ms. ${answers.givenName} For Rating Us!`)
    }
    else if(match===random3){
        console.log("TOURIST RECORD:\n")
        console.log(`Full Name: ${random3.fullName}\nOrigin: ${random3.origin}\nPassport Number: ${random3.passportNumber}\nCheckIn: ${random3.checkIn}\nCheckOut: ${random3.checkOut}\nRating: ${response.rating}\nReview : ${response.review}\n`);
        console.log(`Thank you Mr./Ms. ${answers.givenName} For Rating Us!`)
    }
    else if(match===random4){
        console.log("TOURIST RECORD:\n")
        console.log(`Full Name: ${random4.fullName}\nOrigin: ${random4.origin}\nPassport Number: ${random4.passportNumber}\nCheckIn: ${random4.checkIn}\nCheckOut: ${random4.checkOut}\nRating: ${response.rating}\nReview : ${response.review}\n`);
        console.log(`Thank you Mr./Ms. ${answers.givenName} For Rating Us!`)
    }
    else if(match===random5){
        console.log("TOURIST RECORD:\n")
        console.log(`Full Name: ${random5.fullName}\nOrigin: ${random5.origin}\nPassport Number: ${random5.passportNumber}\nCheckIn: ${random5.checkIn}\nCheckOut: ${random5.checkOut}\nRating: ${response.rating}\nReview : ${response.review}\n`);
        console.log(`Thank you Mr./Ms. ${answers.givenName} For Rating Us!`)
    }
   } else {
    console.log("TOURIST RECORD NOT FOUND\n")
    console.log("Invalid Name or Passport Number or Origin");
    }
    
   }
   
   myHotel(finalArray);




