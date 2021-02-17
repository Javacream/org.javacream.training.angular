//classic
function sayHello(){
    return "Hello"
}

function greet(name:string){
    return "Hello " + name 
}

function greetWithDefaultArgument(name="Sawitzki"){
    return "Hello " + name 
}

function typedGreet(name:string):string{
    return "Hello " + name
}

let result = typedGreet("Hugo")

const typedFunctionalGreet: (_:string) => string =  function (name:string) {
    return "Hello " + name 
}
//Arrow-Funktionen

const arrowFunctionalGreet = (name:string) => {
    return "Hello " + name 
}


const names = ["Hugo", "Emil"]
names.forEach( (element, index) => {console.log(element)})