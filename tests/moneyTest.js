import { formatCurrency } from "../utils/money.js";

console.log('all about testing format currency')
console.log('cents to dollars')

if (formatCurrency(2095) === '20.95') {
    console.log("passed")
} else {
    console.log('failed')
}

console.log('testing w 0')
if (formatCurrency(0) === '0.00') {
    console.log("passed")
} else {
    console.log('failed')
}
console.log('testing w 0.5-0.4')
if (formatCurrency(2000.5) === '20.01') {
    console.log("passed")
} else {
    console.log('failed')
}

if (formatCurrency(2000.4) === '20.00') {
    console.log("passed")
} else {
    console.log('failed')
}




