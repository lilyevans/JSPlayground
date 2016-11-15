import $ from 'jquery';
import DOM from './multiplierDom';

/* Good Version: */

class Multiplier {
  static setup() {
    $('#multiply-button').click(() => {
      const lhs = DOM.getNumber('lhs');
      const rhs = DOM.getNumber('rhs');
      const product = lhs * rhs;
      DOM.setAnswer(product);
    });
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