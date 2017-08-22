/*
How to use this script:
1. Add a hidden form field for each query string parameter you’d like to capture.
   The field’s name should match the key of the query string parameter.
2. Include the script on the page(s) where you’d like to use it, and activate it in your JavaScript:
   queryForm({reset: true});
   The value {reset: true} is optional. Including it will clear (reset) parameter values after a form is submitted.
*/

var queryForm = function(settings){
  var reset = settings && settings.reset ? settings.reset : false;
  var self = window.location.toString();
  var querystring = self.split("?");
  if (querystring.length > 1) {
    var pairs = querystring[1].split("&");
    for (i in pairs) {
      var keyval = pairs[i].split("=");
      if (reset || sessionStorage.getItem(keyval[0]) === null) {
        sessionStorage.setItem(keyval[0], keyval[1]);
      }
    }
  }
  var hiddenFields = document.querySelectorAll("input[type=hidden]");
  for (var i=0; i<hiddenFields.length; i++) {
    var param = sessionStorage.getItem(hiddenFields[i].name);
    if (param) document.getElementsByName(hiddenFields[i].name)[0].value = param;
  }
}
