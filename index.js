// Code your solution in this file!
const returnFirstTwoDrivers=function(array){
  return [array[0],array[1]]
}

const returnLastTwoDrivers=function(array){
  return array.slice(-2);
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier=function(n){
  return function(fare){
    return fare*n;
  }
}

const fareDoubler=createFareMultiplier(2)
const fareTripler=createFareMultiplier(3)

const selectDifferentDrivers=function(drivers,func){
   return func(drivers)
}
