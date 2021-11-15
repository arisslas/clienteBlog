import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'showCalification' })
export class showCalification implements PipeTransform {
    transform(value: number) {
       let num= Math.round(value);
      
        switch (num) {
            case 0:
                return '<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
                break;
            case 1:
                return '<span class="fa fa-star starVisible"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
                break;
            case 2:
                return '<span class="fa fa-star starVisible"></span><span class="fa fa-star starVisible"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
                break;
            case 3:
                return '<span class="fa fa-star starVisible"></span><span class="fa fa-star starVisible"></span><span class="fa fa-star starVisible"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
                break;
            case 4:
                return '<span class="fa fa-star starVisible"></span><span class="fa fa-star starVisible"></span><span class="fa fa-star starVisible"></span><span class="fa fa-star starVisible"></span><span class="fa fa-star"></span>';
                break;
            case 5:
                return '<span class="fa fa-star starVisible"></span><span class="fa fa-star starVisible"></span><span class="fa fa-star starVisible"></span><span class="fa fa-star starVisible"></span><span class="fa fa-star starVisible"></span>';
                break;
            default:
                return '<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
                break;
        }
    }
}