//classic
function simple(p:string):boolean{
    return true
}

//functional
let simpleFunctionReference = function(p:string):boolean{
    return true
}

//arrow (bevorzugte Variante insbesondere bei Funktions-Referenzen als Parameter)

let simpleFunctionReferenceWithArrow = (p:string):boolean => {
    return true
}

function fnWithCallback(callbackFn){
    return callbackFn("Hugo")
}
let result = fnWithCallback((p) => { return true})

let message:string = "Hello"
let typedSimpleFunctionReferenceWithArrow:(x:string) => number


typedSimpleFunctionReferenceWithArrow = (p:string):number => {
    return 42
}

function typedFnWithCallback(callbackFn:(x:string)=>boolean){
    return callbackFn("Hugo")
}
let result2 = typedFnWithCallback((p:string) => { return true})