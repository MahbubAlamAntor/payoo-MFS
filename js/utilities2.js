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