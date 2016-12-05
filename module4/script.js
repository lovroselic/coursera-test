// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************

/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim*/

(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var x = 0; x< names.length; x++) {

    var firstLetter = names[x].charAt(0).toLowerCase();

    if (firstLetter === "j") {
      byeSpeaker.speak(names[x]);
    } else {
      helloSpeaker.speak(names[x]);
    }
  }
})();
