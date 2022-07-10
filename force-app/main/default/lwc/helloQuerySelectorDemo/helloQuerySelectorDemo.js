import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {

    userNames = ["john","nick","wick"]
    fetchDetailHandler(){
        const elem = this.template.querySelector("h1")
        elem.style.border="1px solid red";
        const user = this.template.querySelectorAll('.name')
        console.log(elem.innerText)
        Array.from(user).forEach(element => {
            console.log(element.innerText)
            element.setAttribute("title",element.innerText)
        });
       const child = this.template.querySelector('.child')
       child.innerHTML='<p>Hi Iam child</p>'
    }

}