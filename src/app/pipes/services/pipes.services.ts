import { Injectable } from '@angular/core'
import {Interface} from '../models/interface'

@Injectable({
    providedIn: 'root',
})

export class ServiceDemo{

    postArray: Array<Interface> = [
        {
            name: 'sudha',
            age: 30,
            location: 'komarapalayam'
        },
        {
            name: 'elavarasu',
            age: 27,
            location: 'thevur'
        }
    ]

    addData(data:Interface){
        this.postArray.push(data)
    }
}
