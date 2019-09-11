// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray){
  return driversArray.slice(0,2);
};

const returnLastTwoDrivers = function(driversArray){
  return driversArray.slice(-2);
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

const createFareMultiplier = function(far){
  return function(val){
    return far * val
  }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, func){
  return func(arrayOfDrivers);
}
