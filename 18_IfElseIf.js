// If else if 

// let temprature = +prompt("Given weather deatils");      // prompt for chooes number by given alert 

// if(temprature < 0 ){
//     console.log("weather is exertimly cold");
// } else if(temprature <= 15){
//     console.log("weathe is cold in outside");
// }else if(temprature <= 28){
//     console.log("Weather is normal");
// }else if(temprature <= 35){
//     console.log("Weather is low hot let trun on fan");
// } else if(temprature <= 40){
//     console.log("Weather is too hot let on a AC");
// }else {
//     console.log("Weather is extermlty hot don't move out in home")
// }

let jobAgeStatus = +prompt("Given Age Number");

if(jobAgeStatus >=65){
    console.log("Job Candidate is retired");
}else if(jobAgeStatus >= 55){
    console.log("candidate is Now Senior level Position");
}else if(jobAgeStatus >= 45){
    console.log("Canddate are now Mid-level position");
}else if(jobAgeStatus >=35){
    console.log("Candidate is explore the company system and now he have some experience");
}else if(jobAgeStatus >=25){
    console.log("Candidate is Associte level position");
}else if(jobAgeStatus >= 18){
    console.log("Candidate is Junior level position in Company");
}else {
    console.log("Candidate are Not join the job")
}
