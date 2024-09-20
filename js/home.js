document.getElementById('cash-in-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addmoney = getInputValueById('input-amount');
    const yourPinNumber = getInputValueById('your-pin-number');
    console.log(addmoney, yourPinNumber)
})