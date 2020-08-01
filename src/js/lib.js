//Private members
const pi = 3.1459;

//Public members
export function sum(...numbers) {
    return numbers.reduce((number,total)=>total+number);
}

export function mult(...numbers) {
    return numbers.reduce((number,total)=>total*number);
}

// CustomJs de module.exports = { sum,mult };

// ES6 Module de with export 
