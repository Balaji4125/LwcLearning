import { LightningElement } from 'lwc';
import signInTemplate from './signInTemplate.html'
import signUpTemplate from './signUpTemplate.html'
import lifeCycleRenderMethod from './lifeCycleRenderMethod.html'
export default class LifeCycleRenderMethod extends LightningElement {

    selectedButton = ''
     render(){
        return this.selectedButton==='SignUp'? signUpTemplate :
             this.selectedButton==='SignIn'? signInTemplate :  
             lifeCycleRenderMethod

     }

     handleclick(event){
       this.selectedButton= event.target.label
     }

     submitHandler(event){
        console.log(`${event.target.label} Successfully!!! `)
     }

}