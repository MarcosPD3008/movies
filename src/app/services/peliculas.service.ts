import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http'
import 'rxjs/Rx'

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apikey:string = "1c7033f493563edefb603801e3a8e95d"
  private urlMoviedb = "https://api.themoviedb.org/3/"
  public urlPicture = "https://image.tmdb.org/t/p/w500/" 

  constructor(private jsonp:Jsonp, private http:Http) { }

  getPopulares(){
    let url = `${this.urlMoviedb}discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`
    return this.jsonp.get(url).map(res => res.json())
  }

  getTrending(){
    let url = `${this.urlMoviedb}trending/movie/week?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`
    return this.jsonp.get(url).map(res => res.json())
  }

  getKids(){
    let url = `${this.urlMoviedb}trending/movie/week?api_key=${this.apikey}&include_adult=false&language=es&callback=JSONP_CALLBACK`
    return this.jsonp.get(url).map(res => res.json())
  }

  getEnCartelera(){
    let url = `${this.urlMoviedb}movie/now_playing?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`
    return this.jsonp.get(url).map(res => res.json())
  }

  buscarPelicula( texto:string ){
    let url = `${ this.urlMoviedb }search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  GetPelicula( texto:string ){ 
    let url = `${ this.urlMoviedb }movie/${ texto }?&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }
  GetImgSrc( url: string): string{
    return `${this.urlPicture + url}`
  }
}
