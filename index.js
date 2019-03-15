// Code your solution in this file!
const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers) {
  let ArrayfirstTwoDrivers = [];
  ArrayfirstTwoDrivers.push(drivers[0]);
  ArrayfirstTwoDrivers.push(drivers[1]);
  return ArrayfirstTwoDrivers;
};

const returnLastTwoDrivers = function returnLastTwoDrivers(drivers) {
    let ArraylastTwoDriver = []
    ArraylastTwoDriver.push(drivers[drivers.length-2]);
    ArraylastTwoDriver.push(drivers[drivers.length-1]);
    return ArraylastTwoDriver;
};

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  function createFareMultiplier(num) {
   return function createFareMultiplier(fare) {
     return fare*num;
   };
};

 function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
};

function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
  };
  
   function selectDifferentDrivers(array, func) {
    return func(array);
  };
