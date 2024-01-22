import {Demo, demoString} from './demo'


describe('demo test suite', () => {
    it('a demo test case', () => {
        expect(true).toBeTrue()
    })
    it('demoString is Hello World', () => {
        expect(demoString).toBe('Hello World')
    })

})