const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const chkButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");


function checkIfLucky (){
 const dob = dateOfBirth.value;
 const sum = calculateSum(dob);
 if (sum&&dob)
 compareValues(sum, luckyNumber.value)
 else 
 outputBox.innerText = "Please enter both the fields.😐";
}

function compareValues(sum, luckyNumber){
    if (sum%luckyNumber === 0){
        outputBox.value="YAY! your birthday is lucky.😀";
     } else{
         outputBox.value="Your birthday is not lucky.🙃";
     }
}

function calculateSum (dob) {
    dob = dob.replaceAll("-", "")
    let sum = 0 ;
    for(let index = 0; index < dob.length; index++){
        sum = sum + Number(dob.charAt(index));
    }

    return sum;
}


chkButton.addEventListener ('click', checkIfLucky)

alert("Your data would not be stored.");