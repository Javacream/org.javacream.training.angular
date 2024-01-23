export class Demo{

}

export let demoString:string = 'Hello World' // type inference, demoString wird als string erkannt und deklariert

demoString = "Hello World"
//demoString = 42

export function demoFunction(){
   
    return true
}


function demoFunction2(param:boolean){
   let result1 = "1" 
   let result2 = 42 
   if (param){
    return result1

   }
   else{
    return result2

   }
}

export let demoFunction3:() => string = () => {
 return "42"   
}
let result:string|number = demoFunction2(true)
// let r:boolean = demoFunction2(false)
let result2:string = demoFunction3()
