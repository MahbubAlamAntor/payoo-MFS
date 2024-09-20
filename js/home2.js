document.getElementById('cash-in-btn').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = getInputValue('input-amount');
    const cashInPin = getInputValue('your-pin-number');
    if(cashInPin === 1234){
        const accountBalance = getInputInner('account-balance');
        
        const newBalance = accountBalance + inputAmount;

        document.getElementById('account-balance').innerText = newBalance;
    }else{
        alert('oi mama na pls');
    }
})

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutAmount = getInputValue('cash-out-amount');
    const cashOutPin = getInputValue('enter-pin-number');

    if(cashOutPin === 1234){
        const accountMainBalance = getInputInner('account-balance');
        
        const accountNewBalance = accountMainBalance - cashOutAmount;

        document.getElementById('account-balance').innerText = accountNewBalance;
    }else{
        alert('oi mama na pls');
    }
})