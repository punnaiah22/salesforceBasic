import { LightningElement } from 'lwc';

export default class LoanenquireyForm extends LightningElement {
    name;
    phone;
    email;
    company;
    pan;
    aadhar;
    salary;
    salarydate;
    cibilscore;

    hanleLoanFormData(event) {
        //We are using the name attribute to identify which input field the value came from.

        // Name
        if (event.target.name === "Custname") {
            this.name = event.target.value;
        }

        // Phone
        if (event.target.name === "Custphone") {
            this.phone = event.target.value;
        }

        // Email
        if (event.target.name === "Custemail") {
            this.email = event.target.value;
        }

        // Company
        if (event.target.name === "Custcompany") {
            this.company = event.target.value;
        }

        // PAN
        if (event.target.name === "Custpan") {
            this.pan = event.target.value;
        }

        // Aadhar
        if (event.target.name === "Custaadhar") {
            this.aadhar = event.target.value;
        }

        // Salary
        if (event.target.name === "Custsalary") {
            this.salary = event.target.value;
        }

        // Salary Date
        if (event.target.name === "Custsalarydate") {
            this.salarydate = event.target.value;
        }

        // CIBIL Score
        if (event.target.name === "CustCibilscore") {
            this.cibilscore = event.target.value;
        }
    }

}