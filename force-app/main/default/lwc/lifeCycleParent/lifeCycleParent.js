import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {

    ischildvisible=false
    constructor(){
        super()
        console.log("parent constructor called")
    }

    connectedCallback(){
        console.log('Parent connectcallback called')
    }
    renderedCallback(){
        console.log('parent renderedcallback called')
    }

    handleclick(){
      this.ischildvisible=!this.ischildvisible

    }

    errorCallback(err,stack){
           console.log(err.message)
           console.log(stack)
    }

}