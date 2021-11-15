import { IPost2Send } from './../../model/model-interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { IPost } from 'src/app/model/model-interfaces';
import { PaginationService } from 'src/app/service/pagination.service';
import { PostService } from 'src/app/service/post.service';
import { Location } from '@angular/common';
import { DateTimeService } from 'src/app/service/datetime.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  id: number = 0;
  oPost: IPost;
  ePost:IPost2Send;
  nuevaValoracion:number;
  strResult: string =null;
  click : boolean = true;


  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,    
    private oPostService: PostService,
    private oLocation: Location,
    private oDateTimeService: DateTimeService
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      localStorage.setItem("user", this.oActivatedRoute.snapshot.data.message);
    } else {
      localStorage.clear();
    }

    this.id = this.oActivatedRoute.snapshot.params.id
    this.getOne();

  }

  ngOnInit() {
    
  }

  goBack() {
    this.oLocation.back();
  }

  getOne = () => {
    this.oPostService.getOne(this.id).subscribe((oData: IPost) => {
      this.oPost = oData;
    })
  }


  cambiaVoto=()=>{
    


            this.ePost= {
              id: this.oPost.id,
              titulo: this.oPost.titulo,
              cuerpo: this.oPost.cuerpo,
              etiquetas: this.oPost.etiquetas,
              fecha:this.oDateTimeService.getStrFecha2Send(this.oDateTimeService.getStrFecha2Show(this.oPost.fecha)),
              visible:this.oPost.visible,
              imagen:this.oPost.imagen,
              autor:this.oPost.autor,
              valoracion:this.oPost.valoracion+this.nuevaValoracion,
              numeroValoraciones:this.oPost.numeroValoraciones+1
            }
            
            this.update();
            
  }

  update = ():void => {
    this.oPostService.updateOne(this.ePost).subscribe((result: number) => {
      if (result) {
        this.strResult = "voto enviado";
      } else {
        this.strResult = "Error al enviar tu voto";
      }
      this.openModal();
    })
  }


//modal

  eventsSubject: Subject<void> = new Subject<void>();

  openModal():void {
    this.eventsSubject.next();
  }

  closeModal():void {
    this.oRouter.navigate(["/home/" ]);
  }
cambiaValor(valor:number){
  if(this.click==true){
    this.click = !this.click;
  }
  
  for (let index = 1; index <=5; index++) {
    let element = document.getElementById(index+'star');
    if (index<=valor) {
       element.style.color="#b4be60";
    } else {
        element.style.color="black";
        }
    }
  this.nuevaValoracion=valor;
  
}

}
