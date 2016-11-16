/**
 *  Here we put logic.  Logic can (and should) be spread
 *  across relevant classes; in other words, don't put all
 *  logic in a single class, unless it truly makes sense.
 *  This is kind of like the "service" layer in Java.
 */
class MultiplierUtils {
  static multiply(lhs, rhs) {
    return lhs * rhs;
  }
}

module.exports = MultiplierUtils;