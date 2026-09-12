import { LightningElement } from 'lwc';
export default class Calculator extends LightningElement {
    num1;
    num2;
    output;

      HandleInput1(event){
        this.num1=event.target.value
      }

      HandleInput2(event){
        this.num2=event.target.value
      }
      
      DoAddition(event){
        this.output=parseInt(this.num1)+parseInt(this.num2);
      }

      DoSubstraction(event){
        this.output=parseInt(this.num1)-parseInt(this.num2);
      }

       DoMultiplication(event){
        this.output=parseInt(this.num1)*parseInt(this.num2);
      }
}