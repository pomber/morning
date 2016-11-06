(function(window) {
  'use strict';  
  var self = window.Utils = window.Utils || {   

    getDayInfo: function(ts) {
      if (!ts) {
        return;
      }
      
      var date = new Date(ts);
      return {
        hourstring: self.getHourString(date),
        daystring: self.getShortDateString(date),
        minutes: self.getMinutesCount(date),
        timestamp: ts,
      };
    },

    getHourString: function(date) {
      return date.toTimeString().split(' ')[0].slice(0, 5);
    },

    getShortDateString: function(date) {
      return date.toLocaleDateString('en-US', {weekday:'short'});
    },

    getMinutesCount: function(date) {
      return date.getHours() * 60 + date.getMinutes();
    },

  };
})(window);
