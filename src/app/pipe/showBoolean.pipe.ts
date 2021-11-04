import { Pipe, PipeTransform } from '@angular/core';
import { IFecha } from '../model/model-interfaces';

@Pipe({ name: 'showBoolean' })
export class showBooleanPipe implements PipeTransform {
    transform(value: boolean) {
        if (value==true) {
            return "fas fa-check";
        } else {
            return "fas fa-times";
        }
    }
}