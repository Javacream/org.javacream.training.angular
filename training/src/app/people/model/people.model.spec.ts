import {Person} from './people.model'


describe ("Person type works", () => {
	it ("person has id, lastname, ...", () => {
		let p:Person = {id:100, lastname: "Sawitzki", firstname:"Rainer", gender:"m", height:183}
		expect(p.lastname).toBe("Sawitzki")
})
})


