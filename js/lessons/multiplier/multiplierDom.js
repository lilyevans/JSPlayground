import $ from 'jquery';

/**
 *  This is the only class that knows about the DOM.  It is an
 *  abstraction over the DOM's exact implementation.  This means
 *  that if the DOM changes, you should only need to change this page.
 *  Think of it kinda like the "repositories" in Java.
 */
class MultiplierDom {
  static getNumber(id) {
    return parseFloat($(`#${id}`).val());
  }
  
  static setAnswer(answer) {
    $('#answer').text(answer);
  }
}

module.exports = MultiplierDom;