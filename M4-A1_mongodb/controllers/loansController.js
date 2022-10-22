const Loans = require('./../models/loansModel');
const APIFeatures = require('./../databaseManager/loanDbContext');

exports.getAllLoans = async (req, res) => {
    try {
        // EXECUTE QUERY
        const features = new APIFeatures(Loans.find(), req.query)
          .filter()
          .sort()
          .limitFields()
          .paginate();
        const loans = await features.query;
    
        // SEND RESPONSE
        res.status(200).json({
          status: 'success',
          results: loans.length,
          data: {
            loans
          }
        });
      } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err
        });
      }
};

exports.getLoan = async (req, res) => {
    try {
        const loan = await Loans.findById(req.params.id);
        // Course.findOne({ _id: req.params.id })
        
        // const loan = await Loan.findOne({ id: req.params.id });
    
        res.status(200).json({
          status: 'success',
          data: {
            loan
          }
        });
      } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err
        });
      }
};

exports.createLoan = async (req, res) => {
    try {
        // const newCourse = new Course({})
        // newCourse.save()
    
        const newLoan = await Loans.create(req.body);
    
        res.status(201).json({
          status: 'success',
          data: {
            course: newLoan
          }
        });
      } catch (err) {
        res.status(400).json({
          status: 'fail',
          message: err
        });
      }
};

exports.updateLoan = async (req, res) => {
    try {
        const loan = await Loans.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true
        });
    
        res.status(200).json({
          status: 'success',
          data: {
            loan
          }
        });
      } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err
        });
      }
};

exports.deleteLoan = async (req, res) => {
  try {
    await Loans.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
