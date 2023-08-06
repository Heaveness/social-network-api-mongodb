// This function prepends a '0' to numbers less than 10.
const addZero = (i) => (i < 10 ? '0' : '') + i;

// This function formats a date/time string into a specific format.
const dateFormat = (date) => {
  // Create a new Date object from the input date.
  const d = new Date(date),
  
    // Get the month, day, and year from the Date object.
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear(),
    
    // Get the hour, minutes, and seconds from the Date object.
    hour = d.getHours(),
    minutes = d.getMinutes(),
    seconds = d.getSeconds();

  // Return a formatted string "YYYY-MM-DD HH:mm:ss".
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

// Export the dateFormat function.
module.exports = dateFormat;
