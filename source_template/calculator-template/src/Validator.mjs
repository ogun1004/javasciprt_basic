
// Number check
export function isNumber( number ) {
    return !isNaN(parseInt(number));
}

// Operation check
export function isOperation( operation ) {
    let operations = '+-*/=';
    return operations.indexOf (operation) !== -1; 
}

export default {
    isNumber,
    isOperation
}