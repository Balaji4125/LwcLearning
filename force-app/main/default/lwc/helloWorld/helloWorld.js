import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {

    fullName = "Salesforce"
    
   title = "Aura"

   changeHandler(event){
    this.title = event.target.value
   }

    @track address={
       city :'chennai',
       postalcode : 603202
   }
   eventHandler(event){
     this.address.city = event.target.value
   }
   //getter example

   users = ["john","Balaji","Wick"]
   num1 = 20
   num2 = 30

   get firstuser(){
     return this.users[0]
   }
   get sumofnumbers(){
     return this.num1 + this.num2
   }


}