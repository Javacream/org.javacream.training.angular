//Jasmine Tests

describe("Simple Jasmine Tests", () => {
    it("should work", () => {
        let name = "Sawitzki"
        expect(name).toBe("Sawitzki")
    })

    it("should work too", () => {
        let number = 9
        expect(number).toBeGreaterThan(1)
    })

})