import $ from 'jquery';
import Actions from './multiplierActions';

/* Good Version: */

/**
 *  This is responsible for setting up the appropriate event handlers
 *  and initializing other important things relevant for the multiplier
 *  functionality.
 */
class Multiplier {
  static setup() {
    $('#multiply-button').click(Actions.generateAnswer);
  }
}

module.exports = Multiplier;

/*  */

/* Bad Version:

class Multiplier {
  static setup() {
    $('#multiply-button').click(() => {
      const lhs = parseFloat($('#lhs').val());
      const rhs = parseFloat($('#rhs').val());
      const product = lhs * rhs;
      $('#answer').text(product);
    });
  }
}

module.exports = Multiplier;

/*  */