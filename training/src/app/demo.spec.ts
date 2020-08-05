/*
let sequenceWithExpectations = () => {
    expect(true).toBeTruthy();
  })

let test = () => {
    it('is trivial', sequenceWithExpectations
  }
describe('Demo', test)
*/

describe('Demo', () => {
    it('is trivial', () => {
        expect(true).toBeTruthy();
      })
  })
