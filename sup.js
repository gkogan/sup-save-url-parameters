/*
1. Add a hidden form field for each URL parameter you’d like to capture.
   The field’s name should match the key of the URL parameter.
2. Include the script on the page(s) where you’d like to use it.
   Change queryForm() to queryForm({reset: true}) to reset values upon form submisision.
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
        sessionStorage.setItem(keyval[0], decodeURIComponent(keyval[1]));
      }
    }
  }
  var hiddenFields = document.querySelectorAll("input[type=hidden], input[type=text]");
  for (var i=0; i<hiddenFields.length; i++) {
    var param = sessionStorage.getItem(hiddenFields[i].name);
    if (param) document.getElementsByName(hiddenFields[i].name)[0].value = param;
  }
}

setTimeout(function(){queryForm();}, 3000);