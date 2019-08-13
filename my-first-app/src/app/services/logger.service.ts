import { Injectable } from '@angular/core';


@Injectable()
export class LoggerService {

    messages: Array<string> = []

    log(message: string){
        this.messages.push(message)
        localStorage.setItem('logs', JSON.stringify(this.messages))
    }

    printlogs(){
        console.log(localStorage.getItem('logs'))
    }
    
    constructor() { }

   

}