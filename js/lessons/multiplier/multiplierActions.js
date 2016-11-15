import DOM from './multiplierDom';

class MultiplierActions {
  static generateAnswer() {
    const lhs = DOM.getNumber('lhs');
    const rhs = DOM.getNumber('rhs');
    DOM.setAnswer(lhs * rhs);
  }
}

module.exports = MultiplierActions;