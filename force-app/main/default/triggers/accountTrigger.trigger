trigger accountTrigger on Account (after insert, before insert, after update, before update, before delete) { 
    

    if(Trigger.isBefore && Trigger.isInsert){
        accountTriggerHandler.handleBeforeInsert(Trigger.New);
    }
    


    if(Trigger.isAfter && Trigger.isInsert){  
        // it will execute below logic for after insert
        accountTriggerHandler.handleAfterInsert(Trigger.new);
    }


    if(Trigger.isDelete){  // it will execute below logic for delete
        accountTriggerHandler.hanleBeforeDelete(Trigger.old);
    }

}