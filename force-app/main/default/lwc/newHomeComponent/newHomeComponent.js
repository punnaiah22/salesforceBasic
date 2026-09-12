import { LightningElement } from 'lwc';

export default class NewHomeComponent extends LightningElement {
    activeTab = 'logins';

    handleActive(event) {
        this.activeTab = event.target.value;
    }
}