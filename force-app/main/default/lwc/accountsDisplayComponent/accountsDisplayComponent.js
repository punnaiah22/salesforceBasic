import { LightningElement } from 'lwc';
import getaccounts from'@salesforce/apex/accountsDisplay.getData';
import termsAndConditionsModel from'c/modalComponent';
export default class AccountsDisplayComponent extends LightningElement {

    accountList;
    accColumns = [{label:'Name', fielName:'Name'}, {label:'Phone', fielName:'Phone'}];
    showModal = false;
    content;

    connectedCallback(){
        this.getData();
    }
    getData(){
        getaccounts()
        .then(result=>{
            this.accountList=result;

         }).catch();
    }

    //when we click view Terms and Conditions and it is true automatically ModalPop will display
    showTermsandConditions(event){
       // this.showModal = true;

        //we can refer Light ning modal in google 
         termsAndConditionsModel.open({
            size: "large",
            description: "Accessible Description of modal's purpose",
            content: "You need to agree below terms and conditions"

        });           
    }
    

}