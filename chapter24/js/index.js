const moment = require("moment");


const getYearsPassed = (year, month, day) => `${moment().subtract(year, "years").subtract(month, "months").subtract(day, "days").format("YY")} years ago`

console.log(getYearsPassed(1976, "April", 26 ));

