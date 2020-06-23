import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Formation } from 'src/models/Formation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-des-formations-formateur',
  templateUrl: './liste-des-formations-formateur.component.html',
  styleUrls: ['./liste-des-formations-formateur.component.css'],
  providers:[TaskService]
})
export class ListeDesFormationsFormateurComponent implements OnInit {

  constructor(private taskService:TaskService,private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('token')==null)
    {
 alert("merci de connecter.");
 this.router.navigate(['/Login_Formateur']);
    }
    else if (localStorage.getItem('usertype')!="Formateur")
    {

   alert("vous n'êtes pas un candidat.");
   this.router.navigate(['/Login_Formateur']);

    }
    this.taskService.getIdTokenF(localStorage.getItem("token")).subscribe((res)=>
    {

      this.taskService.ListeDesFormationFormateur(res.toString()).subscribe((resultat)=>
      {
        this.taskService.sessions=resultat as Formation[];

      })
    })


  }

}
