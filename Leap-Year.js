function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 2087;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is my year leap year', isMyYearLeapYear);


const yourYear = 2224;
const isYourYearLeaper = isLeapYear(yourYear);
console.log('my year tumi k othy aco', isYourYearLeaper);