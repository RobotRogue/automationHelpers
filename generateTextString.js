// Generate Random Text String

function makeid() {
  var rest = "";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "0123456789";

  first = uppercase.charAt(Math.floor(Math.random() * 10))
  numval = numeric.charAt(Math.floor(Math.random() * 10))
  
  for (var i = 0; i < 4; i++)
    rest += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    return first + rest + numval;
}

console.log(makeid());

/*
NOTE: When using this in test, make sure the test outputs/logs the value generated, in the event you need it to troubleshoot.
*/
