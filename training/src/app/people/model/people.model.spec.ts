import { Person } from "./people.model"

describe("people model", () => {
    xit("is OK", () => {
        expect(true).toBeTruthy()
    })

    it("creates a person", () => {

        let p = new Person(42, "Sawitzki", "Rainer", 'm', 183)
        expect(p).toBeDefined()
        expect(p.lastname).toBe("Sawitzki")

    })
})