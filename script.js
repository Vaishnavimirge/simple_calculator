let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function ClearDisplay() {
    display.value = "";

}

function calculateResult() {
    try {
        display.value = eval(display.value);

    }catch(error) {
        alert("Invalid calculation")
        clearDisplay();
    }
}