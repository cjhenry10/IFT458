const loans = [
  {
    id: 0,
    customerName: 'John Doe',
    phoneNumber: '1234567890',
    address: '1230 main st',
    loanAmount: 5000,
    interest: 5,
    loanTermYears: 10,
    loanType: 'Education',
    description: 'education loan',
    calculateLoan: function () {
      // one compound interest formula FV = PV(1 + i)^N
      // assuming monthly payments
      let PV = this.loanAmount;
      let N = this.loanTermYears * 12;
      let i = this.interest / 12 / 100;
      let FV = PV * Math.pow(1 + i, N);
      // round to 2 decimal places
      return FV.toFixed(2);
    },
  },
  {
    id: 1,
    customerName: 'John Smith',
    phoneNumber: '1234567891',
    address: '1231 main st',
    loanAmount: 12000,
    interest: 11,
    loanTermYears: 30,
    loanType: 'Education',
    description: 'education loan',
    calculateLoan: function () {
      // one compound interest formula FV = PV(1 + i)^N
      // assuming monthly payments
      let PV = this.loanAmount;
      let N = this.loanTermYears * 12;
      let i = this.interest / 12 / 100;
      let FV = PV * Math.pow(1 + i, N);
      // round to 2 decimal places
      return FV.toFixed(2);
    },
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    phoneNumber: '1234567892',
    address: '1232 main st',
    loanAmount: 25000,
    interest: 15,
    loanTermYears: 10,
    loanType: 'Auto',
    description: 'Auto loan',
    calculateLoan: function () {
      // one compound interest formula FV = PV(1 + i)^N
      // assuming monthly payments
      let PV = this.loanAmount;
      let N = this.loanTermYears * 12;
      let i = this.interest / 12 / 100;
      let FV = PV * Math.pow(1 + i, N);
      // round to 2 decimal places
      return FV.toFixed(2);
    },
  },
  {
    id: 3,
    customerName: 'Jane Doe',
    phoneNumber: '1234567893',
    address: '1233 main st',
    loanAmount: 30000,
    interest: 13,
    loanTermYears: 15,
    loanType: 'Auto',
    description: 'Auto loan',
    calculateLoan: function () {
      // one compound interest formula FV = PV(1 + i)^N
      // assuming monthly payments
      let PV = this.loanAmount;
      let N = this.loanTermYears * 12;
      let i = this.interest / 12 / 100;
      let FV = PV * Math.pow(1 + i, N);
      // round to 2 decimal places
      return FV.toFixed(2);
    },
  },
  {
    id: 4,
    customerName: 'Rob Smith',
    phoneNumber: '1234567894',
    address: '1234 main st',
    loanAmount: 500000,
    interest: 10,
    loanTermYears: 30,
    loanType: 'Home',
    description: 'home loan',
    calculateLoan: function () {
      // one compound interest formula FV = PV(1 + i)^N
      // assuming monthly payments
      let PV = this.loanAmount;
      let N = this.loanTermYears * 12;
      let i = this.interest / 12 / 100;
      let FV = PV * Math.pow(1 + i, N);
      // round to 2 decimal places
      return FV.toFixed(2);
    },
  },
];

// loop through each loan of the loans array
for (loan of loans) {
    console.log(`Initial amount: ${loan.loanAmount}     Total due with interest: ${loan.calculateLoan()}`);
}

