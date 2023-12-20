import { sideAlert } from "./main.js";
import { hideloader } from "./main.js";


/*============================relational db responses / messages =====================*/
var api = "https://conveebot-api-01.azurewebsites.net/api/";
var apiTest = "https://localhost:7134/api/";
var endpoint = "";




function getAdmin() {
  //create endpoint url
  var controller = "ChatBotAccess/GetAdmins";
  endpoint = api + controller
  var mydata = [];
  $.ajax({  
    url: endpoint,
    method: 'GET',
    success: (data) => {
      data.forEach(element => {
        mydata.push(element);
      });
      hideloader();
    },
    error: (xhr, status, error) => {
      console.error('Error:', status, error); 
      sideAlert(status.toUpperCase() + "! failed to load admin data from database.")
    }
  });

  return mydata;
}

function getCustomer() {
  //create endpoint url
  var controller = "ChatBotAccess/GetCustomers";
  endpoint = api + controller
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

/*===========================Create to databse==========================*/
function addCustomer(){
  var controller = "ChatBotAccess/addCustomer";
}



/*===========================Edit Database ============================ */
function editCustomer(){
  var controller = "ChatBotAccess/editCustomer";
}


export {
  getCustomer,
  getAdmin,
  getChats,
  getMessages,
  getResponses,
};

