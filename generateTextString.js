// Generate Random Text String

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(makeid());

/*
TODO: Modify to make only the first char uppercase.
NOTE: When using this in test, make sure the test outputs/logs the value generated, in the event you need it to troubleshoot.
*/
