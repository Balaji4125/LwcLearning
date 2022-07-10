import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {

    name
  isVisible = false
  handleClick(){
    this.isVisible = true
  }

  changeHandler(event){
 this.name = event.target.value
  }

  get hellomethod(){
    return this.name === "Hello"
  }

  //falsy values
  // x=0,false,undefined,null,"c/helloWorld"

}