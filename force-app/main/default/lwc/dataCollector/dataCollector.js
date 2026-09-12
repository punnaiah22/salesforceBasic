import { LightningElement } from 'lwc';
export default class DataCollector extends LightningElement {
    sliderValue;
    cName;
    cPhone;
    cSalary;

    handleBarChange(event){
        this.sliderValue = event.detail.value;
        this.sliderValue = this.sliderValue * 100
      console.log(this.sliderValue);
    }

    handleInput(event){
      let value = event.target.value;
      let elementName = event.target.name;

      if(elementName==='customerName'){
        this.cName = value;
      }

       if(elementName==='Phone'){
        this.cPhone = value;
      }

       if(elementName==='Salary'){
        this.cSalary = value;
      }

    }
           
    handleSubmit(event){
       const event1 = new CustomEvent('loandsubmission', {
        detail: {
          customerName: this.cName,
          LoanamountRequested: this.sliderValue,
          Phone: this.cPhone,
          Salary: this.cSalary
        }

       })
       this.dispatchEvent(event1); 
       

    }
}