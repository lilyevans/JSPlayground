/**
 * Created by lilyevans on 11/16/16.
 */

import DOM from './emailValidatorDom';
import Utils from './emailValidatorUtils'

class EmailValidatorActions{
    static submit() {
        DOM.hideMessages();
        const email = DOM.getEmail();

        EmailValidatorActions.validateEmail(email);
    }

    static validateEmail(email){
        if (!Utils.hasValidLength(email)){
            DOM.showError('Must be between 1 and 255 characters');
        }
        else if (!Utils.hasValidEnding(email)) {
            DOM.showError('Email must end with @thoughtworks.com');
        }
        else {
            DOM.showSuccess();
        }
    }
}
module.exports = EmailValidatorActions;