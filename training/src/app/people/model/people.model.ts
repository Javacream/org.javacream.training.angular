//Datenmodell für die geplante People Applikation

export class Person{
    constructor(id:number, lastname:string, firstname:string, gender:string, height:number){
        this.id  = id;
        this.firstname = firstname
        this.lastname = lastname
        this.height = height
        this.gender = gender
    }
    id:number
    lastname:string
    firstname:string
    height:number
    gender:string
}