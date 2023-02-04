import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit  {

  terminos:string[]=[]

  constructor(private gifService:GifsService){

  }
  ngOnInit(): void {
    
  }
 buscar(item:string){
  this.gifService.busqueda(item)

 }

 get termino(){
  return this.gifService.historial
 }

}
