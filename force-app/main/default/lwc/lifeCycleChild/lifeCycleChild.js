import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {

    constructor(){
        super()
        console.log("child constructor called")
    }

    connectedCallback(){
        console.log('child connectcallback called')
       // window.addEventListener('click',this.handleclick)
       throw new Error('Loading of child component failed')
    }
    renderedCallback(){
        console.log('child renderedcallback called')
    }

    disconnectedCallback(){
        alert('child disconnectedcallback called')
      //  window.removeEventListener('click',this.handleclick)
    }

}