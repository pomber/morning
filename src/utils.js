(function(window) {
  'use strict';  
  var self = window.Utils = window.Utils || {  

    /**
     * Get last seven days including today.
     * Assumes that log array is sorted asc.
     */
    getLastWeek: function(now, log) {
      var today = new Date(now);
      var lastSeven = log.slice(-7);
      var days = [];
      for (var i = -6; i <= 0; i++) {        
        var day = new Date(today);
        day.setDate(today.getDate() + i);
        days.push(day);
      }

      return days.map(function(day) {
        var logTime = lastSeven.find(function(logTime) {
          var itemDate = new Date(logTime);
          return itemDate.toDateString() == day.toDateString();
        });

        if (!logTime) {
          return {
            daystring: self.getShortDateString(day)
          };
        }

        return self.getDayInfo(logTime);
      });
    },

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
