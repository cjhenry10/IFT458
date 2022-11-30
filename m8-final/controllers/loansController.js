// Connor Henry
// 11/29/2022
// methods of working with loans
const Loans = require('./../models/loansModel');
const APIFeatures = require('./../databaseManager/loanDbContext');
const convertDate = require('../utilities/convertDate');

// get all loans from database
exports.getAllLoans = async (req, res) => {
    try {
        // EXECUTE QUERY
        const features = new APIFeatures(Loans.find(), req.query)
          .filter()
          .sort()
          .limitFields()
          .paginate();
        const loans = await features.query;

        loans.forEach((loan) => {
            loan.loanStartDateString = convertDate(loan.loanStartDate);
        })
    
        // SEND RESPONSE
        res.status(200).render('allLoans', {
            loans: loans
        });
        // console.log(loans)
      } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err
        });
      }
};

// render form to create a loan
exports.getCreateLoanForm = (req, res) => {
    res.status(200).render('newLoan', {
      title: 'New Loan'
    })
  }

  // create a loan and save to database
exports.createLoan = async (req, res) => {
    try {
        // const newCourse = new Course({})
        // newCourse.save()
    
        const newLoan = await Loans.create(req.body);
    
        res.status(201).render('loanView', {
          loan: newLoan
        });
      } catch (err) {
        res.status(400).json({
          status: 'fail',
          message: err
        });
      }
};

// get a single loan based on the loanNumber
exports.getLoan = async (req, res) => {
  try {
      // const loan = await Loans.findById(req.params.id);
      // Course.findOne({ _id: req.params.id })
      console.log(req.params);
      
      const loan = await Loans.findOne({ loanNumber: req.params.loanNumber });
      loan.loanStartDateString = convertDate(loan.loanStartDate);
  
      res.status(200).render('loanView', {
        loan: loan
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
};