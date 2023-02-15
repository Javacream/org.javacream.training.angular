import { Person, PersonIF } from "./people.model"

describe("people model", () => {
    xit("is OK", () => {
        expect(true).toBeTruthy()
    })

    it("creates a person", () => {

        let p = new Person(42, "Sawitzki", "Rainer", 'm', 183)
        expect(p).toBeDefined()
        expect(p.lastname).toBe("Sawitzki")
    })  

    it("is a person", () => {
        let o = {hugo: "Fritz"}
        o.hugo = "Emil"

        let p2:PersonIF = {id: 9, lastname: 'Muster', firstname: '', gender: 'x', height: 183}
        expect(o).toBeDefined()
        let p = new Person(42, "Sawitzki", "Rainer", 'm', 183)
        expect(p).toBeDefined()
        expect(p.lastname).toBe("Sawitzki")
    })  


})