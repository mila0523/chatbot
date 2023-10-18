//import functions
import { getCustomer } from "./dataservice.js";
import { getAdmin } from "./dataservice.js";

const allUsers = [getAdmin(), getCustomer()]
const adminUsers = getAdmin();
const custUsers = getCustomer();

var loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function (){
    var userEmail = $("#email").val();
    var userPassword = $("#password").val();

    console.log(x);
});