import { Injectable } from '@angular/core';

export interface Person{
	id?: number
    lastname:string
	firstname: string
	gender: string
    height: number
}

export class PersonClass implements Person{
    constructor(readonly id: number, public lastname: string, readonly  firstname: string, readonly  gender: string, readonly  height:number){
    }
}
