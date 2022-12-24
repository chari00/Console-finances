let finances = [
  ["Jan-2010", 867884],
  ["Feb-2010", 984655],
  ["Mar-2010", 322013],
  ["Apr-2010", -69417],
  ["May-2010", 310503],
  ["Jun-2010", 522857],
  ["Jul-2010", 1033096],
  ["Aug-2010", 604885],
  ["Sep-2010", -216386],
  ["Oct-2010", 477532],
  ["Nov-2010", 893810],
  ["Dec-2010", -80353],
  ["Jan-2011", 779806],
  ["Feb-2011", -335203],
  ["Mar-2011", 697845],
  ["Apr-2011", 793163],
  ["May-2011", 485070],
  ["Jun-2011", 584122],
  ["Jul-2011", 62729],
  ["Aug-2011", 668179],
  ["Sep-2011", 899906],
  ["Oct-2011", 834719],
  ["Nov-2011", 132003],
  ["Dec-2011", 309978],
  ["Jan-2012", -755566],
  ["Feb-2012", 1170593],
  ["Mar-2012", 252788],
  ["Apr-2012", 1151518],
  ["May-2012", 817256],
  ["Jun-2012", 570757],
  ["Jul-2012", 506702],
  ["Aug-2012", -1022534],
  ["Sep-2012", 475062],
  ["Oct-2012", 779976],
  ["Nov-2012", 144175],
  ["Dec-2012", 542494],
  ["Jan-2013", 359333],
  ["Feb-2013", 321469],
  ["Mar-2013", 67780],
  ["Apr-2013", 471435],
  ["May-2013", 565603],
  ["Jun-2013", 872480],
  ["Jul-2013", 789480],
  ["Aug-2013", 999942],
  ["Sep-2013", -1196225],
  ["Oct-2013", 268997],
  ["Nov-2013", -687986],
  ["Dec-2013", 1150461],
  ["Jan-2014", 682458],
  ["Feb-2014", 617856],
  ["Mar-2014", 824098],
  ["Apr-2014", 581943],
  ["May-2014", 132864],
  ["Jun-2014", 448062],
  ["Jul-2014", 689161],
  ["Aug-2014", 800701],
  ["Sep-2014", 1166643],
  ["Oct-2014", 947333],
  ["Nov-2014", 578668],
  ["Dec-2014", 988505],
  ["Jan-2015", 1139715],
  ["Feb-2015", 1029471],
  ["Mar-2015", 687533],
  ["Apr-2015", -524626],
  ["May-2015", 158620],
  ["Jun-2015", 87795],
  ["Jul-2015", 423389],
  ["Aug-2015", 840723],
  ["Sep-2015", 568529],
  ["Oct-2015", 332067],
  ["Nov-2015", 989499],
  ["Dec-2015", 778237],
  ["Jan-2016", 650000],
  ["Feb-2016", -1100387],
  ["Mar-2016", -174946],
  ["Apr-2016", 757143],
  ["May-2016", 445709],
  ["Jun-2016", 712961],
  ["Jul-2016", -1163797],
  ["Aug-2016", 569899],
  ["Sep-2016", 768450],
  ["Oct-2016", 102685],
  ["Nov-2016", 795914],
  ["Dec-2016", 60988],
  ["Jan-2017", 138230],
  ["Feb-2017", 671099],
];

// Your task is to write JavaScript code that analyzes the records to calculate each of the following:

// The total number of months included in the dataset.
// Count up how many things are in the array
// array.length
// Need a variable to store the value of array.length

let count = finances.length;
// console.log("Total Months: " + count);

// The net total amount of Profit / Losses over the entire period.
// Adding up the money
// Keep a rolling total
// Need a variable to store the rolling total
// for loop to iterate over the array

let monthlyDifferenceTotal = 0;
let difference = 0;
let greatestIncrease = 0;
let greatestDecrease = 0;
let currentAmount = 0;
let averageTotal = 0;
let greatestIncreaseMonth = "";
let greatestDecreaseMonth = "";

