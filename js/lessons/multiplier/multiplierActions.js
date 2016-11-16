import DOM from './multiplierDom';
import Utils from './multiplierUtils';

/**
 *  The Actions class here holds a bunch of possible event handlers
 *  or other actions.  Think of this like a "controller", where the
 *  event is a route and the handler decides who on the DOM is relevant
 *  and what to do with the data therein.
 */
class MultiplierActions {
  static generateAnswer() {
    const lhs = DOM.getNumber('lhs');
    const rhs = DOM.getNumber('rhs');
    DOM.setAnswer(Utils.multiply(lhs, rhs));
  }
}

module.exports = MultiplierActions;