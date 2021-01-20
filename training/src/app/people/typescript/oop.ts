class SimplePerson{
    id:number
    lastname:string
    firstname:string
    gender:string
    height:number
}

let aPerson = new SimplePerson()
aPerson.firstname = "Hugo"

class SimpleStudent extends SimplePerson{
    university:string
}

class SmartPerson{
    id:number
    lastname:string
    firstname:string
    gender:string
    height:number

    sayHello(){
        return this.firstname + " " + this.lastname
    }
    sayHello2(){
        return `${this.firstname} ${this.lastname}`
    }
}

class SmartPersonWithConstructor{
    private id:number
    public lastname:string
    readonly firstname:string
    readonly gender:string
    public height:number

    constructor(id:number, lastname:string, firstname:string, gender = "d", height = 50){
        this.id = id
        this.firstname = firstname
        this.lastname = lastname
        this.gender = gender
        this.height = height

    }
    sayHello(){
        return this.firstname + " " + this.lastname
    }
    sayHello2(){
        return `${this.firstname} ${this.lastname}`
    }
}

let p2 = new SmartPersonWithConstructor(42, "Mster", "Mann", "d", 199)

class SmartPersonWithConstructorTyscriptLike{
    constructor(private id:number, public lastname:string, readonly firstname:string, readonly gender:string, public height:number){}
    sayHello(){
        return this.firstname + " " + this.lastname
    }
    sayHello2(){
        return `${this.firstname} ${this.lastname}`
    }
}

let p3 = new SmartPersonWithConstructorTyscriptLike(42, "Mster", "Mann", "d", 199)

let p4:SimplePerson = {
    id:100,
    lastname:"Sawitzki",
    firstname:"Rainer",
    gender:"m",
    height:183
        
}

interface Person{
    id:number
    lastname:string
    firstname:string
    gender:string
    height:number
}

class PersonClass implements Person{
    constructor(readonly id:number, public lastname:string, readonly firstname:string, readonly gender:string, public height:number){}
}


let p5:Person = {
    id:100,
    lastname:"Sawitzki",
    firstname:"Rainer",
    gender:"m",
    height:183
        
}

interface Student extends Person{
    university:string
}

type PersonType = {
    id:number
    lastname:string
    firstname:string
    gender:string
    height:number
}

