var still = document.querySelector('.movie-still');
var stillControlButtons = still.querySelectorAll('a');
var stillView = still.querySelector('.movie-still-view');


var changeStillView = function(e) {
  var stillImg = this.querySelector('img');
  var view = stillView.querySelector('img');
  var src = stillImg.getAttribute('src');
  var alt = stillImg.getAttribute('alt');

  e.preventDefault();
  view.setAttribute('src', src);
  view.setAttribute('alt', alt);

};

for ( var i = 0, l = stillControlButtons.length; i < l; i++ ) {
  stillControlButtons[i].onclick = changeStillView;
}
