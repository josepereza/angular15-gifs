import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit  {
  name = new FormControl('');

  constructor(private gifService:GifsService){}


  ngOnInit(): void {
  this.name.valueChanges.pipe(debounceTime(500)). 
  subscribe((termino:any)=>{

  

    this.gifService.busqueda(termino!)
   
  })
  }


}
