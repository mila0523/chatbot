//import functions
import { getCustomer } from "./dataservice";

//messagebox
var messageBox = document.getElementById("messageBx");
//SendBtn 
var sendButton = document.getElementById("sendBtn");
//chatbox
var chatbox = document.getElementById("myChatBox");

sendButton.addEventListener( "click", function(){
    //create array
    // const UserMsg = [];
    // //push new message to array
    // UserMsg.push(messageBox.value);
    // //save array to localstorage
    // const saveArray = JSON.stringify(UserMsg);
    // localStorage.setItem('chat-messages', saveArray);
    //displaying chat in chatbox

    chatbox.innerHTML += `<div class="card text-light bg-primary" style="padding: 10px;">
        <p>${messageBox.value.toLowerCase()}</p>
    </div><br>`
 
    setTimeout(() => {
        chatbox.innerHTML += `<div id="typingDummy" class="card"  style="padding: 10px;">
            <p>Typing...</p>
        </div>`
    }, 500);

    setTimeout(() => {
       response();
    }, 1000);

    // clears text box after text
    messageBox.value = null;
})

function response(){
    var x = compare();
    document.getElementById("typingDummy").remove();

   chatbox.innerHTML += `<div class="card"  style="padding: 10px;">
        <p>${x}</p>
    </div><br/>`
}

function compare(){
    var query = messageBox.value;
    var test = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    return test
}

//Greet Phrase
let greetPhrases = [
    "Hello",

]

let goodbyePhrase = [
    "Goodbye",
]


