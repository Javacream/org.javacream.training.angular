import {Person, PersonClass} from './person'

describe('Person', () => {
    it('should create people', () => {
        let p:Person = new PersonClass("Rainer", "Sawitzki")
        let p2:Person = {
            "firstname": "Rainer",
            "lastname": "Sawitzki"
            }  
        expect(true).toBeTruthy()    
    })
})
