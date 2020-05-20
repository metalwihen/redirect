function redirectNow(newUrl) {
    window.location.replace(newUrl);
}

function redirectViaMouseClick(buttonId) {
	window.onload = function() {
    var clickTarget = document.getElementById(buttonId);
    var fakeMouseEvent = document.createEvent('MouseEvents');
    fakeMouseEvent.initMouseEvent("click", true, true, window,
        0, 0, 0, 1, 1, false, false, false, false, 0, null);

    clickTarget.dispatchEvent(fakeMouseEvent);
  };
}