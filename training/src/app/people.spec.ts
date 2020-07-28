import {Person } from './people/model/people';
it('literal is a person', () => {
  let p:Person = {id: 1, lastname:"A", firstname:"A", gender:"A", height:188}
  expect(p.lastname).toBe("A");
});

