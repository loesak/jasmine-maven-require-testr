define([], function() {
  return {
    format: function(pattern, value) {
    	return pattern.replace(/%d/, value);
    }
  }
});