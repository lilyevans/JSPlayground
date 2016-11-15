import $ from 'jquery';
import Actions from './multiplierActions';

/* Good Version: */

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