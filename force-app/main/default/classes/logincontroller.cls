/**
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 * Class Name      : logincontroller
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


public class logincontroller {
	@AuraEnabled
    public static string createLogin(string input1, string input2, string input3, string input4, string input5, string input6){
          //DML (Insert)
          try{
          // Do DML operation here
            Login_details__c loginRec=new Login_details__c();
            loginRec.First_Name__c = input1;
            loginRec.Last_Name__c = input2;
            loginRec.Phone__c = input3;
            loginRec.Email__c = input4;
            loginRec.User_Name__c= input5;
            loginRec.Password__c = input6;
            insert loginRec; 
            return 'success';

          } catch(Exception e){
            throw new AuraHandledException(e.getMessage());

          }
		
	      }  
        @AuraEnabled             
    public static List<Login_details__c> getLoginDetails(){
          List<Login_details__c> loginDetailsList =[select id, name,First_Name__c, Last_Name__c, Phone__c, Email__c, 
          User_Name__c, Password__c from Login_details__c ];
          return loginDetailsList;
          

        }

}