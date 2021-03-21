import logParticipants from './executor'

var bkg = chrome.extension.getBackgroundPage();
bkg.console.log('foo');

let greenSquareEl = document.getElementById('greenSquare');

greenSquareEl.onclick = function(element) {
  logParticipants();
};
