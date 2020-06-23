import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partie-admin',
  templateUrl: './partie-admin.component.html',
  styleUrls: ['./partie-admin.component.css']
})
export class PartieAdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('token')==null)
    {
 alert("merci de connecter.");
 this.router.navigate(['/Admin']);
    }
    else if (localStorage.getItem('usertype')!="Admin")
    {
     
   alert("vous n'êtes pas un Admin.");
   this.router.navigate(['/Admin']);
      
    }
  }

}
