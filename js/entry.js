import $ from 'jquery';
import Multiplier from './lessons/multiplier/multiplier';
import EmailValidator from './exercises/emailValidator/emailValidator';

$(document).ready(() => {
  Multiplier.setup();
  EmailValidator.setup();
});