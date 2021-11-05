import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-look',
  templateUrl: './look.component.html',
  styleUrls: ['./look.component.css']
})
export class LookComponent implements OnInit {
   mensaje:string="este es el id: "
  constructor() { }

  ngOnInit(): void {
  }
 saludo(value:number){
  this.mensaje=value+"";
 }

}
