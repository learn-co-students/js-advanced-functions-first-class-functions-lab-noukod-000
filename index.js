const returnFirstTwoDrivers = function (drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers ,
  returnLastTwoDrivers ];

  function createFareMultiplier(number){
      return function (fare){return number * fare};
  }

  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);

  function selectDifferentDrivers(drivers, cb){
      return cb(drivers);
  }
