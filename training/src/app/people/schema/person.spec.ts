import {Person} from './person'

describe('Person', () => {
    it('should create people', () => {
        let p:Person = {
            "firstname": "Rainer",
            "lastname": "Sawitzki",
            "id": 4711, 'height': 177, gender:'d'
            }  
        expect(true).toBeTruthy()    
    })
})
