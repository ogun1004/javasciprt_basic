import { question } from 'readline-sync';
import calculator from './Calculator.mjs';

function showPrompt() {
    while(true) {
        let inputData = question ('Enter number or operator :');
        if(inputData !== '=') {
            calculator.appendData (inputData );
            console.log(calculator.getInputDatasMessage());
        }else {
            console.log(calculator.getInputDatasMessage() + '=' + parseInt(calculator.calculate()));
            break;
        }
    }
}

showPrompt();
