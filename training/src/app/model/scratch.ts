function helper(s, cb){
    let s2 = "Hello" + s
    let result:number = cb(s2) //Compiler garantiert hier gar nichts
}
function typedHelper(s:string, cb:(p:string) => number){
    let s2 = "Hello" + s
    let result:number = cb(s2) //Compiler garantiert hier gar nichts
}

let  f1 = (p:string) => {
    return true
}

function f2(p:string){
    return 42
}
function f3(p:number){
    return 42
}

helper("Hugo", f1)
helper("Hugo", f2)
helper("Hugo", f3)
helper("Hugo", 42)
helper(true, 42)

typedHelper("Hugo", f1)
typedHelper("Hugo", f2)
typedHelper("Hugo", f3)
typedHelper("Hugo", 42)
typedHelper(true, 42)


f1 = (param:string) => {
    return 42;
}
