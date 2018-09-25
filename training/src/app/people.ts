export interface Person{
    lastname:string
    firstname:string
    gender:string
    height:number
}

export class SimplePerson implements Person{
    constructor(readonly lastname:string, readonly firstname:string, readonly gender:string, readonly height:number){
    }
    
}

export const samplePerson = {lastname: "Sawitzki", firstname: "Rainer", gender:"m", height:183}


export function createSamplePeople():Array<Person>{
    let people:Array<Person> = [samplePerson]
    people.push(new SimplePerson("Mustermann", "Klaus", "m", 171))
    people.push(new SimplePerson("Sawitzki", "Klaus", "m", 181))
    people.push(new SimplePerson("Metzger", "Hanna", "f", 173))
    people.push(new SimplePerson("Pausenkurt", "Pascal", "m", 199))
    return people

}