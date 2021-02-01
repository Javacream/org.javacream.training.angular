class PersonClassNotSoTypeScriptLike{

    id:number
    lastname:string
    firstname:string
    height:number
    gender:string

    constructor(id:number, lastname:string, firstname:string, gender:string, height:number){
        this.id = id
        this.lastname = lastname
        this.firstname = firstname
        this.gender = gender
        this.height = height

    }

    sayHello(){
        return `Hello, my name is ${this.firstname} + ${this.lastname}`
    }

}


class PersonClass{

    constructor(readonly id:number, public lastname:string, readonly firstname:string, readonly gender:string, public height:number){}

    sayHello(){
        return `Hello, my name is ${this.firstname} + ${this.lastname}`
    }

}

class PersonClassWithDefaults{

    constructor(readonly id:number, public lastname:string, readonly firstname:string, readonly gender = "d", public height = 50){}

    sayHello(){
        return `Hello, my name is ${this.firstname} + ${this.lastname}`
    }

}

let person = new PersonClassWithDefaults(1000, "Sawitzki", "Rainer")
let person2:PersonClassWithDefaults = {id:1000, lastname:"Sawitzki", firstname:"Rainer", gender:"m", height:183, sayHello: () => "Hello"}

interface Person{
    id:number
    lastname:string
    firstname:string
    height:number
    gender:string
}

let person3:Person = {id:1000, lastname:"Sawitzki", firstname:"Rainer", gender:"m", height:183}


class ClassImplementsPerson implements Person{

    constructor(readonly id:number, public lastname:string, readonly firstname:string, readonly gender:string, public height:number){}

    sayHello(){
        return `Hello, my name is ${this.firstname} + ${this.lastname}`
    }

}

class StudentClass extends PersonClass{
    university: "LMU"
}

interface Student extends Person {
    university:string
}



type PersonType = {
    id:number
    lastname:string
    firstname:string
    height:number
    gender:string
   
}
