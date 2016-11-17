/**
 * Created by lilyevans on 11/16/16.
 */
import $ from 'jquery';

class EmailValidatorDom {
    static hideMessages(){
        $('#email-error').addClass('hide');
        $('#email-success').addClass('hide');
    }

    static showError(error){
        $('#email-error').removeClass('hide');
        $('#email-error').text(error);
    }

    static showSuccess(){
        $('#email-success').removeClass('hide');
    }

    static getEmail(){
        return $('#email').val();
    }
}
module.exports = EmailValidatorDom;