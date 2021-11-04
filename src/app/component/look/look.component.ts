import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-look',
  templateUrl: './look.component.html',
  styleUrls: ['./look.component.css']
})
export class LookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  muestra = () => {
    console.log("spy un show");
  }

}
