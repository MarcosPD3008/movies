import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  pel:any = {};
  constructor(private router:Router, private activated: ActivatedRoute, public ps:PeliculasService) {

  }

  ngOnInit(): void {
    this.activated.params.subscribe((params:any) => {
      this.ps.GetPelicula(params['id']).subscribe((pel:any) =>{
        console.log(pel);
        this.pel = pel
      });
    })
  }

}
