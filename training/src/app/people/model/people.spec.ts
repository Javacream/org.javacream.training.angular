import {PeopleModel, Person, PersonClass} from './people'
describe("people", () => {
    it("person should be generated", () => {
        let person:Person = new PersonClass(101, "Sawitzki", "Klaus", 'm', 181)
        expect(person.lastname).toBe("Sawitzki")
    })

    it("json should be parsed", () => {
        
        let personJson:Person = {id: 100, lastname:"Sawitzki", firstname: "Rainer", height:183, gender: "m"}
        expect(personJson.lastname).toBe("Sawitzki")
    })
    it ("peopleModel works", () => {
        let peopleModel = new PeopleModel();
        let pId = peopleModel.create("Sawitzki", "Rainer");
        let pId2 = peopleModel.create("Sawitzki", "Klaus");
        let pId3 = peopleModel.create("Meier", "Hans");
        expect(peopleModel.findAll().length).toBe(3)
        expect(peopleModel.findByLastname("Sawitzki").length).toBe(2)

    })
})