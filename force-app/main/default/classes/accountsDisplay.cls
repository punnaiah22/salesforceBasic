/**
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 * Class Name      : accountsDisplay
 * Author          : <YourName>
 * Created Date    : Aug 17, 2026
 * Last Modified By: <YourName>
 * Last Modified On: Aug 17, 2026
 * Description     : This class implements for......
 *  
 * Change History  :
 *  Date          │   Author     │   Change
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 *  Aug 17, 2026  │ <YourName>   │ Initial version
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 */

public class accountsDisplay {

	@AuraEnabled
	public static list<account> getData() {
		return[select Id,Name, phone from account limit 100];

}

}