import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'showAutor' })
export class showAutor implements PipeTransform {
    transform(value: string) {
        if (value=="") {
            return "Anonimo";
        } else {
            return value;
        }
    }
}