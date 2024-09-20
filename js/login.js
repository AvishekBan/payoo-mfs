// console.log("i am hungry")
// step-1 set event handler
document.getElementById("button-login").addEventListener("click", function(event){
    //step-2 prevent default behavior(prevent browser loading) 
    event.preventDefault(); 
    // console.log('login button click');
    // step-3 get the phone number
const phoneNumber = document.getElementById('phone-number').value;

    // step-3 get the pin 
const pinNumber = document.getElementById('pin-code').value;
console.log(phoneNumber, pinNumber);

//step-4 validate phone and pin
// this is temporary
if(phoneNumber === "01" && pinNumber === '1234'){
    console.log('yon are logged in');
    window.location.href = './home.html';
}
else{
    alert('wrong phone number or pin');
}
})