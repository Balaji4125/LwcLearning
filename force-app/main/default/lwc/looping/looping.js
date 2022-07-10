import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {

    carList = ['ford','Audi','Maruti','Tata']

    ceoList =[
        {
            id:1,
            company:'google',
            name:'sundar pichai'
        },
        {
            id:2,
            company:'amazon',
            name:'jeff bezos'
        },
        {
            id:3,
            company:'facebook',
            name:'mark zuckerberg'
        }
    ]
}