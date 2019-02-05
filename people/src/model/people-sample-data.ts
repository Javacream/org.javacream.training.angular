import { PersonImpl, Person } from './people';

export let samplePerson = new PersonImpl(42, 'Sawi', 'Rainer', 183);

export let samplePeople = new Array<Person>();
samplePeople.push(samplePerson);
samplePeople.push(new PersonImpl(1, 'Sawitzki', 'Klaus', 183));
samplePeople.push(new PersonImpl(2, 'Trek', 'Star', 193));
samplePeople.push(new PersonImpl(3, 'Mine', 'Emerald', 153));
samplePeople.push(new PersonImpl(4, 'Man', 'Pac', 173));
