//date 
var d = new Date(); 
var year  = d.getFullYear();
var dateTag = document.getElementById("yearDate");
dateTag.innerHTML =  `JS Chatbot Convee &copy; ${year} -  v1.0.0 Powered by <a href="https://convee.bsite.net/convee.co.za" target="_blank">convee.co.za</a>` ;

try{
  setInterval(myTimer, 1000);
}
catch{
  //
}


function myTimer() {
  const d = new Date();
  try{
    document.getElementById("tmecode").innerHTML = d.toLocaleTimeString() + " (SAST)";  
  }
  catch{

  }  
  hideloader();
}

//SCROLL TO FUNCTION
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.body.style = "transition: ease-in 0.3s; behavior: smooth;";
  document.documentElement.scrollTop = 0;
}

//loader
function hideloader(){
  var loader = document.getElementById("loader-gif");
  var body = document.querySelector("body");
  
  loader.style.display = "none"
}

try {
  // Add an event listener to the text box for the "Enter" key press
document.getElementById('messageBx').addEventListener('keydown', handleEnterKeyPress);

}
catch{
  
}
function handleEnterKeyPress(event) {
  if (event.key === 'Enter') {
    event.preventDefault();  // Prevent the default action (form submission)
    document.getElementById('sendBtn').click();  // Simulate button click
  }
}

// Function to scroll the chatbox to the bottom
const scrollingDiv = document.getElementById('myChatBox');

function scrollToBottom() {
  scrollingDiv.scrollTop = scrollingDiv.scrollHeight;
}

export{
  scrollToBottom
}



