import { LightningElement, wire } from 'lwc';
import{ refreshApex } from '@salesforce/apex';
import getLoanRecords from '@salesforce/apex/LoanDetailsController.getLoanRecords';
export default class LoanDetails extends LightningElement {

  /*accountList;
   cName;
   cemail;
   */
   loanRecordList;
   wiredata;


   columnList=[{label: 'Name', fieldName:'Name'},
   {label: 'Ammount', fieldName:'Loan_Amount__c'},
   {label: 'Interest', fieldName:'Interest_Rate__c'}]

     @wire(getLoanRecords)processwiredLoanData(result){
      this.wireData=result;
    
      
    if(this.wireData.data){
      this.loanRecordList=this.wireData.data;
    }
    else{
        //show toast message
    }
          }
     
      handleRefreshClick(){
        refreshApex(this.wireData).then((data)=>{
          console.log('this.loanRecordList:::'+JSON.stringify(this.loanRecordList));
          console.log('this.data:::'+JSON.stringify(data));
        });
      }




}