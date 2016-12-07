(function() {
  var getMess = function() { return document.getElementsByClassName("date-top")[0];};
  var mess = "Adding assignments, please don't touch the page!";
  if (getMess().innerHTML.substring(0, 6) === 'Adding') return;
  getMess().innerHTML = mess;

  console.log("running!");
  var clickArrow = function() {document.getElementsByClassName("goog-inline-block goog-imageless-button")[9].click();}
  var focusQuickAddBar = function() {
    q = document.getElementsByTagName("textarea")[0];
    q.focus();
    return q;
  }
  var clickAddButton = function() {document.getElementsByClassName("goog-imageless-button-content")[9].click();}

  // Get the data out of the clipboard (lol)
  clickArrow();
  q = focusQuickAddBar();
  document.execCommand('paste');
  data = JSON.parse(q.value);
  q.value='';
  clickAddButton();
  console.log(data);

  var oneRun = function(ass) {
    getMess().innerHTML = "Adding " + ass.title + " at " + ass.due;
    if (ass.title && ass.due) {
      clickArrow();
      focusQuickAddBar().value = ass.title + ' at ' + ass.due;
      clickAddButton();
    }
  }

  var delay = 1500;
  for (var i = 0; i < data.length; i++) {
    (function(arg) { setTimeout(function() {oneRun(arg);}, i * delay) })(data[i]);
  }

  setTimeout( function() { getMess().innerHTML = "Adding Done!" }, delay * data.length);
})();
