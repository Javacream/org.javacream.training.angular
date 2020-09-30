import { of } from 'rxjs';
import { map } from 'rxjs/operators';

map((x:number) => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));