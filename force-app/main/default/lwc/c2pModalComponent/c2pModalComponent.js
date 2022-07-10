import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    closeHandler(){
        const myevent = new CustomEvent('close',{
            detail:'Modal closed successfully!!!'})
        this.dispatchEvent(myevent)
    }

}