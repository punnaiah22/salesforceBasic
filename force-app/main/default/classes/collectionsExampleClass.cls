public class collectionsExampleClass {
    //In Apex, for-each is used to loop through each element of a collection such as a List, Set, or other iterable collection.
    public static void listExample(){
        /*You retrieved Contact records using SOQL, then used a for-each loop
         *  to extract the Name and Email fields from each Contact and store them in separate List<String> collections.*/
        List<contact> conList=[select id, name, email, phone from contact];
        List<String> names =new List<String>();
        for(contact con:conList){
           names.add(con.name);
        }
        system.debug('Names:::'+Names);
            
        List<String> emails = new List<String>();
            for(contact con:conList){
           emails.add(con.email);
        }
        system.debug('Email:::'+emails);
            }
    public static void setExample(){
        /* Retrieve Contact records → iterate through each Contact → extract Phone → store phone numbers
              in a Set → automatically eliminate duplicate phone numbers. */

        List<contact> conList=[select id, name, email, phone from contact];
           set<String> phoneNumbers = new set<String>();
        for(contact con:conList){
            phoneNumbers.add(con.phone);
            
        }
        system.debug('Phone Numbers from Sert:'+phoneNumbers);
     }
   
    public static void mapExample(){
        map<String, String> nameandemail= new map<String, String>();
        List<contact>conList=[select id, name, email, phone from contact];
        for(contact con:conList){
            nameandemail.put(con.name,con.email);
        }
        system.debug('Nameandemail:::' + nameandemail);
        
    }
}