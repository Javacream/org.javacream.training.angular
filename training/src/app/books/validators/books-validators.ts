import { FormGroup, FormControl } from '@angular/forms';

export function validateBook(g: FormGroup) {
    const title:string  = g.value.title
    const pages:number  = g.value.pages
    if (pages<title.length){

        return {description: "invalid title/pages", valid:false}
    } 

}