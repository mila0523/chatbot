
/*============================relational db responses / messages =====================*/
var api = "";
var apiTest = "https://localhost:7134/api/";
var endpoint = "";

function getAdmin() {
  //create endpoint url
  var controller = "ChatBotAccess/GetAdmins";
  endpoint = apiTest + controller
  var mydata = [];
  $.ajax({  
    url: endpoint,
    method: 'GET',
    success: (data) => {
      data.forEach(element => {
        mydata.push(element);
      });
    },
    error: (xhr, status, error) => {
      console.error('Error:', status, error); 
    }
  });

  return mydata;
}

function getCustomer() {
  //create endpoint url
  var controller = "ChatBotAccess/GetCustomers";
  endpoint = apiTest + controller
  var mydata = [];
  $.ajax({  
    url: endpoint,
    method: 'GET',
    success: (data) => {
      data.forEach(element => {
        mydata.push(element);
      });
    },
    error: (xhr, status, error) => {
      console.error('Error:', status, error); 
    }
  });
  return mydata;
}

function getChats() {
  //create endpoint url
  var controller = "ChatBotAccess/GetChatsbyId";
  endpoint = apiTest + controller
}

function getMessages() {
  //create endpoint url
  var controller = "ChatBotAccess/GetMessages";
  endpoint = apiTest + controller
}

function getResponses() {
  //create endpoint url
  var controller = "ChatBotAccess/GetResponses";
  endpoint = apiTest + controller
}


/*============================Hard coded responses =====================*/
//predefined responses
var greetResponse = 'Hello my name is convee, "always here for your convenience." How may i assist you?';
var goodbyResponse = 'Goodbye, i hope i answered all your question. See you next time.';
var howareResponse = `I am a chatbot and don't have feelings. please ask me another question.`;
var whereImFromResp = `I was developed in the country of South Africa by Convee developers, a team headed by a young developer who graduated from the University of Pretoria.`;
var aboutMeResponse = `I am a chatbot in training. i am currently under development and still open to growing my information knowledge. ${whereImFromResp}`;
var ageResponse = "I was developed in 2023 and released on the 15 Oct 2023";

const messageControl = {
  //Greet Phrase
  'hello': greetResponse,
  'hey': greetResponse,
  'hi': greetResponse,
  'yo': greetResponse,
  'wasup': greetResponse,
  'wassup': greetResponse,

  //combined helos
  'hello how are you': greetResponse + " " + howareResponse,
  'hello, how are you?': greetResponse + " " + howareResponse,
  'hey how are you': greetResponse + " " + howareResponse,
  'hey, how are you?': greetResponse + " " + howareResponse,

  //goodbye phrase
  'goodbye': goodbyResponse,
  'bye': goodbyResponse,
  'see you': goodbyResponse,
  'see ya': goodbyResponse,
  'adios': goodbyResponse,
  'good-bye': goodbyResponse,
  'toodles': goodbyResponse,
  'im leaving': goodbyResponse,

  //How are you - feelings
  'how are you?': howareResponse,
  'how are you': howareResponse,
  'how you doing?': howareResponse,
  'how you doing': howareResponse,
  'how are you doing?': howareResponse,
  'how are you doing': howareResponse,
  'are you good': howareResponse,
  'you good': howareResponse,
  'are you good?': howareResponse,
  'you good?': howareResponse,

  //Chat Age 
  'how old are you?': ageResponse,
  'how old are you': ageResponse,
  'your age': ageResponse,
  'what year were you developed': ageResponse,

  //Where are you from
  'where are you from': whereImFromResp,
  'where do you come from': whereImFromResp,
  'built you': whereImFromResp,
  'who made you': whereImFromResp,
  'where are you from?': whereImFromResp,
  'where do you come from?': whereImFromResp,
  'built you?': whereImFromResp,
  'who made you?': whereImFromResp,

  //about
  'when were you made': aboutMeResponse,
  'tell me about you': aboutMeResponse,
  'about yourself': aboutMeResponse,
  'more about you': aboutMeResponse,
  'who are you': aboutMeResponse,
  'what are you': aboutMeResponse,
  'when were you made?': aboutMeResponse,
  'tell me about you?': aboutMeResponse,
  'about yourself?': aboutMeResponse,
  'more about you?': aboutMeResponse,
  'who are you?': aboutMeResponse,
  'what are you?': aboutMeResponse,
};

export {
  messageControl,
  getCustomer,
  getAdmin,
  getChats,
  getMessages,
  getResponses,
};
