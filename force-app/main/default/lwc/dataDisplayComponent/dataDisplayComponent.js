import { LightningElement } from 'lwc';
export default class DataDisplayComponent extends LightningElement {
    salary;
    obligation;
    result;
    eligibleAmount;
    name;
    email;

    customerData = {CustomerName: 'Puli', PhoneNumber:'9949902276'};
    customersData = [{CustomerName: 'Punnaiah', PhoneNumber: '9949902276'}, {CustomerName: 'Ravi', PhoneNumber: '9876543210'}];
    orderList=[{name: 'order1', amount:23333, quantity: 10, date:'30-10-2026'},
                {name: 'order1', amount:23883, quantity: 15, date:'20-10-2026'},
                {name: 'order1', amount:23993, quantity: 20, date:'25-10-2026'}];
    OrderscolumnsList = [{label: 'Name', fieldName: 'name'},{label: 'Order Amount', fieldName: 'amount'}];            

    handleInputChange(event) {
        const value = event.target.value;

        if (event.target.name === 'input1') {
            this.salary = parseInt(value, 10);
        }

        if (event.target.name === 'input2') {
            this.obligation = parseInt(value, 10);
        }

        if (event.target.name === 'input3') {
            this.name = value;
        }

        if (event.target.name === 'input4') {
            this.email = value;
        }
    }

    handleSubmit() {
       // const netIncome = this.salary - this.obligation;

        if (this.salary > this.obligation) {
            this.result = this.customerData.CustomerName+''+'Eligible';
            
        } else {
            this.result =this.customerData.CustomerName+''+'Not Eligible';
            
        }
    }

    handleContactUS() {
        this.customerData = {
            CustomerName: this.name,
            PhoneNumber: this.email
        };
    }
}