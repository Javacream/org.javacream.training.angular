let my_var:string = "Hello"
let my_var2:any = "World"
let list:Array<string> = ["A", "B", "C"]
let list2:any = ["A", 42, false]


my_var2 = 42
list2.push("Hello")
list2.push(4711)
list2.push(true)

console.log(my_var)

function demoFn(p1:string, p2:number){
    if (p2 === 42){
        return "Hugo"
    }
    else{
        return true
    }
}

let demoFn2:(p1:string, p2:number) => boolean = (p1:string, p2:number) => {
        return true
}


let result = demoFn("a", 42)

function demo3 (callback:(p1:string, p2:number) => boolean){
    let result:boolean = callback("this", 42)
}

//demo3(demoFn)
demo3(demoFn2)


export {my_var, my_var2}