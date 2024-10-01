function talk(){
  var know = {
    "Who are you" : "Hello, code_asha here",
    "How are you" : "Good :)",
    "What can i do for you" : "Please Give us a Follow & Like.",
    "ok" : "Thank You So Much",
    "Bye" : "Okay! Will meet soon..."
  };

  var user = document.getElementById('userBox').value;
  document.getElementById('chatLog').innerHTML = user + "<br>";
  if(user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
  }else{
    document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand <br>";
  }
  }
