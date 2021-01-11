class NotSoTypicalPerson{
    id:number
    lastname:string
    firstname:string
    gender:string
    height:number

    constructor(id:number, lastname:string, firstname:string, gender:string, height:number){
        this.id = id;
        this.lastname = lastname
        this.firstname = firstname
        this.gender = gender
        this.height = height        
    }

    sayHello(){
        return "Hello, my name is " + this.lastname
    }
}

class PersonClass implements Person{
    constructor(readonly id:number, public lastname:string, readonly firstname:string, readonly gender:string, public height:number){ }
    /*
        sayHello(){
            return "Hello, my name is " + this.lastname
    }
    */
}

interface Person{
    id:number
    lastname:string
    firstname:string
    gender:string
    height:number

}

type PersonType = {
    id:number
    lastname:string
    firstname:string
    gender:string
    height:number

}

let aPerson = new PersonClass(100, "Mustermann", "Hans", "d", 188)

let bPerson:Person = {
    id: 101,
    lastname: "Mustermann",
    firstname:"Hanna",
    gender:"f",
    height:176

}


