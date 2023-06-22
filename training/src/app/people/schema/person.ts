export class PersonClass implements Person{
    constructor(readonly firstname:string, readonly lastname:string, readonly id:number){}
}

export interface Person{
    firstname:string
    lastname:string
    id:number
}