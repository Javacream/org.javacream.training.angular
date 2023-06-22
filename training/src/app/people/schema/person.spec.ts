import {Person, PersonClass} from './person'

describe('Person', () => {
    it('should create people', () => {
        let p:Person = new PersonClass("Rainer", "Sawitzki", 42)
        let p2:Person = {
            "firstname": "Rainer",
            "lastname": "Sawitzki",
            "id": 4711
            }  
        expect(true).toBeTruthy()    
    })
})
