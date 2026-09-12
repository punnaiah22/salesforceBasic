import { LightningElement } from 'lwc';
import LightningModal from "lightning/modal";
export default class ModalComponent extends LightningElement {
   
   handleClick(event){
    this.close('ok');
   }
}