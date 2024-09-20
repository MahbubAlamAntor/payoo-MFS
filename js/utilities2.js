function getInputValue (id){
    const inputNumber = document.getElementById(id).value;
    const inputNumbers = parseFloat(inputNumber);
    return inputNumbers;
}

function getInputInner (id){
    const inputInner = document.getElementById(id).innerText;
    const inputInnerValue = parseFloat(inputInner);
    return inputInnerValue;
}

function showButtonGet (id){
    document.getElementById('show-cash-in').classList.add('hidden');
    document.getElementById('show-cash-out').classList.add('hidden');
    document.getElementById('transction-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}