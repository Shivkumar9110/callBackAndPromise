function AgeIndays(first,last,age,Ageconverter){
    let AgeInDays= Ageconverter(age);
    console.log(`The Person full Name is:- ${first}${last} and age is: ${AgeInDays} days.`)

}


// AgeIndays function call and input the first name and last name.
let firstName= "Shiv";
let LastName = "kumar"
let AgeInYear = 23;
AgeIndays(firstName,LastName,AgeInYear,Ageconverter)

function Ageconverter(Age){
    return Age*365;
}