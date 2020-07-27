export interface Person{
	id: number
    lastname:string
	firstname: string
	gender: string
    height: number
    address?:string
}

export class PersonClass implements Person{
    constructor(readonly id: number, readonly  lastname: string, readonly  firstname: string, readonly  gender: string, readonly  height:number){
    }
}


