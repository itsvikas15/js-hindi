const accountId=12345
let accountEmail="vikasmaurya9506"
var accountPassword="12345"
accountCity="delhi"
let accountState;


// accountId=2  // not allowed because const variable does not change
accountEmail="gamerallen720"
accountPassword="12387"
accountCity="ghaziabad"

console.log(accountId);
/*
Prefer not to use var
because of issue in blocks scope and function scope

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])