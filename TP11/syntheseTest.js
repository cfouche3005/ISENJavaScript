import {isLeap,getNbDays,getDayInWeek,buildCalendar} from "./synthese.js";

function isLeapTest() {
    console.log(isLeap(2016));
    console.log(isLeap(2022));
    console.log(isLeap(2100));
}

function getNbDaysTests() {
    console.log(getNbDays(2022,1));
    console.log(getNbDays(2022,2));
    console.log(getNbDays(2022,3));
    console.log(getNbDays(2022,4));
    // années bissextiles
    console.log(getNbDays(2016,2));
    console.log(getNbDays(2020,2));

}

function buildCalendarTest() {
    buildCalendar()
}

function getDayInWeekTest(){
    console.log(getDayInWeek(2022, 4, 25));
    console.log(getDayInWeek(1989, 11, 9));
    console.log(getDayInWeek(1969, 7, 20));
    console.log(getDayInWeek(1945, 5, 8));

}

export {isLeapTest,getNbDaysTests,getDayInWeekTest}