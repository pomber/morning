(function(window) {
  'use strict';  
  window.Utils = window.Utils || {

    getDayInfo: function(ts) {
      var date = new Date(ts);
      var hourstring = date.toTimeString().split(" ")[0].slice(0, 5);
      var daystring = date.toLocaleDateString('en-US', {weekday:'short'});
      var minutes = date.getHours() * 60 + date.getMinutes();
      return {
        hourstring: hourstring,
        daystring: daystring,
        minutes: minutes,
        timestamp: ts,
      };
    }

  };
})(window);
