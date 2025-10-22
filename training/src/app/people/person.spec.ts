import { Person } from "./person_class"

describe('Person Tests', () => {
    let person:Person = {id: 666, lastname: 'Christ', firstname: 'Anti'}

    it('should have Christ as lastname', () => {
        expect(person.lastname).toBe('Christ')
    })

    it('should have Anti as firstname', () => {
        expect(person.firstname).toBe('Anti')
    })

    it('should have id 666', () => {
        expect(person.id).toBe(666)
    })


})