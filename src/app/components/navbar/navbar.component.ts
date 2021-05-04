import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  toSearch:string = "";
  closed:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.change();

    $(window).resize( () =>{
      this.change();
    })
  }

  Navigate(){
    this.router.navigate(["/Home", "cartelera", this.toSearch])
    this.toSearch = ""
  }

  change(){
    let width = $(window).width();
    console.log(width)


    if(width > 550)
      this.closed = false;
    else
      this.closed = true;
  }

  toggle(){
    $('.navbar-collapse').collapse('hide');  }
}
