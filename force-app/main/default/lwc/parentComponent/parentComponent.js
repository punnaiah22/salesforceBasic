import { LightningElement } from 'lwc';
export default class ParentComponent extends LightningElement {
    cNameFromChild;
    cPhoneFromChild;
    cLoanRequiredFromChild;
    cSalary;

    handleEvent(event){
        this.cNameFromChild = event.detail.customerName;
        this.cPhoneFromChild = event.detail.Phone;
        this.cLoanRequiredFromChild = event.detail.LoanamountRequested;
        this.cSalary = event.detail.Phone;

       
    }

}