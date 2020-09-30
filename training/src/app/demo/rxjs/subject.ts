import {BehaviorSubject} from 'rxjs'

const subject = new BehaviorSubject(0)
subject.subscribe((data) => console.log("Observer 1 "  +data))
subject.subscribe((data) => console.log("Observer 2 "  +data))

subject.next(1)
subject.subscribe((data) => console.log("Observer 3 "  +data))

subject.next(2)

subject.subscribe((data) => console.log("Observer 4 "  +data))

