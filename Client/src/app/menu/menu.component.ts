import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import * as start from '../../assets/js/jquer';
declare var $: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   IsFormateur:boolean=false;
   IsCandidat:boolean=false;
  constructor(private router:Router) { }

  ngOnInit() {
    start;

    if(localStorage.getItem("usertype")=="Candidat")
    {
      this.IsCandidat=true;
      this.IsFormateur=false;
    }
    else
    if(localStorage.getItem("usertype")=="Formateur")
    {
      this.IsCandidat=false;
      this.IsFormateur=true;
    }
  }
 
  Logout()
  {
    localStorage.clear();
    this.router.navigate(['']);
    this.ngOnInit();
    
  }
  
}
