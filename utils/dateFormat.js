const addZero = (i) => (i < 10 ? '0' : '') + i;

const dateFormat = (date) => {
  const d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear(),
    hour = d.getHours(),
    minutes = d.getMinutes(),
    seconds = d.getSeconds();

  return [
    year,
    addZero(month),
    addZero(day)
  ].join('-') + ' ' + [
    addZero(hour),
    addZero(minutes),
    addZero(seconds)
  ].join(':');
};

module.exports = dateFormat;