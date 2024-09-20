// cash in function section 

document.getElementById('cash-in-btn').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = getInputValue('input-amount');
    const cashInPin = getInputValue('your-pin-number');
    if(cashInPin === 1234){
        const accountBalance = getInputInner('account-balance');
        
        const newBalance = accountBalance + inputAmount;

        document.getElementById('account-balance').innerText = newBalance;

        // const p = document.createElement('p');
        // p.innerText = `Add Money: ${inputAmount} Tk..... New Balance: ${newBalance} Tk.`

        // document.getElementById('transction-container').appendChild(p);
    }else{
        alert('oi mama na pls');
    }
})

// cash out function section 

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutAmount = getInputValue('cash-out-amount');
    const cashOutPin = getInputValue('enter-pin-number');

    if(cashOutPin === 1234){
        const accountMainBalance = getInputInner('account-balance');
        
        const accountNewBalance = accountMainBalance - cashOutAmount;

        document.getElementById('account-balance').innerText = accountNewBalance;

        // const p = document.createElement('p');
        // p.innerText = `Cash Out: ${cashOutAmount} Tk..... New Balance: ${accountNewBalance} Tk.`

        // document.getElementById('transction-container').appendChild(p);
    }else{
        alert('oi mama na pls');
    }
})


// transtion history 
