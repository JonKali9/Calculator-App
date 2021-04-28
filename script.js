//Initial Variables
const screen = document.getElementById('screen');
const operations = '+-*/';

//Functions for the Calculator
const clearScreen = () => {
    screen.value = '';
}
const addToScreen = value => {
    const lastValue = screen.value[screen.value.length-1];
    //User selected an operator
    if (operations.includes(value)) {
        if (!operations.includes(lastValue)) {
            screen.value += value;
        }
    //User didn't select an operator
    } else {
        screen.value += value;
    }
}
const setScreen = value => {
    screen.value = value;
}
const executeScreen = () => {
    const result = eval(screen.value)
    setScreen(result);
}

//Program
clearScreen();