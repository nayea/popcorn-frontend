
(function(global){
'use strict'

 var controller = new ScrollMagic.Controller();

// build tween
  var tween = TweenMax.to(".ranking-top3", 1, {opacity: 1, top: 20});

  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, offset: -50})
          .setTween(tween)
          .addIndicators({name: "loop"}) // add indicators (requires plugin)
          .addTo(controller);

})(this);

(function(global){
'use strict'

 var controller = new ScrollMagic.Controller();

// build tween
  var tween = TweenMax.to(".ranking-boxoffice", 1, {opacity: 1, top: 120});

  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, offset: -50})
          .setTween(tween)
          .addIndicators({name: "loop"}) // add indicators (requires plugin)
          .addTo(controller);

})(this);

// (function(global){
// 'use strict'

//  var controller = new ScrollMagic.Controller();

// // build tween
//   var tween = TweenMax.to("#sm-ranking-top3", 1, {opacity: 1, top: 10});

//   // build scene
//   var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, offset: -50})
//           .setTween(tween)
//           .addIndicators({name: "loop"}) // add indicators (requires plugin)
//           .addTo(controller);

// })(this);