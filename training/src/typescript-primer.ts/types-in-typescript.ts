//let|const var_name:type = Literal
let lastame:string = "Sawitzki"
const firstname:string = "Rainer"
let height:number = 183

//firstname = "Hugo" Compiler-Fehler

//Check Typsierung
//height = "groß" Compiler-Fehler

//Type Inference
let lastname2 = "Mustermann"
//lastname2 = 9 Compiler-Fehler

//Grenzen der Type Inference: any
let lastname3
lastname3 = "Meier"
lastname3 = 42