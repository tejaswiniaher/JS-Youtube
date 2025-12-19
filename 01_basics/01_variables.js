const accountId = 14454
let accountemail = "tejaswiniaher@34"
var accountPassword = "12344"
accountCity = "Jaipur"
let accountState;
// accountId = 2 // not allowed to change const variable

accountemail = "hsca@gmail.com"
accountPassword = "8466557"
accountCity = "Bangaluru"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/



console.table([accountId, accountemail, accountPassword, accountCity, accountState])
