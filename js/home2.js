// cash in function section 

document.getElementById('cash-in-btn').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = getInputValue('input-amount');
    const cashInPin = getInputValue('your-pin-number');

    // number condition check 
    if(isNaN(inputAmount)){
        alert('Please Input valid Number');
        return;
    }

    // pin number condition
    if(cashInPin === 1234){
        const accountBalance = getInputInner('account-balance');
        
        const newBalance = accountBalance + inputAmount;

        document.getElementById('account-balance').innerText = newBalance;

        // transaction section started

        const p = document.createElement('p');
        p.innerText = `Add Money: ${inputAmount} Tk..... New Balance: ${newBalance} Tk.`

        document.getElementById('transction-container').appendChild(p);

        // input empty 
        document.getElementById('input-amount').value = '';
        document.getElementById('your-pin-number').value = '';
    }else{
        alert('oi mama na pls');
    }
})



// cash out function section 

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutAmount = getInputValue('cash-out-amount');
    const cashOutPin = getInputValue('enter-pin-number');

    if(isNaN(cashOutAmount)){
        alert('Please Input Valid Number');
        return;
    }
    if(cashOutPin === 1234){
        const accountMainBalance = getInputInner('account-balance');

        if(cashOutAmount >accountMainBalance){
            alert("Your Balance Low")
            return;
        }
        const accountNewBalance = accountMainBalance - cashOutAmount;

        document.getElementById('account-balance').innerText = accountNewBalance;

        // transaction section started
        const div = document.createElement('div');
        div.classList.add('bg-yellow-200');
        div.innerHTML = `
            <h3>Cash Out Amount</h3>
            <p>${cashOutAmount}tk.. New Balance ${accountNewBalance}</p>
        `
        document.getElementById('transction-container').appendChild(div);

        // input empty
        document.getElementById('cash-out-amount').value = '';
        document.getElementById('enter-pin-number').value = '';

    }else{
        alert('oi mama na pls');
    }
})


// transtion history 
