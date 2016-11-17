/**
 * Created by lilyevans on 11/16/16.
 */
class EmailValidatorUtils{
    static hasValidLength(email){
        if(email.length < 1 || email.length > 255) {
            return false;
        }
        else{
            return true;
        }
    }

    static hasValidEnding(email){
        if(!/.+@thoughtworks\.com$/.test(email)) {
            return false;
        }
        else {
            return true;
        }
    }
}
module.exports = EmailValidatorUtils;