import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Candidat } from 'src/models/Candidat.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-des-candidats',
  templateUrl: './liste-des-candidats.component.html',
  styleUrls: ['./liste-des-candidats.component.css'],
  providers:[TaskService]
})
export class ListeDesCandidatsComponent implements OnInit {

  constructor(private taskService:TaskService,private router:Router) { }

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
    else
    {
      this.getAllCandidat();
    }

  }
getAllCandidat()
{
  this.taskService.getAllCandidat().subscribe((res)=>{
    this.taskService.candidats=res as Candidat[];
  });
}
}
