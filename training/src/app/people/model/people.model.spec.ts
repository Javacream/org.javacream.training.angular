import {Person} from './people.model'
describe("PeopleModel", () => {
    it ("Person interface works", () => {
        const person:Person = {id:42, lastname:"Sawitzki", firstname:"Rainer", gender:"m", height:183}
        expect(person.lastname).toBe("Sawitzki")
    })
})