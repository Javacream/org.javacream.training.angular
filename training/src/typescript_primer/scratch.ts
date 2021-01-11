//Vars und Const

//Type Inference

let message = "Hello"
//let message = "Hello"
let message2 = "Hello";
message = "Hello World!"
const message3 = "Hello"
//message3 = "Hello World!"

//Types
let char = message.charAt(0)
//message = 42

//Type-Deklaration

let message4:any
let messagea5:string = "Hugo"

message4 = "Hugo"
message4 = 42

function simple(p1:string, p2:number){
    if (p2 > 5){
        return "OK"
    }else{
        return false
    }
}

function simpleWithDefaultParams(p1 = "Hugo", p2 = 42){

}

let result = simple("Hugo", 43)
