import $ from 'jquery';

class MultiplierDom {
  static getNumber(id) {
    return parseFloat($(`#${id}`).val());
  }
  
  static setAnswer(answer) {
    $('#answer').text(answer);
  }
}

module.exports = MultiplierDom;