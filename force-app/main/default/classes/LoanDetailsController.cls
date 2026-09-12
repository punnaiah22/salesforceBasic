/**
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 * Class Name      : loanDetals
 * Author          : <YourName>
 * Created Date    : Aug 7, 2026
 * Last Modified By: <YourName>
 * Last Modified On: Aug 7, 2026
 * Description     : This class implements for......
 *  
 * Change History  :
 *  Date          │   Author     │   Change
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 *  Aug 7, 2026  │ <YourName>   │ Initial version
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 */

public class LoanDetailsController {

	@AuraEnabled(cacheable=true)
	public static List<Loan__c> getLoanRecords() {
		// Your logic here
		List<Loan__c> loanList =[select id, name, Loan_Amount__c, Interest_Rate__c from Loan__c];
		return loanList;
	}

}