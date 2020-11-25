export interface Person{
    id:number
    lastname:string
    firstname:string
    height:number
    gender:string
}

export class PersonClass implements Person{
    constructor(readonly id:number, public lastname:string, public firstname:string, readonly gender:string, public height:number){}
}
