class PersonNotTypsScript{
    id:number
    lastname:string
    firstname:string
    constructor(id:number, lastname:string, firstname: string){
        this.id = id
        this.lastname = lastname
        this.firstname = firstname
    }
    sayHello(){
        return "Hello, i am " + this.lastname
    }
}

class PersonMoreTypeScript{
    constructor(readonly id:number, readonly lastname:string, readonly firstname: string){}
    sayHello(){
        return "Hello, i am " + this.lastname
    }
}
class PersonMoreTypeScript2 implements Person{
    constructor(readonly id:number, readonly lastname:string, readonly firstname: string){}
}

let person = new PersonMoreTypeScript2(42, 'Sawitzki', 'Rainer')
let result = person.lastname
//person.lastname = "Hugo"

let person2:PersonMoreTypeScript2 = {
    id: 43,
    lastname: "Meier",
    firstname: "Hannah"
}

interface Person{
    id:number
    lastname:string
    firstname:string
}

let person3 = {
    id: 43,
    lastname: "Meier",
    firstname: "Hannah"
}

let person4:Person = person3

