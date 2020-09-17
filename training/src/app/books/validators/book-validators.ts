import { FormGroup, FormControl } from '@angular/forms';

export function validateBook(g: FormGroup) {
    const priceControl  = g.controls["price"]
    const pagesControl  = g.controls["pages"]
    const price = Number(priceControl.value)
    const pages = Number(pagesControl.value)
    if ((pages>100) && (price<9.99)){

        return {description: "inconsistent price/pages", valid:false}
    } 

}
