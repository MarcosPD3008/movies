import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  SearchWord:string = "";
  Titulo:string = "";
  Peliculas:any[] = [];
  Trending:any[] = [];
  Kids:any[] = [];
  AllString:any[] = [[],[],[]];
  Mode:string = "cartelera"; 

  constructor(private router:Router, private activated:ActivatedRoute, public ps:PeliculasService) {
    router.events.subscribe((event:any) =>{
      if(event instanceof NavigationEnd){
        activated.params.subscribe(params =>{
          this.Mode = params['mode'];

          if(params['search'] == ""){
            this.SearchWord = "";
            this.Titulo = "Todas las peliculas";

            ps.getEnCartelera().subscribe(pel =>{
              this.Peliculas = pel.results;
              this.AllString[0] = []
              for(var x = 0; x < this.Peliculas.length; x++){
                this.AllString[0].push(97);
              }
            })

            ps.getPopulares().subscribe(pel =>{
              this.Trending = pel.results;
              this.AllString[1] = []
              for(var x = 0; x < this.Trending.length; x++){
                this.AllString[1].push(97);
              }
            })

            ps.getKids().subscribe(pel =>{
              this.Kids = pel.results;
              this.AllString[2] = []
              for(var x = 0; x < this.Kids.length; x++){
                this.AllString[2].push(97);
              }
            })
          }
          else{
            ps.buscarPelicula(params['search']).subscribe(pel =>{
              this.Peliculas = pel.results;
              this.Titulo = "Parametro de Busqueda: " + params['search'];
              this.SearchWord = params['search'];
              this.AllString[0] = []
              for(var x = 0; x < this.Peliculas.length; x++){
                this.AllString[0].push(97);
              }
            })
          }
        })
      }
    })
  }

  ngOnInit(): void {
  }

  CountChg(i:number, j:number, length:number){
    if(this.AllString[j][i] == 97)
      this.AllString[j][i] = length;
    else
      this.AllString[j][i] = 97;
  }
}
