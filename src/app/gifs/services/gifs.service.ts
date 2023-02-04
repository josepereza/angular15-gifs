import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Gif, Gifs } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
apiKey:string='XH5h5U83xh4m3xWBcok9ofoLlz0wv6q8'
gifArray$=new Subject<Gif[]>();
_historial:string[]=[]
gif!:Gif[];
  constructor(private http:HttpClient) { 

    if (localStorage.getItem('historial')){

          this._historial= JSON.parse( localStorage.getItem('historial')!) 

    }
  }

get historial(){
  return [...this._historial]
}
  busqueda(termino:string){

    if(termino.trim() !== '' &&  !this._historial.includes(termino.trim())){
      if (this._historial.length>5 ){
        this._historial.splice(5,1)
      }
    this._historial.unshift(termino.trim())
  localStorage.setItem('historial', JSON.stringify(this._historial))
    }
    this.getAll(termino).subscribe(datos=>{
    this.gif=datos.data;
     this.gifArray$.next(this.gif)
    })

   
  }
  getAll(termino:string){
return this.http.get<Gifs>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${termino}&limit=25&offset=0&rating=g&lang=en`)

  }
}