for (let i = 0; i < count; i++) {
  if (i !== 0) {
    difference = finances[i][1] - finances[i - 1][1];

    if (difference > greatestIncrease) {
      greatestIncrease = difference;
      greatestIncreaseMonth = finances[i][0];
    }

    if (difference < greatestDecrease) {
      greatestDecrease = difference;
      greatestDecreaseMonth = finances[i][0];
    }

    // console.log("Financesi1 " + finances[i][1]);
    // console.log("monthlyDifference = " + difference);
  }
  monthlyDifferenceTotal = monthlyDifferenceTotal + difference;
}

averageTotal = monthlyDifferenceTotal / (count - 1);
let numAverageTotal = averageTotal;
numAverageTotal = numAverageTotal.toFixed(2);

console.log("Total Months: " + count);
console.log("Total: " + monthlyDifferenceTotal);
console.log("Average Change: " + numAverageTotal);
console.log(
  "Greatest Increase: " + greatestIncreaseMonth + ": $" + greatestIncrease
);
console.log(
  "Greatest Decrease: " + greatestDecreaseMonth + ": $" + greatestDecrease
);

// Inside that for loop, access position 1 of each array element to get the numbers

// The average of the changes in Profit / Losses over the entire period.
// You will need to track what the total change in profits are from month to month and then find the average.
// (Total / Number of months)

// The greatest increase in profits(date and amount) over the entire period.

// The greatest decrease in losses(date and amount) over the entire period.

// Total up the differences between each pair of adjoining months & divide by number of array elements
// for loop starting with i = 1
// Each iteration, subtract the data at position [1] of the previous element from the data at position [1] of the current element
// Put that data into a new array variable
// So, we need to arr.push() each new 'change' value to the new array
// Need a variable to store greatest amount of change (+)
// Need a variable to store greatest amount of change (-)
// Each iteration, compare the difference to the previous difference
// If it's higher than what's already stored in greatest-profit variable, reassign that variable to equal finances[i]
// greatest[0] = finances[i][0]
// greatest[1] = changeArr[i-1]
// If it's lower than what's already stored in greatest-loss variable, reassign that variable to equal finances[i]

// Add up the total in the new 'changes' array
// Need a variable to store the rolling total for this array that's different that the rolling total of profits
// for loop to iterate over the changes array
// add each element in turn to the rolling total

// Take that 'total changes amount' variable and divide it by the number of elements in the array
// Look up how to limit the answer to two decimal points

// Sample decrementing for loop
// for (let i = finances.length - 1; i < 0; i--) {}

// let totalSum = Total.length;
// console.log("Total: " + totalSum);

//let (finances.length) = "Total Months";
//console.log("Total Months: ");

//count = finances.length; //total months
//averagechange = 0; // average amount per month
//greatestincrease = 0;

//for (let i = 0; i < finances.length; i++) {
//const element = finances[i];

//if ("i" % 2) 0;
//{
// check if numbers are 0,2, indexes or 1,3,5

// if (finances[i] > greatestincrease) {
//  greatestincrease = finances[i];
//  }

//  greatestdecrease = finances[i[0]];
//    if (finances[i] < greatestdecrease) {
//    greatestdecrease = finances[i];
//}

// this is the number
//average = average + finances[i];

//if (i != 0) {
// check index is odd or even and then adjust to 1 if needed instead of 0
//averagechange = finances[i] - finances[i - 2];
//} else {
//}
//}
// this is the year

//total = total + finances.values(increaseInProfit);
//}

//Total Months: 86
//Total: $38_382_578
//Average  Change: $-
//Greatest Increase in Profits: Feb-2012 ($1_170_593)
//Greatest Decrease in Profits: Sep-2013 ($-1_196_225)

//total number of months included in the dataset.
//let totalNumberOfMonth = finances.length;

//net total amount of Profit/Losses over the entire period.
//let totalProfit;

//net total amount of Profit/Losses over the entire period.
//let totalLosses;

// average of the changes in Profit/Losses over the entire period.
//let averageChangeInProfit;

// average of the changes in Profit/Losses over the entire period.
//let averageChangeInLoss;

//greatest increase in profits (date and amount) over the entire period.
//let increaseInProfit;

//greatest decrease in losses (date and amount) over the entire period.
//let decreaseInProfit;

//for (let i = 0; i < finances.length; i++) {
//  const finance = finances[i];
//}
//console.log(finances.length);
