import DOM from './multiplierDom';
import Utils from './multiplierUtils';

class MultiplierActions {
  static generateAnswer() {
    const lhs = DOM.getNumber('lhs');
    const rhs = DOM.getNumber('rhs');
    DOM.setAnswer(Utils.multiply(lhs, rhs));
  }
}

module.exports = MultiplierActions;