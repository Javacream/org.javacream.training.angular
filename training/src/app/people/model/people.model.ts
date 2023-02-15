//Datenmodell für die geplante People Applikation

// syntactic sugar
export class Person implements PersonIF{
    constructor(readonly id:number, public lastname:string, readonly firstname:string, readonly gender:string, public height:number){}
}

export interface PersonIF {
    id:number
    lastname:string
    firstname:string
    height:number
    gender: string
}
