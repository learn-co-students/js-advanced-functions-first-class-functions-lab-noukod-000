// const returnFirstTwoDrivers = function(array) {
//     return array.slice(0, 2);
// };

// const returnLastTwoDrivers = function(array) {
//     return array.slice(-2);
// };

// const selectingDrivers = [
//     returnFirstTwoDrivers, returnLastTwoDrivers
// ];

// const createFareMultiplier = function(int) {
//     return function(arg) {
//         return int * arg;
//     };
// };

// const fareDoubler = createFareMultiplier(2);

// const fareTripler = createFareMultiplier(3);

// function fetchSpecifiedDrivers(driverArray, fn) {
//     return fn(driverArray);
// }



const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

function createFareMultiplier(number){
    return function (fare){return number * fare};
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, cb){
    return cb(drivers);
}
