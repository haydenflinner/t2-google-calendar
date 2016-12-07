(function() {
  iframe = document.getElementsByTagName("iframe")[0];
  tbody = iframe.contentDocument.getElementsByTagName("tbody")[0];
  rows = tbody.getElementsByTagName("tr");
  var ass = [];
  for (var i = 1; i < rows.length; i++) { // 1 skips the heading row
    tds = rows[i].getElementsByTagName("td");
	var d = tds[5].textContent.trim();
	if (new Date(d) > new Date()) ass.push({ "title" : tds[1].textContent.trim(), "due" : d});
  }
  console.log(ass);
  function copyTextToClipboard(text) {
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = text;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    body.removeChild(copyFrom);
  }
  if (ass.length > 0) copyTextToClipboard(JSON.stringify(ass));
})();
