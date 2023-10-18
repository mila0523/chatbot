//import functions
import { getCustomer } from "./dataservice.js";
import { getAdmin } from "./dataservice.js";
import { sideAlert } from "./main.js";

const adminUsers = getAdmin();
const custUsers = getCustomer();


var errMsg = document.getElementById("errMessg");

var loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function (){
    localStorage.clear();

    var userEmail = $("#email").val();
    var userPassword = $("#password").val();

    const hashedpass = CryptoJS.SHA256(userPassword).toString();
    if(custUsers){

        custUsers.forEach(user => {
            if(userEmail == user.email){
                if(hashedpass == custUsers.find(u => u.email === userEmail).password){
                    localStorage.setItem("username", custUsers.find(u => u.email === userEmail).name);
                    localStorage.setItem("usersurname", custUsers.find(u => u.email === userEmail).surname);
                    localStorage.setItem("customerId", custUsers.find(u => u.email === userEmail).custId);
                    localStorage.setItem("useremail", userEmail);

                    window.location.href = "/chat.html"

                }
                else{
                    myErrorMsg("Incorrect email or password!");
                }
            }
            else{
                myErrorMsg("Incorrect email or password!");
            }
        });
    }

     if(adminUsers){

        adminUsers.forEach(user => {
            if(userEmail == user.email){
                if(hashedpass == adminUsers.find(u => u.email === userEmail).password){
                    localStorage.setItem("username", adminUsers.find(u => u.email === userEmail).name);
                    localStorage.setItem("usersurname", adminUsers.find(u => u.email === userEmail).surname);
                    localStorage.setItem("customerId", adminUsers.find(u => u.email === userEmail).custId);
                    localStorage.setItem("useremail", userEmail);

                    window.location.href = "/chat.html"

                }
                else{
                    myErrorMsg("Incorrect email or password!");
                }
            }
            else{
                myErrorMsg("Incorrect email or password!");
            }
        });
    }
});

function myErrorMsg(msg){
    errMsg.innerHTML = msg;
}

