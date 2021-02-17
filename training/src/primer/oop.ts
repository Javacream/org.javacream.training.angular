class PersonOversizedInTypeScript{
    constructor(id:number, lastname:string, firstname:string, gender:string, height:number){
        this.id = id
        this.lastname = lastname
        this.firstname = firstname
        this.gender = gender
        this.height = height
    }
	id:number
	lastname:string
	firstname:string
	height:number
    gender: string
    sayHello(){
        return `Hello, my name is ${this.firstname} ${this.lastname}`
    }
}

class PersonTypicalTypeScript{
    constructor(readonly id:number, public lastname:string, readonly firstname:string, readonly gender:string, public height:number){}
    sayHello(){
        return `Hello, my name is ${this.firstname} ${this.lastname}`
    }
}


class Student extends PersonOversizedInTypeScript{
    university:string
}

let p1 = new PersonOversizedInTypeScript(42, "Sawitzki", "Hugo", "f", 188)
let p1_b = new PersonTypicalTypeScript(42, "Sawitzki", "Hugo", "f", 188)
//...

interface Person{
	id:number
	lastname:string
	firstname:string
	height:number
    gender: string
}

//let p1_a:PersonOversizedInTypeScript = {id: 42, lastname:"Sawitzki", firstname:"Rainer", height: 183, gender: 'm'}
let p2:Person = {id: 9999, lastname:"Sawitzki", firstname:"Rainer", height: 183, gender: 'm'}

type  PersonType = {
	id:number
	lastname:string
	firstname:string
	height:number
    gender: string
}
