function sayHelloClassic(name){
    return "Hello" + name
}

sayHelloClassic("Hugo")

//const message = "Hello"
const sayHelloFunctionLiteral = function (name){
    return "Hello" + name
}

sayHelloFunctionLiteral("Emil")

const sayHelloArrowFunction = (name) => {return "Hello" + name}
const sayHelloArrowFunctionSyntacticSugar = name => "Hello" + name + "!"

//Exkurs Variablen-Interpolation
const output = `Hello $name !`


sayHelloArrowFunction("Emil")


//Types

function sayHelloClassicTyped (name:string, n:number) :string{
    return "Hello" + name
}

let greeting = sayHelloClassicTyped("Hugo", 42);

/*
function sayHelloClassicTyped2 (name:string, n:number) :string{
    if (n < 5){
        return "Hello" + name}
    else{
        return true
    }
}
*/
function sayHelloClassicTyped2 (name:string, n:number){
    if (n < 5){
        return "Hello" + name
    }
    else{
        return true
    }
}


let greeting2 = sayHelloClassicTyped2("Hugo", 42);
greeting2 = "Emil"
greeting2 = false
//greeting2 = 42 //keine Number

let sayHelloArrowFunctionTyped: (_: string) => string = (name:string) => {return "Hello" + name}
//sayHelloArrowFunctionTyped = "Hugo"
sayHelloArrowFunctionTyped = (name:string) => {return "Goodbye" + name}
//sayHelloArrowFunctionTyped = (n:number) => {return "Goodbye" + name}
