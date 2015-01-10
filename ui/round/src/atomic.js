var util = require('chessground').util;

function capture(ctrl, key) {
  var exploding = [];
  var diff = {};
  var orig = util.key2pos(key);
  for (var x = -1; x < 2; x++) {
    for (var y = -1; y < 2; y++) {
      var k = util.pos2key([orig[0] + x, orig[1] + y]);
      if (k) {
        exploding.push(k);
        var explodes = ctrl.chessground.data.pieces[k] && (
          k === key || ctrl.chessground.data.pieces[k].role !== 'pawn')
        if (explodes) diff[k] = null;
      }
    }
  }
  ctrl.chessground.setPieces(diff);
  ctrl.chessground.explode(exploding);
};

module.exports = {
  capture: capture
};
