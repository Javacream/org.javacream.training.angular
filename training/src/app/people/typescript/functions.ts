//klassisch

function demo(p1:string, p2:boolean){
    return 42
}


let result = demo("Hugo", true)
//demo("Hugo", 42)

function demo2(p1:string, p2:boolean):number{
    return 42
}


function demo3(p1:string, p2:boolean){
    if(p2){
        return 42
    }else{
        return "OK"
    }
}

let result3 = demo3("", true)



//Funktions-Literal

let demoLiteral = function (p1:string, p2:boolean){
    return 42
}

let literalResult = demoLiteral("Hugo", true)

//Funktions-Literal und Typisierung

let demoLiteral2: (x:string, y:boolean) => number

demoLiteral2 = function (p1:string, p2:boolean){
    return 42
}

//Arrow-Syntax


let demoArray = (p1:string, p2:boolean) => {
    return 42
}

let demoArray2 = (p1:string, p2:boolean):number => {
    return 42
}

let demoArray3: (x:string, y:boolean) => number = (p1:string, p2:boolean) => {
    return 42
}
