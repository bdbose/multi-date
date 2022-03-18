const {
  format,
  compareDates,
  customDates,
  inBetweenDates,
} = require('./index');

const res = format(new Date(), 'DD-MM-YYYY', false);
const res1 = format(new Date(), 'YY/MM/DD');

console.log(res);
console.log(res1);

console.log(compareDates('2022-08-10', '2022-10-10'));

const res3 = customDates(new Date(), 3, 'month');
console.log(format(res3, 'DD-MM-YYYY'));

const calc = inBetweenDates(new Date(), customDates(new Date(), 4), 'hours');
console.log(calc);
