import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'showMedia' })
export class showMedia implements PipeTransform {
    transform(value: number) {

        if(isNaN(value)){
            return 0;
        }else{
            return Math.round(value*100)/100;
        }
     
    }
}