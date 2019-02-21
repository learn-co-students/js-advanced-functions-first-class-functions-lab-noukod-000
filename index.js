// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
  };

  const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(drivers.length-2);
  };

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  const createFareMultiplier = (fare) => {
    return function (value) {
      return fare * value;
    };
  };

  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);

  // const DifferentDrivers = function(drivers, selection) {
    function selectDifferentDrivers(drivers, selection){
        return selection(drivers);
      }
