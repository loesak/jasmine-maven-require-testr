define(['string', 'util.date'], function(string, date) {
  return {
    getDateString: function() {
      return string.format('Today is %d', date.today);
    }
  }
});