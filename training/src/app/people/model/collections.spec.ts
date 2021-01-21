describe ("collections in typescript", () => {
	it ("working with lists", () => {
        let names = ["Hugo", "Emil"]
        let names2 = new Array<string>()
        expect(names.length).toBe(2)
        names.push("Fritz")
        expect(names.length).toBe(3)
})


it ("working with dictionaries/maps", () => {
    let names = new Map<number, string>()
    names.set(1, "Hugo")
    names.set(2, "Emil")
    expect(names.size).toBe(2)
    let namesList = Array.from(names.values())
    expect(namesList.length).toBe(2)
})

it ("iteration", () => {
    let names = ["Hugo", "Emil"]
    names.forEach((element) => console.log(element))

})

it ("filtering", () => {
    let names = ["Hugo", "Emil"]
    let filtered = names.filter((element) => element.charAt(0)==="H")
    
})

it ("transformation", () => {
    let names = ["Hugo", "Emil"]
    let transformed = names.map((element) => element.length)
    
})

it ("transformation long aarrow", () => {
    let names = ["Hugo", "Emil"]
    let transformed = names.map((element) => {return element.length})
    
})


})
