#! /usr/env/bin node
import inquirer from "inquirer";
import chalk from "chalk";
class hotelRecord {
    fullName;
    passportNumber;
    origin;
    checkIn;
    checkOut;
    constructor(fullName, passportNumber, origin, checkIn, checkOut) {
        this.fullName = fullName;
        this.passportNumber = passportNumber;
        this.origin = origin;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
    }
}
let random1 = new hotelRecord("ALI AHMED", 123, "PAKISTAN", "12/02/2023", "22/02/2023");
let random2 = new hotelRecord("ABBAS ALI", 456, "IRAQ", "07/04/2023", "15/04/2023");
let random3 = new hotelRecord("HASSAN RAZA", 789, "SYRIA", "11/06/2023", "26/06/2023");
let random4 = new hotelRecord("M.JAWWAD", 124, "LEBANON", "21/08/2023", "10/03/2023");
let random5 = new hotelRecord("A.NAQI", 690, "KUWAIT", "05/03/2023", "14/03/2023");
const finalArray = [];
// finalArray.push(random1,random2,random3,random4,random5)
// console.log(finalArray)
async function myHotel() {
    //const finalArray: hotelRecord[] = []
    finalArray.push(random1, random2, random3, random4, random5);
    console.log(finalArray);
    console.log(chalk.bold.green("Welcome To Hotel Portal"));
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "givenName",
            message: "Please Enter Your Name? "
        },
        {
            type: "number",
            name: "givenPassportNumber",
            message: "Enter Your Passport Number: "
        },
        {
            type: "input",
            name: "givenOrigin",
            message: "Enter The Country of Origin: "
        },
    ]);
    let matchName = finalArray.find((element) => { element.fullName.toUpperCase() === (answers.givenName.toUpperCase()); });
    console.log(matchName);
    let matchPassportNumber = finalArray.find((element) => { element.passportNumber === answers.givenPassportNumber; });
    console.log(matchPassportNumber);
    let matchOrigin = finalArray.find((element) => { element.origin.toUpperCase() === (answers.givenOrigin.toUpperCase()); });
    console.log(matchOrigin);
    if (matchName && matchPassportNumber && matchOrigin) {
        const response = await inquirer.prompt([{
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
        ]);
        console.log(`Rating : ${response.rating}\nReview : ${response.review}`);
        console.log("Thankyou For Rating Us!\n");
    }
    else {
        console.log("Invalid Name or Passport Number or Origin ");
    }
}
myHotel();
