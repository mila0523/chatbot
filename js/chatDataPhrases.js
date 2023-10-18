//import functions
import { getCustomer } from "./dataservice.js";
import { scrollToBottom } from "./main.js";
import { messageControl } from "./dataservice.js";


//messagebox
var messageBox = document.getElementById("messageBx");
//SendBtn 
var sendButton = document.getElementById("sendBtn");
//chatbox
var chatbox = document.getElementById("myChatBox");
try{
    sendButton.addEventListener("click", function () {
        //create array
        // const UserMsg = [];
        // //push new message to array
        // UserMsg.push(messageBox.value);
        // //save array to localstorage
        // const saveArray = JSON.stringify(UserMsg);
        // localStorage.setItem('chat-messages', saveArray);
        //displaying chat in chatbox
    
        chatbox.innerHTML += `<div class="card text-light bg-primary" style="padding: 10px;">
            <span style="font-size:12px;"><b>MILA</b></span>
            <p>${messageBox.value}</p>
        </div><br>`
      
        chatbox.innerHTML += `<div id="typingDummy" class="card"  style="padding: 10px;">
            <span style="font-size:12px;"><b>CHATBOT</b></span>
            <p id="textParagraph"></p>
        </div>`
    
        scrollToBottom();
    
        function loader(){
            var vdots = document.getElementById("textParagraph").innerHTML;
            var dots = vdots.replace("Typing", "");
    
            if(dots.length == 3){
                dots = "..";
            }
            else if(dots.length == 2){
                dots = "";
            }
            else if(dots.length == 1){
                dots = "...";
            } 
            else{
                dots = ".";
            } 
            document.getElementById("textParagraph").innerHTML = `Typing${dots}`;
        }
    
        const loadinterval = setInterval(loader, 200);
    
        setTimeout(() => {
            clearInterval(loadinterval);
            response();
        }, 2000);
    
    
    })
    
}catch{

}
function response() {
    var x = compare();
    document.getElementById("typingDummy").remove();
    var respMsgs = document.getElementsByClassName("myrespMsg")

    // Create a SpeechSynthesisUtterance instance
    const utterance = new SpeechSynthesisUtterance(x);
    // Use the default speech synthesis voice (you can customize this if needed)
    utterance.voice = speechSynthesis.getVoices()[0];
    // Speak the text
    speechSynthesis.speak(utterance);

    chatbox.innerHTML += `<div class="card myrespMsg"  style="padding: 10px;">
        <span style="font-size:12px;"><b>CHATBOT</b></span>
        <p>${x}</p>
    </div><br/>`

    scrollToBottom();
}

function compare() {
    var query = messageBox.value.toLowerCase();

    var errQuestionResp = `Sorry i do not understand your question, please try a different one.`;
    const Msgresponses = messageControl;

    //first check for and exact mathc then for a similar match
    const responseText = Msgresponses[query.toLowerCase()] || errQuestionResp;
    
    // clears text box after text
    messageBox.value = null;

    if (responseText != errQuestionResp) { 
        
        // if ther is an exact match in the array keys, the response is returned.
        return responseText;
    }
    else {
        // Check if the query is contained in any of the keys
        const matchingKey = Object.keys(Msgresponses).find(key => key.includes(query));

        if (matchingKey) {
           
            return Msgresponses[matchingKey];
        } else {
           
            return errQuestionResp;
        }
    }
}



