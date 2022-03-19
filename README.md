## Multi-Date a all in one Dates Library for Javascript.

Multi-date have various functions to make your date handling easy. Please star the repo https://github.com/bdbose/multi-date

## Install

```bash

npm install --save multi-date


```

#### Import

```jsx
import { formate, customDates } from 'multi-date';
// or
const { format } = require('multi-date');
```

### Doc

`format` Format date to any string format eg. 'DD-MM-YYYY','DD/MM/YYYY'

```jsx
const { format } = require('multi-date');

const d1 = format(new Date(), 'DD-MM-YYYY');
const d2 = format(new Date(), 'MM-DD-YYYY');
const d3 = format(new Date(), 'YYYY/MM/DD');
const d4 = format(new Date(), 'DD-MM');

console.log(d1); //  19-03-2022
console.log(d2); //  03-19-2022
console.log(d3); //  2022/03/19
console.log(d4); //  19-03
```

`customDates` Add or Substract number of days, month or year

```jsx
const { customDates } = require('multi-date');

const date1 = customDates(new Date(), 5, 'month');
const date2 = customDates('2022-10-31', 5, 'year');
const date3 = customDates('2016-04-15', -12, 'day');

const res1 = format(date1, 'DD-MM-YYYY');
const res2 = format(date2, 'DD-MM-YYYY');
const res3 = format(date3, 'DD-MM-YYYY');

console.log(res1); //  19-08-2022
console.log(res2); //  31-10-2027
console.log(res3); //  03-04-2016
```

`inBetweenDates` Calculate number of days,hours or minutes betweeen two dates

```jsx
const { inBetweenDates } = require('multi-date');

const diff = inBetweenDates('2022-10-10', '2022-10-15');
const diff1 = inBetweenDates('2022-10-10', '2022-10-15', 'minutes');
const diff2 = inBetweenDates('2022-10-10', '2022-10-15', 'hours');

console.log(diff, 'Days'); //  5 Days
console.log(diff1, 'Minutes'); //  7200 Minutes
console.log(diff2, 'Hours'); //  120 Hours
```

`compareDates` Comparing two dates

```jsx
const { compareDates } = require('multi-date');

const c = compareDates('2022-10-10', new Date());
const c1 = compareDates(new Date(), new Date());
const c2 = compareDates('2020-10-10', '2022-10-10');

console.log(c); // -1 date2 is less than date1
console.log(c1); // 0 both dates are equal
console.log(c2); // 1 date2 is greater than date1
```
