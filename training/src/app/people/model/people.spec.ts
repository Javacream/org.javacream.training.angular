import { PersonClass } from "./people"

describe("People Specs", () => {
    it("should create a person", () => {
        let person = new PersonClass(42, "Sawitzki", "Rainer")
        expect(person).not.toBeNull()
    })
})