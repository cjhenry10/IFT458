const loanCalc = (loan) => {
    // compound interest formula FV = PV(1 + i)^N
    // assume monthly payments
    let PV = loan.loanAmount;
    let N = loan.loanTermYears * 12;
    let i = (loan.interest / 12) / 100;
    let FV = PV*Math.pow(1 + i, N);
    // round to 2 decimal places
    return FV.toFixed(2);
}

module.exports = (htmlStr, loan) => {
    let output = htmlStr.replace(/{%NAME%}/g, loan.customerName);
    output = output.replace(/{%ADDRESS%}/g, loan.address);
    output = output.replace(/{%PHONE%}/g, loan.phoneNumber);
    output = output.replace(/{%TYPE%}/g, loan.loanType);
    output = output.replace(/{%AMOUNT%}/g, loan.loanAmount);
    output = output.replace(/{%INTEREST%}/g, loan.interest);
    output = output.replace(/{%YEARS%}/g, loan.loanTermYears);
    output = output.replace(/{%TOTAL%}/g, loanCalc(loan));
    output = output.replace(/{%ID%}/g, loan.id);
    return output;
}

// let result = {
//     "customerName": "John Doe",
//     result: () => {
//         return 1 + 1;
//     }
// }