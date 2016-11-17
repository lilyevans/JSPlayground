import $ from 'jquery';
import Actions from './emailValidatorActions';

class EmailValidator {
  static setup() {
    $('#button').click(Actions.submit);
  }
}

module.exports = EmailValidator;