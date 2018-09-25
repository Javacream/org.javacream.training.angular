export class BasicTypes{
    message = "Hello"
    constructor(){
        basicTypes()
        personDemo()
    }
}
class Person{
    //Attributes
    private _lastname:string
    private _firstname:string
    constructor(lastname:string, firstname:string){
        this._lastname = lastname
        this._firstname = firstname
    }
    sayHello():string{
        return this._firstname + " " + this._lastname
    }

    get lastname():string{
        return this._lastname
    }
    set lastname(newLastname:string){
        this._lastname = newLastname
    }
}
class Student extends Person{
    university : string
    constructor(lastname: string, firstname:string, university: string){
        super(lastname, firstname)
        this.university = university
    }
    sayHello():string{
        let superSayHello = super.sayHello()
        let result = superSayHello + " studying at " + this.university
        return result;
    }

}

function personDemo(){
    let p1 = new Person("Sawitzk", "Rainer")
    p1.lastname = "Sawitzki"
    let s1 = new Student("Einstein", "Albert", "LMU")
    printOut(p1)
    printOut(s1)
    console.log(s1.lastname)
}

function printOut(p: Person){
    //Eigenständige Forschungsarbeiten
    //1. Kann ich hier sayHello-Aufrufen?
    //2. Kann ich Person, Student, Worker alle als Parameter übergeben?
    //3. Aufruf der überladenen sayHello: Wie?
    //4. Kann ich hier beispielsweise den Nachname ändern? Auswirkungen auf die aufrufende Funktion: Arbeitet TypeScript mit Referenzen oder mit Values
    console.log(p.sayHello())
    p.lastname = "Meier"
}
function basicTypes(){
        console.log("Starting BasicTypes...")
        //message: string, Type Inferences
        let message:string = "Hello World!"  //"..." string-Literal
        let digit:number = 42
        let result = called(message)
        //called(digit)
        console.log(message)
        console.log("BasicTypes done!")
}

function called(pMessage:string) : string{
        console.log(pMessage)
        return "42"
}


function demo2(){
    let p = new Person("Sawitzki", "Rainer")
    let o : PersonIF = {
        lastname: "Meier",
        firstname: "Hans"
    }
    
}

interface PersonIF{
    lastname: string
    firstname: string
}
