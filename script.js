//your code here
let input = document.getElementById("input");

function addToInput(value) {
    input.value += value;
}

function calculate() {
    try {
        input.value = eval(input.value);
        if (input.value === Infinity) {
            input.value = "Infinity";
        } else if (isNaN(input.value)) {
            input.value = "NaN";
        }
    } catch (error) {
        input.value = "Error";
    }
}

function clearInput() {
    input.value = "";
}
