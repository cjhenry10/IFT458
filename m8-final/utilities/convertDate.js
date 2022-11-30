// Connor Henry
// 11/29/2022
// converts mongoDB dates to more recognizable dates
const convertDate = (date) => {
    const jsDate = new Date(date);
    const newDate = jsDate.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    //   hour: 'numeric',
    //   minute: '2-digit',
    });

    return newDate;
    
  };

module.exports = convertDate;