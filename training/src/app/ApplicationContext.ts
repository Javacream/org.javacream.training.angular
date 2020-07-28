import {Person, PersonClass} from './people/model/people'

export const company = "Javacream"
export let user = new PersonClass(42, "Mustermann", "Hans", 'm', 199)


export let samplePeople = new Array<Person>();
samplePeople.push(user);
samplePeople.push(new PersonClass(1, 'Sawitzki', 'Klaus', 'm', 183));
samplePeople.push(new PersonClass(2, 'Trek', 'Star', 'm', 193));
samplePeople.push(new PersonClass(3, 'Mine', 'Emerald', 'm', 153));
samplePeople.push(new PersonClass(4, 'Man', 'Pac', 'm', 173));

setTimeout(() => {user.lastname = "HUGO"; console.log(user.lastname)}, 3000)