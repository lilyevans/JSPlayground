import $ from 'jquery';

class EmailValidator {
  static setup() {
    $('#button').click(() => {
      $('#email-error').addClass('hide');
      $('#email-success').addClass('hide');
      const email = $('#email').val();
      
      if(email.length < 1 || email.length > 255) {
        $('#email-error').removeClass('hide');
        $('#email-error').text('Must be between 1 and 255 characters');
      }
      else if(!email.test(/.+@thoughtworks\.com$/)) {
        $('#email-error').removeClass('hide');
        $('#email-error').text('Email must end with @thoughtworks.com');
      }
      else {
        $('#email-success').removeClass('hide');
      }
    });
  }
}

module.exports = EmailValidator;