export interface Person {
    lastname: string;
    firstname: string;
    height: number;
    id: number;
}

export class PersonImpl implements Person {
    constructor(readonly id: number, readonly lastname: string, readonly firstname: string, readonly height: number){}
}
