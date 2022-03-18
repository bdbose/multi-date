const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const format = (date, str, non = true) => {
  const day = new Date(date).getDay();
  const n = new Date(date).getDate();
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear().toString();
  let sym;
  if (str.includes('-')) {
    sym = '-';
  } else if (str.includes('/')) {
    sym = '/';
  } else {
    throw 'Symbol - / is missing from the string!';
  }
  const res = str.split(sym).map((ele) => {
    switch (ele) {
      case 'DD':
        return n < 10 && non ? '0' + n : n;
      case 'MM':
        return month + 1 < 10 && non ? '0' + parseInt(month + 1) : month + 1;
      case 'YY':
        return year.slice(year.length - 2, year.length);
      case 'YYYY':
        return year;
    }
  });
  return res.join(sym);
};

const compareDates = (date1, date2) => {
  if (new Date(date1).toDateString() === new Date(date2).toDateString()) {
    return 0;
  }
  if (new Date(date1) < new Date(date2)) return 1;
  return -1;
};

const customDates = (date, counter, type = 'day') => {
  const currentDate = new Date(date);
  let change;
  switch (type) {
    case 'day':
      change = currentDate.setDate(currentDate.getDate() + counter);
      break;
    case 'month':
      change = currentDate.setMonth(currentDate.getMonth() + counter);
      break;
    case 'year':
      change = currentDate.setFullYear(currentDate.getFullYear() + counter);
      break;
  }
  return new Date(change);
};

const inBetweenDates = (date1, date2, type = 'days') => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const c = Math.abs(d1 - d2);
  switch (type) {
    case 'days':
      return c / (60 * 1000 * 24 * 60);
    case 'hours':
      return c / (60 * 1000 * 60);
    case 'minutes':
      return c / (60 * 1000);
  }
};

module.exports = {
  format,
  compareDates,
  customDates,
  inBetweenDates,
};
