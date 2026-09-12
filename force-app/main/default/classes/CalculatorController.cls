/**
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 * Class Name      : calculatorcontroller
 * Author          : <YourName>
 * Created Date    : Aug 4, 2026
 * Last Modified By: <YourName>
 * Last Modified On: Aug 4, 2026
 * Description     : This class implements for......
 *  
 * Change History  :
 *  Date          │   Author     │   Change
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 *  Aug 4, 2026  │ <YourName>   │ Initial version
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 */

public class CalculatorController {

    public String emailId = 'angajalapunnaiah@gmail.com';
    public Integer age = 26;
    public String empPhoneNumber = '9676452692';
    public Boolean isEligibleForVoting = true;
    public Id accountRecordId = '001000000000001AAA'; // Sample 18-character Salesforce Id

    public void addNumbers() {
        age = 35;

        CalculatorController.doLogic(); 
    }

    public static Integer doLogic() {
        Integer additionResult = 1 + 2;
        return additionResult;
    }

}