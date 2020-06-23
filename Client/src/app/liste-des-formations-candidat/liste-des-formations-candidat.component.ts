import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Candidat } from 'src/models/Candidat.model';
import { from } from 'rxjs';
import { Formation } from 'src/models/Formation.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-liste-des-formations-candidat',
  templateUrl: './liste-des-formations-candidat.component.html',
  styleUrls: ['./liste-des-formations-candidat.component.css'],
  providers:[TaskService]
})
export class ListeDesFormationsCandidatComponent implements OnInit {
Liste:object[]=[];
  constructor(private taskService:TaskService,private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('token')==null)
    {
 alert("merci de connecter.");
 this.router.navigate(['/Login']);
    }
    else if (localStorage.getItem('usertype')!="Candidat")
    {

   alert("vous n'êtes pas un candidat.");
   this.router.navigate(['/Login']);

    }

    else
    {
      this.taskService.getIdToken(localStorage.getItem("token")).subscribe((res)=>
      {

        this.taskService.ListeDesFormationCandidat(res.toString()).subscribe((resultat)=>
        {
          this.taskService.Candidat_Sessions=resultat as Candidat[];

        })
      })
    }





  }

}
