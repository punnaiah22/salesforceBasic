/**
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 * Class Name      : accountSearchController
 * Author          : <YourName>
 * Created Date    : Aug 11, 2026
 * Last Modified By: <YourName>
 * Last Modified On: Aug 11, 2026
 * Description     : This class implements for......
 *  
 * Change History  :
 *  Date          │   Author     │   Change
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 *  Aug 11, 2026  │ <YourName>   │ Initial version
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 */

public class accountSearchController {

	@AuraEnabled
	public static List<account> searchaccounts(String searchKey, String rating) {
		

		
       // String accountName = '%' + (String.isBlank(searchKey) ? '' : searchKey) + '%';  ->(Complex)
	     
		 String accountName = '%' + searchKey +'%';

       /*List<Account> accList=[select Id,Name,Phone from Account where Name LIKE :'%searchKey%'];
	     In SOQL to refer a apex variable we use :before variable name
	   */
       
	    if (String.isNotBlank(rating)) {
            return [
                SELECT Id, Name, Phone, Industry, Rating
                FROM Account
                WHERE Name LIKE :accountName
				AND Rating= :rating
                ORDER BY Name
				Limit 100
            ];
        }
		else{

        return [
            SELECT Id, Name, Phone, Industry, Rating
            FROM Account
            WHERE Name LIKE :accountName
            ORDER BY Name
			Limit 100
        ];
    }
 }
}