import {demo3} from './types_scratch'

describe("TypeScript Types are working", () => {

    it ("trivial test should work", () => {
        let message = "Hugo"
        expect(message).toBe("Hugo")

    }), 

    it ("types should work"), () => {
        let result = demo3((p:string):boolean => {return true})   
        expect(result).toBeTrue()
    }
})

