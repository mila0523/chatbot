//date 
var d = new Date(); 
var year  = d.getFullYear();
var dateTag = document.getElementById("yearDate");
dateTag.innerHTML =  `JS Chatbot &copy;Mila ${year} -  v1.0.0` ;

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


// Add an event listener to the text box for the "Enter" key press
document.getElementById('messageBx').addEventListener('keydown', handleEnterKeyPress);

function handleEnterKeyPress(event) {
  if (event.key === 'Enter') {
    event.preventDefault();  // Prevent the default action (form submission)
    document.getElementById('sendBtn').click();  // Simulate button click
  }
}


function appendMessage(sender, message) {
  const chatBox = document.getElementById('chat-box');
  
  const messageCard = document.createElement('div');
  messageCard.classList.add('card', 'my-2');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.innerText = message;

  cardBody.appendChild(cardText);
  messageCard.appendChild(cardBody);

  if (sender === 'user') {
    messageCard.classList.add('text-right');
  } else {
    messageCard.classList.add('text-left');
  }

  chatBox.appendChild(messageCard);
}

function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();

  if (message !== '') {
    appendMessage('user', message);

    // Simulate a response from the chatbot
    const botResponse = 'Thank you for your message! I am a simple chatbot.';
    appendMessage('bot', botResponse);

    messageInput.value = '';
  }
}