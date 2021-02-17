//Type Inference

let message = "Hello"
message = 'World'
let message2 = `Message is: ${message}`

const digit = 42
//digit = 43

//message = 42

//Ohne Type Inference
let message3
message3 = "Moon"
message3 = 42

//Ohne Type Inference mit Type-Angabe
let message4:string
message4 = "Moon"
//message4 = 42