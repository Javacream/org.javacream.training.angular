import { FormGroup, FormControl } from '@angular/forms';

export function validateBook(g: FormGroup) {
    let titleControl  = g.controls["title"]
    console.log(titleControl.value)
    if (false){
        return {valid:false}

    }
}
