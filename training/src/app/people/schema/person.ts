export class PersonClass implements Person{
    constructor(readonly firstname:string, readonly lastname:string){}
}

export interface Person{
    firstname:string
    lastname:string
}