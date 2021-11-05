import { LookComponent } from './../../look/look.component';
import { IPost2Send } from './../../../model/model-interfaces';
import { PaginationService } from './../../../service/pagination.service';
import { PostService } from './../../../service/post.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IPage, IPost } from 'src/app/model/model-interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { DateTimeService } from 'src/app/service/datetime.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistPostComponent implements OnInit {

  aPosts: IPost[];
  totalElements: number;
  totalPages: number;
  page: number;
  barraPaginacion: string[];
  pageSize: number = 10;
  campo:string ='id';
  orden:string="ASC";
  oPost:IPost;
  ePost:IPost2Send;
  nuevoVisible:boolean;
  busqueda:string="";

  strUsuarioSession: string;

  constructor(
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oPaginationService: PaginationService,
    private oPostService: PostService, 
    private oDateTimeService: DateTimeService   
  ) {

    if (this.oRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", this.oRoute.snapshot.data.message);
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.page = 1;    
    this.getPage();
  }

  ngOnInit(): void {
  }

  getPage = () => {
    this.oPostService.getPage(this.pageSize, this.page, this.campo, this.orden,this.busqueda).subscribe((oPage: IPage) => {
      this.aPosts = oPage.content;
      this.totalElements = oPage.totalElements;
      this.totalPages = oPage.totalPages;
      this.barraPaginacion = this.oPaginationService.pagination(this.totalPages, this.page);
    })
  }

  jumpToPage = () => {
    this.getPage();
    return false;
  }

  cambiaVisible=(id:number)=>{
    this.oPostService.getOne(id).subscribe((oData: IPost) => {
          this.oPost= oData;

          if(this.oPost.visible==true){
              this.nuevoVisible=false;
        }else{
              this.nuevoVisible=true;
              }

            this.ePost= {
              id: this.oPost.id,
              titulo: this.oPost.titulo,
              cuerpo: this.oPost.cuerpo,
              etiquetas: this.oPost.etiquetas,
              fecha:this.oDateTimeService.getStrFecha2Send(this.oDateTimeService.getStrFecha2Show(this.oPost.fecha)),
              visible:this.nuevoVisible
            }

      this.update();
    })
  }

  update = ():void => {
    this.oPostService.updateOne(this.ePost).subscribe((result: number) => {
       console.log(result)
       this.getPage();
    })
  }

  //look
  /*
  eventsSubject: Subject<void> = new Subject<void>();

  openLook():void {
    this.eventsSubject.next();
  }

  closeModal():void {
    this.oRouter.navigate(["/plist/"]);
  }*/

  @ViewChild(LookComponent) look:LookComponent;
    enviarMensaje(id:number){
     this.look.saludo(id);
    }
}
