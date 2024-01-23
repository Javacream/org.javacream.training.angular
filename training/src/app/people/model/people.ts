export class PersonClass implements Person{
    constructor(readonly id:number, readonly lastname:string, readonly firstname: string){}
}

export interface Person{
    id:number
    lastname:string
    firstname:string
}
