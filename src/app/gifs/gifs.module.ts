import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar/buscar.component';
import { ListadoComponent } from './listado/listado.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BuscarComponent,
    ListadoComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  exports:[
    BuscarComponent,
    ListadoComponent
  ]
})
export class GifsModule { }
