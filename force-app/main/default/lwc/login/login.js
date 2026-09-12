import { LightningElement } from 'lwc';
import createLogin from '@salesforce/apex/logincontroller.createLogin';
import getLoginDetails from '@salesforce/apex/logincontroller.getLoginDetails';

import Toast from 'lightning/toast';

export default class Login extends LightningElement {
    showsignin = true;
    showsignup = false;
    showsubmit = false;
    firstnamefromui;
    lastnamefromui;
    phonefromui;
    emailfromui;
    usernamefromui;
    passwordfromui;
    //This variable is used to store data which is coming from apex and also used to display in data table
    loginDetailList;
    //This variable is used to display list of colums in a table
    columnsList = [{ label: 'First Name', fieldName: 'First_Name__c' },
    { label: 'Last Name', fieldName: 'Last_Name__c' },
    { label: 'User Name', fieldName: 'User_Name__c' },
    { label: 'Password', fieldName: 'Password__c' }]

    handlesignin() {
        this.showsignin = true;
        this.showsignup = false;
    }

    handlesignup() {
        this.showsignin = false;
        this.showsignup = true;
        this.showsubmit = true;
    }

    handleinpuchange(event) {
        if (event.target.name === 'input1') {
            this.firstnamefromui = event.target.value;
        } else if (event.target.name === 'input2') {
            this.lastnamefromui = event.target.value;
        } else if (event.target.name === 'input3') {
            this.phonefromui = event.target.value;
        } else if (event.target.name === 'input4') {
            this.emailfromui = event.target.value;
        } else if (event.target.name === 'input5') {
            this.usernamefromui = event.target.value;
        } else if (event.target.name === 'input6') {
            this.passwordfromui = event.target.value;
        }
    }

    handlesubmit(event) {
        createLogin({ input1: this.firstnamefromui, input2: this.lastnamefromui, input3: this.phonefromui, input4: this.emailfromui, input5: this.usernamefromui, input6: this.passwordfromui })

            .then(() => {
                this.showsubmit = false;
                this.showsignin = true;
                this.showsignup = false;
                Toast.show(
                    {
                        label: 'Record Created',
                        message: 'Details Saved into DB',
                        variant: 'success',
                        mode: 'dismissible'
                    },
                    this
                );
            })
            .catch((error) => {
                console.log('Error ::: ' + error);
                console.log('Error ::: ' + JSON.stringify(error));

                Toast.show(
                    {
                        label: 'Record Creation Failed',
                        message: 'seems to be error:::' + error.body.message,
                        variant: 'error',
                        mode: 'dismissible'
                    },
                    this
                );
            });
    }
    getAllRecords() {
        getLoginDetails()
            .then(result => {
                console.log('Result ::: ' + JSON.stringify(result));
                this.loginDetailList = result;   // Important
            })
            .catch(error => {
                console.log('Error ::: ' + JSON.stringify(error));
            });
    }
}