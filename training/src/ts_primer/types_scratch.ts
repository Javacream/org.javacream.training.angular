let message:string

message= "Hello"
//message = 42 -> Transpiler-Fehler

function demo(m="World") :boolean{

    let state = true
    console.log(m)
/*    if(state){
        return 42
    }else{
        return "Hugo"
    }*/
    return false
}

let result = demo();
result = true

//Arrow-Syntax
let demo2:(x: number) => string = (x: number) :string => {
    console.log(x)
    return "Hugo"
}

let result2 = demo2(42);

//Eine Funktion mit einem Parameter als Callback-Funktion , Parameter: string, return boolean
let demo3 = (cb:(p:string)=> boolean) => {
    return cb("Hello")

}

let result3 = demo3(demo)

let result4 = demo3((p:string):boolean => {return true})

