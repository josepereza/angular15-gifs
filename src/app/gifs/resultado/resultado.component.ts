import { Component } from '@angular/core';
import { Gif } from '../interfaces/gif.interface';
import { GifsService} from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  gif!:Gif[];
constructor(private gifService:GifsService){
this.gifService.gifArray$.subscribe((data:Gif[])=>{
  this.gif=data
})
}
}