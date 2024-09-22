// add money to the account

// step-1 add an event handler to the add money button
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent auto reload 
   event.preventDefault();
   
    // step-2 get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    
    // get the pin number provided

    const addPinNumberInput = document.getElementById('input-pin-number').value;
    console.log(addMoneyInput,addPinNumberInput);
});