import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected ={}
    correctAnswers = 0
    isSubmitted = false
    myQuestions = [
        {
            id:1,
            question:"Which of the following is not the template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:2,
            question:"Which of the following is not the lwc component folder?",
            answers:{
                a:".svg",
                b:".js",
                c:".apex"
            },
            correctAnswer:"c"
        },
        {
            id:3,
            question:"Which of the following is not the directives?",
            answers:{
                a:"for:each",
                b:"@track",
                c:"if:true"
            },
            correctAnswer:"b"
        }
    ]

    changeHandler(event){
       // console.log("name",event.target.name)
      //  console.log("value",event.target.value)
        const {name,value} = event.target
        this.selected = {...this.selected, [name]:value}
    }
    ResetHandler(){
          this.selected = {}
          this.correctAnswers=0
          this.isSubmitted = false
    }
    submitHandler(event){
      event.preventDefault()
      let correct = this.myQuestions.filter(item => this.selected[item.id]===item.correctAnswer)
      this.correctAnswers = correct.length
      console.log(this.correctAnswers)
      this.isSubmitted = true
    }
    get allnotselected(){
        return !(Object.keys(this.selected).length===this.myQuestions.length)
    }
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length===this.correctAnswers?
        'slds-text-color_success':'slds-text-color_error'}`
    }
}