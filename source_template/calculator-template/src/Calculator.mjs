
// 각각 함수에 export를 쓸경우 가져오는 방법
// import { isNumber, isOperation } from './Validator.mjs';
// export default 로 선언했을 때 가져오는 방법
import validator from './Validator.mjs'

let inputDatas = [];

function appendData(inputData) {
    inputDatas.push(inputData);
}

function getInputDatasMessage() { 
    let msg = '';
    inputDatas.map(value => msg += value);
    return msg;
}

function calculate() {
    let result = parseInt(inputDatas[0]);
    let curVal = 0;
    let curOp ='';
    let prevOp = '';

    inputDatas.map(val => {
        if (validator.isNumber(val)) {
            curVal = parseInt(val);
        } else if (validator.isOperation(val)){
            curOp = val;
        }

        switch (prevOp) {
            case '+' : result += parseInt(curVal); break;
            case '-' : result -= parseInt(curVal); break;
            case '*' : result *= parseInt(curVal); break;
            case '/' : result /= parseInt(curVal); break;
            default : break;
        }

        prevOp = curOp;
        curOp = '';
        console.log(result)
    });
    return result;
}

export default {
    appendData,
    getInputDatasMessage,
    calculate
}