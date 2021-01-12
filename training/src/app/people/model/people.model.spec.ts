import {Person} from './people.model'
import {people} from './people.data'
describe("PeopleModel", () => {
    it ("Person interface works", () => {
        const person:Person = {id:42, lastname:"Sawitzki", firstname:"Rainer", gender:"m", height:183}
        expect(person.lastname).toBe("Sawitzki")
    })
})

describe("People Map", () => {
    it ("people has 5 elements", () => {
        expect(people.size).toBe(5)
    })
    it ("people has 2 Meier", () => {
        const peopleList = Array.from(people.values())
        const filtered = peopleList.filter((p) => p.lastname === 'Meier')
        expect(filtered.length).toBe(2)
    })

    it ("peopleList can be transformed to Names", () => {
        const peopleList = Array.from(people.values())
        const filtered = peopleList.filter((p) => p.lastname === 'Schneider').map(person => `${person.firstname} ${person.lastname}`)
        expect(filtered[0]).toBe("Erna Schneider")
    })

})