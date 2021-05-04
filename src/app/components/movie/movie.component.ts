import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare const $:any;

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  pel:any = {};
  Mobile:boolean = false;
  constructor(private router:Router, private activated: ActivatedRoute, public ps:PeliculasService) {}

  ngOnInit(): void {
    $(window).resize(()=> this.Mobile = this.isMobile());
    
    this.Mobile = this.isMobile();

    this.activated.params.subscribe((params:any) => {
      this.ps.GetPelicula(params['id']).subscribe((pel:any) =>{
        this.pel = pel
      });
    })
  }

  isMobile(): boolean{
    if( navigator.userAgent.match(/Android/i)
    ||  navigator.userAgent.match(/webOS/i)
    ||  navigator.userAgent.match(/iPhone/i)
    ||  navigator.userAgent.match(/iPad/i)
    ||  navigator.userAgent.match(/iPod/i)
    ||  navigator.userAgent.match(/BlackBerry/i)
    ||  navigator.userAgent.match(/Windows Phone/i)
    ||  $(window).width() < 900)
      return true;
    else
      return false;
  }

}
