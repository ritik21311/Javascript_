const accountStatus = "ActivePaused"
let accountPassword  = "124251520"
var accountId = "4"
accountPosition = "45"

/* Const keyword updation not allowed.
accountStatus = "yess"
*/

accountPassword = "8888888"
accountId = '65'
accountPosition = "fffff"

/* prefer not to use var 
   because issue in block scope and functional scope.
*/


console.log(accountPassword)
console.table([accountId, accountPassword,accountStatus,accountPosition])