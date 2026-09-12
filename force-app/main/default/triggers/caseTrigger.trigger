trigger caseTrigger on Case (before update) {
    //for insert and update > trigger.New & for delete > trigger.old
    for(case cas : trigger.New){
        if(cas.Status == 'New' && trigger.oldMap.get(cas.id).Status == 'Working' && cas.Status!= Trigger.oldMap.get(cas.id).status){
            cas.addError('You can not move status from working to new ');
        }
    }

}