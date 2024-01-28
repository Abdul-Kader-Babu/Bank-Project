// select the login page 

let email = document.querySelector("#mail");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let emailSpan = document.querySelector("#emailspan");
let warnP = document.querySelector("#emailspan p");
let passSpan = document.querySelector("#passspan p");

let logIN = document.querySelector(".login");
let transAction = document.querySelector(".transaction");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    if(email.value && password.value) {

        logIN.style.display = "none";
        transAction.style.display = "block";

    } else {
        if(!email.value ) {
           

           warnP.style.color = "red";


        } else if(!password.value) {
            passSpan.style.color = "red";
        } 
    }
})

email.addEventListener("focus", (e) => {
    e.preventDefault();
    warnP.style.color = "white";

})





// transAction part start here
let depositInput = document.querySelector("#deposit_input");
let withdrawAmount = document.querySelector("#withdraw_value");
let withdrawInput = document.querySelector("#withdraw_Amount");
let withdrawSubmit = document.querySelector("#withdraw_submit");
let balanceINput = document.querySelector("#balance_value");
let depositSubmit = document.querySelector("#deposit_submit");
let depositAmount = document.querySelector("#deposit_value");

let warnOfDeposit = document.querySelector("#depositP");

depositSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if(depositInput.value) {
        let depositValue = parseFloat(depositInput.value);
        let depositAmountValue = parseFloat(depositAmount.innerText);
        
        let finalDepositValue = depositValue+depositAmountValue;
        depositAmount.innerText = finalDepositValue;
        depositInput.value = "";
        balanceINput.innerText = finalDepositValue;

    } else {
        warnOfDeposit.style.color = "red";
        warnOfDeposit.style.fontWeight = "bolder";
    }
})

let withdrawP = document.querySelector("#withDrawP");


withdrawSubmit.addEventListener("click", (e)=> {
    e.preventDefault();
    
    if(withdrawInput.value) {
        if(withdrawInput.value>parseFloat(balanceINput.innerText)) {
            alert("please Enter The Valid Value");
            withdrawInput.value = "";

          } else{
            let withdrawInputValue = parseFloat(withdrawInput.value);
            let withdrawAmountValue = parseFloat(withdrawAmount.innerText);
            let finalWithdraWAmount = withdrawInputValue+withdrawAmountValue;
            withdrawAmount.innerText = finalWithdraWAmount;
            // let restAmount = parseFloat(balanceINput.innerText);
    
            let restAmount = parseFloat(balanceINput.innerText)-withdrawInputValue;
            balanceINput.innerText = restAmount;
            withdrawInput.value = "";
          } 
        }else{
            withdrawP.style.color = "red";
          }
 
     
})
