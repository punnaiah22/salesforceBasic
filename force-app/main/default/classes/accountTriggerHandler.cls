public with sharing class accountTriggerHandler {
    public accountTriggerHandler() {

    }

    public static void handleBeforeInsert(List<Account> newAccounts) {
        for(account acc: newAccounts){    //Test Account1 ==> fields
            if(acc.type == 'Prospect') {
                acc.active__c = 'Yes';
            }
       }   

    }

    public static void handleAfterInsert(List<Account>  newAccounts) {
        for(account acc: newAccounts){ 
            contact con = new contact();  //This creates a new Contact record in memory.
            con.LastName = acc.Name; //Copy Account Name to Contact Last Name
            con.Phone = acc.Phone; //The Account's phone number is copied to the Contact.
            insert con; //The new Contact is saved into Salesforce.


        }


    }

    public static void handleAfterUpdate(List<Account> newAccounts) {


    }

    public static void handleBeforeUpdate(List<Account> oldAccounts, List<Account> newAccounts) {


    }



    public static void hanleBeforeDelete(List<Account> oldAccounts) {
        for(Account acc: oldAccounts){
            // Add delete logic here if needed
            if(acc.type == 'Prospect') {
                // Example logic for delete
                acc.addError('You cannot delete This Account as it is Active');
             }
            
        }

    }

}